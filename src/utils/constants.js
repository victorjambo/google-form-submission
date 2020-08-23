export const STORE = {
  HOVEROPEN: 'submissio.hover_open',
  HOTKEYS: 'submissio.hotkeys',
  POPUP: 'submissio.popup_shown',
  WIDTH: 'submissio.sidebar_width',
  SHOWN: 'submissio.sidebar_shown',
  PINNED: 'submissio.sidebar_pinned',
};

export const DEFAULTS = {
  HOVEROPEN: true,
  HOTKEYS: '⌘+⇧+s, ⌃+⇧+s',
  POPUP: false,
  WIDTH: 332,
  SHOWN: false,
  PINNED: false,
};

export const VIEWS = {
  HOME: 'HOME',
  SETTINGS: 'SETTINGS'
};

export const FORM_MAPPER = {
  icNumber: {
    name: 'entry.1208192532',
    required: false
  },
  owner: {
    name: 'entry.1135435746',
    required: false
  },
  milk: {
    name: 'entry.725073760',
    required: true
  },
};
