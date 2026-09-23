import generatedLibrary from './sound-library.generated.json';

const PROFILES = {
  'urgent-notify': {
    name: 'Urgent Notification',
    family: 'Notification',
    category: 'Urgent',
    description: 'A focused notification for time-sensitive information that needs prompt attention.',
    useCases: ['Urgent notification', 'Priority message'],
    hierarchy: 'attention',
    attributes: { energy: 'High', pitch: 'Focused', character: 'Direct' },
  },
  'ambient-presence': {
    name: 'Ambient Presence',
    family: 'Expression',
    category: 'Ambient',
    description: 'A quiet, sustained presence for moments that should feel alive without asking for action.',
    useCases: ['Ambient state', 'Passive presence'],
    hierarchy: 'ambient',
    attributes: { energy: 'Low', pitch: 'Layered', character: 'Atmospheric' },
  },
  'boot-join': {
    name: 'Boot / Join',
    family: 'System',
    category: 'Arrival',
    description: 'A concise arrival cue for entering a system, session, or shared experience.',
    useCases: ['Startup', 'Join session'],
    hierarchy: 'informational',
    attributes: { energy: 'Medium', pitch: 'Ascending', character: 'Welcoming' },
  },
  'camera-shutter': {
    name: 'Camera Shutter',
    family: 'Device',
    category: 'Camera',
    description: 'A tactile capture cue that confirms a photo or image has been taken.',
    useCases: ['Photo capture', 'Camera action'],
    hierarchy: 'informational',
    attributes: { energy: 'Medium', pitch: 'Percussive', character: 'Tactile' },
  },
  'celebration-bright': {
    name: 'Celebration Bright',
    family: 'Expression',
    category: 'Celebration',
    description: 'An energetic reward for meaningful achievements and positive milestones.',
    useCases: ['Achievement', 'Milestone', 'Celebration'],
    hierarchy: 'informational',
    attributes: { energy: 'High', pitch: 'Ascending', character: 'Bright' },
  },
  'celebration-soft': {
    name: 'Celebration Soft',
    family: 'Expression',
    category: 'Celebration',
    description: 'A restrained reward for positive moments that should feel warm rather than triumphant.',
    useCases: ['Completion', 'Small achievement'],
    hierarchy: 'informational',
    attributes: { energy: 'Medium', pitch: 'Ascending', character: 'Warm' },
  },
  'confirm-up': {
    name: 'Confirm Up',
    family: 'Feedback',
    category: 'Directional',
    description: 'An ascending confirmation that communicates increase, opening, activation, or progress.',
    useCases: ['Increase', 'Open', 'Activate', 'Progress'],
    hierarchy: 'informational',
    pairId: 'confirm-down',
    attributes: { energy: 'Medium', pitch: 'Ascending', character: 'Warm' },
  },
  'confirm-down': {
    name: 'Confirm Down',
    family: 'Feedback',
    category: 'Directional',
    description: 'A descending confirmation that communicates decrease, closing, reduction, or deactivation.',
    useCases: ['Decrease', 'Close', 'Reduce', 'Deactivate'],
    hierarchy: 'informational',
    pairId: 'confirm-up',
    attributes: { energy: 'Medium', pitch: 'Descending', character: 'Warm' },
  },
  'decorative-notify-a': {
    name: 'Decorative Notification A',
    family: 'Notification',
    category: 'Decorative',
    description: 'An expressive notification for low-risk moments where a little personality is appropriate.',
    useCases: ['Social update', 'Optional notification'],
    hierarchy: 'informational',
    attributes: { energy: 'Medium', pitch: 'Tonal', character: 'Expressive' },
  },
  'decorative-notify-b': {
    name: 'Decorative Notification B',
    family: 'Notification',
    category: 'Decorative',
    description: 'A related decorative cue with a distinct tonal gesture for differentiated messages.',
    useCases: ['Social update', 'Optional notification'],
    hierarchy: 'informational',
    attributes: { energy: 'Medium', pitch: 'Tonal', character: 'Expressive' },
  },
  'error-pluck': {
    name: 'Error Pluck',
    family: 'Alert',
    category: 'Error',
    description: 'A short tactile error cue for immediate, recoverable feedback.',
    useCases: ['Invalid action', 'Input error'],
    hierarchy: 'attention',
    attributes: { energy: 'Medium', pitch: 'Falling', character: 'Tactile' },
  },
  'error-soft': {
    name: 'Error Soft',
    family: 'Alert',
    category: 'Error',
    description: 'A controlled error cue that communicates a problem without sounding punitive.',
    useCases: ['Error', 'Failed action'],
    hierarchy: 'attention',
    attributes: { energy: 'Medium', pitch: 'Low', character: 'Controlled' },
  },
  flourish: {
    name: 'Flourish',
    family: 'Expression',
    category: 'Celebration',
    description: 'A brief expressive signature for important positive transitions.',
    useCases: ['Feature reveal', 'Major completion'],
    hierarchy: 'informational',
    attributes: { energy: 'High', pitch: 'Rising', character: 'Expressive' },
  },
  'gentle-alarm': {
    name: 'Gentle Alarm',
    family: 'Alert',
    category: 'Alarm',
    description: 'A repeating attention cue designed to remain clear without becoming harsh.',
    useCases: ['Alarm', 'Reminder', 'Critical timer'],
    hierarchy: 'critical',
    attributes: { energy: 'High', pitch: 'Repeating', character: 'Gentle' },
  },
  'hover-tap': {
    name: 'Hover / Tap',
    family: 'Feedback',
    category: 'Control',
    description: 'A very short tactile response for direct manipulation and high-value controls.',
    useCases: ['Tap', 'Direct manipulation'],
    hierarchy: 'ambient',
    attributes: { energy: 'Low', pitch: 'Compact', character: 'Tactile' },
  },
  'join-arrival': {
    name: 'Join / Arrival',
    family: 'System',
    category: 'Arrival',
    description: 'A welcoming cue that confirms a person or device has joined.',
    useCases: ['Participant joined', 'Device connected'],
    hierarchy: 'informational',
    attributes: { energy: 'Medium', pitch: 'Ascending', character: 'Welcoming' },
  },
  'loading-pulse': {
    name: 'Loading Pulse',
    family: 'System',
    category: 'Progress',
    description: 'A restrained pulse for extended progress when visual feedback may not be enough.',
    useCases: ['Loading', 'Processing'],
    hierarchy: 'ambient',
    attributes: { energy: 'Low', pitch: 'Repeating', character: 'Patient' },
  },
  lock: {
    name: 'Lock',
    family: 'System',
    category: 'Security',
    description: 'A compact closing gesture that confirms a system or device has been secured.',
    useCases: ['Lock device', 'Secure state'],
    hierarchy: 'informational',
    pairId: 'unlock',
    attributes: { energy: 'Medium', pitch: 'Descending', character: 'Firm' },
  },
  unlock: {
    name: 'Unlock',
    family: 'System',
    category: 'Security',
    description: 'An opening gesture paired with Lock that confirms access has been restored.',
    useCases: ['Unlock device', 'Restore access'],
    hierarchy: 'informational',
    pairId: 'lock',
    attributes: { energy: 'Medium', pitch: 'Ascending', character: 'Open' },
  },
  'minimal-ringtone': {
    name: 'Minimal Ringtone',
    family: 'Notification',
    category: 'Call',
    description: 'A repeating incoming-call cue with a minimal tonal footprint.',
    useCases: ['Incoming call', 'Communication request'],
    hierarchy: 'attention',
    attributes: { energy: 'Medium', pitch: 'Repeating', character: 'Minimal' },
  },
  'nav-back': {
    name: 'Navigation Back',
    family: 'Navigation',
    category: 'Directional',
    description: 'A backward movement cue for returning to a previous view or step.',
    useCases: ['Back', 'Previous'],
    hierarchy: 'ambient',
    pairId: 'nav-forward',
    attributes: { energy: 'Low', pitch: 'Descending', character: 'Directional' },
  },
  'nav-forward': {
    name: 'Navigation Forward',
    family: 'Navigation',
    category: 'Directional',
    description: 'A forward movement cue for advancing to the next view or step.',
    useCases: ['Forward', 'Next'],
    hierarchy: 'ambient',
    pairId: 'nav-back',
    attributes: { energy: 'Low', pitch: 'Ascending', character: 'Directional' },
  },
  'nav-back-minimal': {
    name: 'Navigation Back Minimal',
    family: 'Navigation',
    category: 'Directional',
    description: 'A quieter backward cue for frequently repeated navigation.',
    useCases: ['Back', 'Repeated navigation'],
    hierarchy: 'ambient',
    pairId: 'nav-forward-minimal',
    attributes: { energy: 'Low', pitch: 'Descending', character: 'Minimal' },
  },
  'nav-forward-minimal': {
    name: 'Navigation Forward Minimal',
    family: 'Navigation',
    category: 'Directional',
    description: 'A quieter forward cue for frequently repeated navigation.',
    useCases: ['Forward', 'Repeated navigation'],
    hierarchy: 'ambient',
    pairId: 'nav-back-minimal',
    attributes: { energy: 'Low', pitch: 'Ascending', character: 'Minimal' },
  },
  'nav-cancel': {
    name: 'Navigation Cancel',
    family: 'Navigation',
    category: 'Cancel',
    description: 'A brief reversal cue that confirms a flow or pending action was cancelled.',
    useCases: ['Cancel', 'Dismiss'],
    hierarchy: 'informational',
    attributes: { energy: 'Low', pitch: 'Falling', character: 'Decisive' },
  },
  'refresh-feed': {
    name: 'Refresh Feed',
    family: 'Navigation',
    category: 'Refresh',
    description: 'A compact cyclical cue that confirms content refresh has started or completed.',
    useCases: ['Refresh', 'Reload content'],
    hierarchy: 'ambient',
    attributes: { energy: 'Low', pitch: 'Circular', character: 'Light' },
  },
  'section-complete': {
    name: 'Section Complete',
    family: 'Feedback',
    category: 'Completion',
    description: 'A positive completion cue for meaningful progress within a larger flow.',
    useCases: ['Section complete', 'Task progress'],
    hierarchy: 'informational',
    attributes: { energy: 'Medium', pitch: 'Ascending', character: 'Resolved' },
  },
  'simple-alert': {
    name: 'Simple Alert',
    family: 'Alert',
    category: 'Warning',
    description: 'A clear general-purpose alert that brings attention to an actionable state.',
    useCases: ['Warning', 'Action required'],
    hierarchy: 'attention',
    attributes: { energy: 'Medium', pitch: 'Focused', character: 'Clear' },
  },
  'simple-notify-a': {
    name: 'Simple Notification A',
    family: 'Notification',
    category: 'General',
    description: 'A concise notification cue for routine, non-urgent information.',
    useCases: ['Message received', 'Background update'],
    hierarchy: 'informational',
    attributes: { energy: 'Low', pitch: 'Tonal', character: 'Simple' },
  },
  'simple-notify-b': {
    name: 'Simple Notification B',
    family: 'Notification',
    category: 'General',
    description: 'A companion notification cue for distinguishing a second routine event.',
    useCases: ['Message received', 'Background update'],
    hierarchy: 'informational',
    attributes: { energy: 'Low', pitch: 'Tonal', character: 'Simple' },
  },
  'transition-left': {
    name: 'Transition Left',
    family: 'Navigation',
    category: 'Transition',
    description: 'A directional transition cue that supports movement toward the previous surface.',
    useCases: ['Previous view', 'Move left'],
    hierarchy: 'ambient',
    pairId: 'transition-right',
    attributes: { energy: 'Low', pitch: 'Leftward', character: 'Spatial' },
  },
  'transition-right': {
    name: 'Transition Right',
    family: 'Navigation',
    category: 'Transition',
    description: 'A directional transition cue that supports movement toward the next surface.',
    useCases: ['Next view', 'Move right'],
    hierarchy: 'ambient',
    pairId: 'transition-left',
    attributes: { energy: 'Low', pitch: 'Rightward', character: 'Spatial' },
  },
  unavailable: {
    name: 'Unavailable',
    family: 'Alert',
    category: 'Unavailable',
    description: 'A restrained negative cue for an action or resource that cannot be used.',
    useCases: ['Unavailable action', 'Blocked control'],
    hierarchy: 'informational',
    attributes: { energy: 'Low', pitch: 'Falling', character: 'Restrained' },
  },
  'warning-soft': {
    name: 'Warning Soft',
    family: 'Alert',
    category: 'Warning',
    description: 'A warm warning cue that signals risk while leaving room for user recovery.',
    useCases: ['Warning', 'Low battery', 'Recoverable risk'],
    hierarchy: 'attention',
    attributes: { energy: 'Medium', pitch: 'Low', character: 'Warm' },
  },
};

