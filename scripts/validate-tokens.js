#!/usr/bin/env node

/**
 * Token Validation Script
 * Validates that all required tokens exist in cake-color-tokens.json
 * Fails the build if critical tokens are missing
 */

const fs = require('fs');
const path = require('path');

// Critical tokens required for the application to function correctly
// These are tokens used by core components, especially AI response components
const CRITICAL_TOKENS = [
  // Surface tokens
  'surfaceCard',
  'surfaceIconButtonSecondaryHover',
  'surfaceIconButtonSecondaryPress',
  'surfaceItemHover',
  'surfaceItemSelected',
  'surfaceDisabled',
  
  // Border tokens
  'borderWeak',
  'borderZero',
  'borderFocus',
  
  // Icon tokens
  'iconPrimary',
  'iconIconButtonSecondary',
  'iconIconButtonSecondaryHover',
  'iconIconButtonSecondaryPressed',
  'iconDisabled',
  
  // Reference tokens
  'referencePrimary',
  'referenceSecondaryWeak',
  'referenceHelper',
  'referenceFocus',
  'referenceSurfaceDisabled',
  
  // Text tokens
  'textPrimary',
];

// Tokens used by AI response components specifically
const AI_COMPONENT_TOKENS = [
  'surfaceCard',
  'surfaceIconButtonSecondaryHover',
  'surfaceIconButtonSecondaryPress',
  'borderWeak',
  'iconPrimary',
  'iconIconButtonSecondary',
  'iconIconButtonSecondaryHover',
  'iconIconButtonSecondaryPressed',
  'referenceSecondaryWeak',
  'surfaceItemHover',
  'surfaceItemSelected',
  'referenceSurfaceDisabled',
  'textPrimary',
];

const TOKEN_FILE_PATH = path.join(__dirname, '../src/tokens/cake-color-tokens.json');

function validateTokens() {
  console.log('🔍 Validating color tokens...\n');
  
  // Check if token file exists
  if (!fs.existsSync(TOKEN_FILE_PATH)) {
    console.error('❌ ERROR: Token file not found:', TOKEN_FILE_PATH);
    console.error('   The cake-color-tokens.json file must exist before building.');
    process.exit(1);
  }
  
  // Load and parse token file
  let tokens;
  try {
    const fileContent = fs.readFileSync(TOKEN_FILE_PATH, 'utf8');
    tokens = JSON.parse(fileContent);
  } catch (error) {
    console.error('❌ ERROR: Failed to parse token file:', TOKEN_FILE_PATH);
    console.error('   Error:', error.message);
    process.exit(1);
  }
  
  if (!tokens || typeof tokens !== 'object') {
    console.error('❌ ERROR: Token file is invalid or empty');
    process.exit(1);
  }
  
  // Check for missing critical tokens
  const missingTokens = [];
  const missingThemes = {};
  
  for (const tokenName of CRITICAL_TOKENS) {
    if (!tokens[tokenName]) {
      missingTokens.push(tokenName);
      continue;
    }
    
    const token = tokens[tokenName];
    if (!token.lightA) {
      if (!missingThemes[tokenName]) missingThemes[tokenName] = [];
      missingThemes[tokenName].push('lightA');
    }
    if (!token.darkA) {
      if (!missingThemes[tokenName]) missingThemes[tokenName] = [];
      missingThemes[tokenName].push('darkA');
    }
  }
  
  // Report results
  let hasErrors = false;
  
  if (missingTokens.length > 0) {
    console.error('❌ ERROR: Missing critical tokens:');
    missingTokens.forEach(token => {
      console.error(`   - ${token}`);
    });
    hasErrors = true;
  }
  
  if (Object.keys(missingThemes).length > 0) {
    console.error('❌ ERROR: Tokens missing theme values:');
    Object.entries(missingThemes).forEach(([token, themes]) => {
      console.error(`   - ${token}: missing ${themes.join(', ')}`);
    });
    hasErrors = true;
  }
  
  // Check AI component tokens specifically
  const missingAITokens = AI_COMPONENT_TOKENS.filter(token => !tokens[token]);
  if (missingAITokens.length > 0) {
    console.error('❌ ERROR: Missing tokens required for AI response components:');
    missingAITokens.forEach(token => {
      console.error(`   - ${token}`);
    });
    hasErrors = true;
  }
  
  if (hasErrors) {
    console.error('\n💡 Tip: Ensure cake-color-tokens.json is up-to-date and contains all required tokens.');
    console.error('   The token file must be committed to git before deployment.\n');
    process.exit(1);
  }
  
  // Success message
  console.log('✅ All critical tokens validated successfully!');
  console.log(`   Found ${Object.keys(tokens).length} tokens in file`);
  console.log(`   Validated ${CRITICAL_TOKENS.length} critical tokens\n`);
  
  return true;
}

// Run validation
if (require.main === module) {
  validateTokens();
}

module.exports = { validateTokens, CRITICAL_TOKENS, AI_COMPONENT_TOKENS };





