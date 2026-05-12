/**
 * GitHub API utility for fetching merged pull requests
 */

const GITHUB_API_BASE = 'https://api.github.com';
const REPO_OWNER = 'cake-admin';
const REPO_NAME = 'cakev2';
const CACHE_KEY = 'github_merges_cache';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

/**
 * Format date to match existing date format in the app
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date string
 */
export const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Parse PR title/description into simple text updates
 * @param {string} title - PR title
 * @param {string} body - PR body/description
 * @returns {Array<string>} Array of simple text updates
 */
export const parsePRUpdates = (title, body) => {
  const updates = [];
  
  // Extract updates from title
  if (title) {
    // Remove common prefixes like "feat:", "fix:", etc.
    const cleanTitle = title
      .replace(/^(feat|fix|docs|style|refactor|test|chore)[:\/]\s*/i, '')
      .trim();
    
    if (cleanTitle) {
      updates.push(cleanTitle);
    }
  }
  
  // Extract updates from body if it exists
  if (body) {
    // Look for bullet points or list items
    const lines = body.split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      // Match bullet points, numbered lists, or lines starting with common prefixes
      if (trimmed.match(/^[-*•]\s+/) || trimmed.match(/^\d+\.\s+/) || 
          trimmed.match(/^(added|updated|fixed|changed|improved|removed):\s+/i)) {
        const update = trimmed
          .replace(/^[-*•]\s+/, '')
          .replace(/^\d+\.\s+/, '')
          .replace(/^(added|updated|fixed|changed|improved|removed):\s+/i, '')
          .trim();
        if (update && !updates.includes(update)) {
          updates.push(update);
        }
      }
    }
  }
  
  // If no updates found, use the title as fallback
  if (updates.length === 0 && title) {
    const cleanTitle = title.replace(/^(feat|fix|docs|style|refactor|test|chore)[:\/]\s*/i, '').trim();
    if (cleanTitle) {
      updates.push(cleanTitle);
    }
  }
  
  return updates;
};

/**
 * Check if cached data is still valid
 * @returns {Object|null} Cached data or null if expired/invalid
 */
const getCachedData = () => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    
    const { data, timestamp } = JSON.parse(cached);
    const now = Date.now();
    
    if (now - timestamp < CACHE_DURATION) {
      return data;
    }
    
    // Cache expired, remove it
    localStorage.removeItem(CACHE_KEY);
    return null;
  } catch (error) {
    console.error('Error reading cache:', error);
    return null;
  }
};

/**
 * Cache data with timestamp
 * @param {Array} data - Data to cache
 */
const setCachedData = (data) => {
  try {
    const cacheData = {
      data,
      timestamp: Date.now()
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
  } catch (error) {
    console.error('Error setting cache:', error);
  }
};

/**
 * Fetch merge commits from GitHub API
 * @param {number} limit - Maximum number of merges to fetch (default: 15)
 * @returns {Promise<Array>} Array of formatted merge data
 */
export const fetchMergedPRs = async (limit = 15) => {
  // Check cache first
  const cached = getCachedData();
  if (cached) {
    return cached.slice(0, limit);
  }
  
  try {
    // First try to get PRs
    const prsUrl = `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=closed&sort=updated&direction=desc&per_page=${limit}`;
    const prsResponse = await fetch(prsUrl);
    
    let mergedPRs = [];
    
    if (prsResponse.ok) {
      const prs = await prsResponse.json();
      // Filter for merged PRs and format data
      mergedPRs = prs
        .filter(pr => pr.merged_at !== null)
        .map(pr => ({
          id: pr.id,
          number: pr.number,
          title: pr.title,
          body: pr.body || '',
          mergedAt: pr.merged_at,
          mergedDate: formatDate(pr.merged_at),
          author: pr.user?.login || 'Unknown',
          url: pr.html_url,
          updates: parsePRUpdates(pr.title, pr.body)
        }))
        .slice(0, limit);
    }
    
    // If no PRs found, try to get merge commits instead
    if (mergedPRs.length === 0) {
      // Fetch more commits to ensure we get enough merge commits (merge commits are less frequent)
      const commitsUrl = `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/commits?per_page=${Math.min(limit * 3, 100)}`;
      const commitsResponse = await fetch(commitsUrl);
      
      if (!commitsResponse.ok) {
        if (commitsResponse.status === 403) {
          throw new Error('GitHub API rate limit exceeded. Please try again later.');
        }
        throw new Error(`GitHub API error: ${commitsResponse.status} ${commitsResponse.statusText}`);
      }
      
      const commits = await commitsResponse.json();
      
      // Filter for merge commits (they have 2+ parents)
      mergedPRs = commits
        .filter(commit => commit.parents && commit.parents.length > 1)
        .map(commit => {
          const commitMessage = commit.commit.message;
          const lines = commitMessage.split('\n');
          let title = lines[0];
          
          // Clean up merge commit message format
          // Handle patterns like:
          // "Merge fix/navigation-ai-section: Add AI section..."
          // "Merge branch 'feat/button' into main"
          // "Merge pull request #123 from user/branch"
          
          // Extract description after colon if present
          if (title.includes(':')) {
            const colonIndex = title.indexOf(':');
            const afterColon = title.substring(colonIndex + 1).trim();
            if (afterColon) {
              title = afterColon;
            } else {
              // Remove merge prefix and branch name patterns
              title = title
                .replace(/^Merge\s+(?:fix|feat|docs|style|refactor|test|chore)[\/-][^:]+:\s*/i, '')
                .replace(/^Merge\s+(?:branch\s+['"]?[^'"]+['"]?\s+into\s+main|pull request\s+#\d+\s+from\s+[^\s]+)/i, '')
                .replace(/^Merge\s+/i, '')
                .trim();
            }
          } else {
            // Remove merge prefix and branch name patterns
            title = title
              .replace(/^Merge\s+(?:branch\s+['"]?[^'"]+['"]?\s+into\s+main|pull request\s+#\d+\s+from\s+[^\s]+)/i, '')
              .replace(/^Merge\s+(?:fix|feat|docs|style|refactor|test|chore)[\/-][^:]+:\s*/i, '')
              .replace(/^Merge\s+/i, '')
              .trim();
          }
          
          // If title is empty or just "into main", use the full first line
          if (!title || title.toLowerCase() === 'into main') {
            title = lines[0];
          }
          
          return {
            id: commit.sha,
            number: null,
            title: title,
            body: commitMessage,
            mergedAt: commit.commit.committer.date,
            mergedDate: formatDate(commit.commit.committer.date),
            author: commit.commit.author.name || 'Unknown',
            url: commit.html_url,
            updates: parsePRUpdates(title, commitMessage)
          };
        })
        .slice(0, limit);
    }
    
    // Cache the results
    if (mergedPRs.length > 0) {
      setCachedData(mergedPRs);
    }
    
    return mergedPRs;
  } catch (error) {
    console.error('Error fetching merged PRs:', error);
    throw error;
  }
};

/**
 * Get the latest merge information
 * @returns {Promise<Object|null>} Latest merge data or null
 */
export const getLatestMerge = async () => {
  try {
    const merges = await fetchMergedPRs(1);
    return merges.length > 0 ? merges[0] : null;
  } catch (error) {
    console.error('Error fetching latest merge:', error);
    return null;
  }
};