const titleFromId = (id) =>
  id
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

export const soundCatalog = Object.values(
  generatedLibrary.sounds.reduce((families, file) => {
    const profile = PROFILES[file.familyId] ?? {
      name: titleFromId(file.familyId),
      description: '',
      useCases: [],
      attributes: {},
    };
    if (!families[file.familyId]) {
      families[file.familyId] = {
        id: file.familyId,
        ...profile,
        files: [],
      };
    }
    families[file.familyId].files.push(file);
    return families;
  }, {}),
).map((sound) => ({
  ...sound,
  files: [...sound.files].sort((a, b) => a.variant - b.variant),
  primary: sound.files.find((file) => file.variant === 0) ?? sound.files[0],
  variantCount: Math.max(0, sound.files.length - 1),
}));

export const soundFamilies = [
  ...new Set(soundCatalog.map((sound) => sound.family).filter(Boolean)),
].sort();

export const getSoundById = (id) =>
  soundCatalog.find((sound) => sound.id === id);

export const getSoundUrl = (file) =>
  `${process.env.PUBLIC_URL || ''}/sounds/${encodeURIComponent(file.file)}`;

export const formatDuration = (durationMs) => {
  if (durationMs >= 1000) {
    const seconds = durationMs / 1000;
    return `${seconds >= 10 ? Math.round(seconds) : seconds.toFixed(1)} s`;
  }
  return `${durationMs} ms`;
};

export const soundLibrarySource = generatedLibrary.source;
