const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export const FIELD_TYPES = {
  DROPDOWN: 'DROPDOWN',
  GROUP: 'GROUP',
  TEXT: 'TEXT',
  URL: 'URL',
};

const PROD_FIELD_NAME = {
  owner: 'entry.1232059513',
  icnumber: 'entry.1277951088',
  project: 'entry.1129632657',
  ticketType: 'entry.87220949',
  url: 'entry.1513688965',
  crawlType: 'entry.1448858690',
  comment: 'entry.564759693',
  checkemployerexist: 'entry.927175183',
  checkmoreemployers: 'entry.1426142585',
  checkexistingic: 'entry.981306830',
  xpaths: 'entry.2127786391',
  pprs: 'entry.1695002413',
  jobCount: 'entry.1302079706',
  IDFromSource: 'entry.1663521334',
  unhealthyicstatus: 'entry.950348769',
  icstatus: 'entry.652043842',
  existingic: 'entry.1008621477',
};

const TEST_FIELD_NAME = {
  owner: 'entry.2126946222',
  icnumber: 'entry.1279691867',
  project: 'entry.477937154',
  ticketType: 'entry.391509437',
  url: 'entry.1927266266',
  crawlType: 'entry.882406774',
  comment: 'entry.352816605',
  checkemployerexist: 'entry.1592194456',
  checkmoreemployers: 'entry.1341399576',
  checkexistingic: 'entry.236816872',
  xpaths: 'entry.266899346',
  pprs: 'entry.1908261760_sentinel',
  jobCount: 'entry.318391150',
  IDFromSource: 'entry.2086565986',
  unhealthyicstatus: 'entry.1309056380',
  icstatus: 'entry.1042958128',
  existingic: 'entry.726595368',
};

export const FIELD_NAME = isDev ? TEST_FIELD_NAME : PROD_FIELD_NAME;

export const FIELDS = {
  owner: {
    name: FIELD_NAME.owner,
    type: FIELD_TYPES.DROPDOWN,
    required: true,
    options: ['Osman Dawe', 'Norton Akenga', 'Irene kamene', 'Oliver Kiprono', 'Bernice Atieno', 'Ryan Omondi', 'Sarah Wangah', 'Rebeccah Ndungi', 'Thomas Oduol', 'Leonard Terer', 'Isaac Kenga', 'John kang\'ethe', 'Douglas Mwarumba', 'Morris Maluni', 'Ezra Kigen', 'Isaac Mutunga', 'Kevin Kemboi', 'Dennis Kibet', 'Andrew Kamau', 'Abraham Kemboi', 'Joseph Mwau', 'Wendy Viola', 'Grace Jemeli', 'Rose Makau', 'Jonathan Kombich', 'Elizabeth Onyango', 'Ruth Gichina', 'Kelvin Mwangi'],
    displayName: 'Owner',
    category: '',
    parent: '',
  },
  icnumber: {
    name: FIELD_NAME.icnumber,
    type: FIELD_TYPES.TEXT,
    required: true,
    options: [],
    displayName: 'IC Number',
    category: '',
    parent: 'IC Number',
    placeholder: 'IC Number',
  },
  project: {
    name: FIELD_NAME.project,
    type: FIELD_TYPES.DROPDOWN,
    required: true,
    options: ['High Priority', 'ActiveJobsCheck', 'Jira Ticket', 'Unhealthy Project', 'User feedback'],
    displayName: 'Project',
    category: '',
    parent: '',
  },
  ticketType: {
    name: FIELD_NAME.ticketType,
    type: FIELD_TYPES.DROPDOWN,
    required: true,
    options: ['Mill Valley Ticket', 'New Ticket', 'N/A'],
    displayName: 'Ticket Type',
    category: 'JIRA',
    parent: '',
  },
  url: {
    name: FIELD_NAME.url,
    type: FIELD_TYPES.URL,
    required: true,
    options: [],
    displayName: 'Integrations queue Url',
    category: 'UNHEALTHY',
    parent: 'Pre-Crawl',
    unhealthy: 'Main Url on IC',
    placeholder: 'url'
  },
  crawlType: {
    name: FIELD_NAME.crawlType,
    type: FIELD_TYPES.DROPDOWN,
    required: true,
    options: ['TARAKAN', 'JCRAWLER', 'XML FEED', 'MASTER FEED', 'CANNOT-CRAWL'],
    displayName: 'Crawl Type',
    category: '',
    parent: 'Pre-Crawl',
  },
  comment: {
    name: FIELD_NAME.comment,
    type: FIELD_TYPES.TEXT,
    required: false,
    options: [],
    displayName: 'Give a brief Comment if it is Cannot-Crawl',
    category: 'CANNOT CRAWL',
    parent: 'Pre-Crawl',
    placeholder: 'comment',
  },
  checkemployerexist: {
    name: FIELD_NAME.checkemployerexist,
    type: FIELD_TYPES.GROUP,
    required: true,
    options: ['Yes', 'No', 'N/A'],
    displayName: 'Checked if employer exist on Glassdoor?',
    category: '',
    parent: 'Employer Check',
  },
  checkmoreemployers: {
    name: FIELD_NAME.checkmoreemployers,
    type: FIELD_TYPES.GROUP,
    required: true,
    options: ['Yes', 'No', 'N/A'],
    displayName: 'Checked to see if there\'s more than one employer involved?',
    category: '',
    parent: 'Employer Check',
  },
  checkexistingic: {
    name: FIELD_NAME.checkexistingic,
    type: FIELD_TYPES.GROUP,
    required: true,
    options: ['Yes', 'No', 'N/A'],
    displayName: 'Check if there is an existing IC?',
    category: '',
    parent: 'Employer Check',
  },
  xpaths: {
    name: FIELD_NAME.xpaths,
    type: FIELD_TYPES.GROUP,
    required: false,
    options: ['Yes', 'No', 'N/A'],
    displayName: 'Included 4 basic Xpaths',
    category: '',
    parent: 'Custom Crawl Rules',
  },
  pprs: {
    name: FIELD_NAME.pprs,
    type: FIELD_TYPES.GROUP,
    required: false,
    options: ['Yes', 'No', 'N/A'],
    displayName: 'Included all necessary PPRs?',
    category: '',
    parent: 'Custom Crawl Rules',
  },
  jobCount: {
    name: FIELD_NAME.jobCount,
    type: FIELD_TYPES.GROUP,
    required: false,
    options: ['Yes', 'No', 'N/A'],
    displayName: 'Filled the Expected Job Count',
    category: '',
    parent: 'Custom Crawl Rules',
  },
  IDFromSource: {
    name: FIELD_NAME.IDFromSource,
    type: FIELD_TYPES.GROUP,
    required: false,
    options: ['Yes', 'No', 'N/A'],
    displayName: 'Captured IDFromSource and jobListingEmail?',
    category: '',
    parent: 'Custom Crawl Rules',
  },
  unhealthyicstatus: {
    name: FIELD_NAME.unhealthyicstatus,
    type: FIELD_TYPES.GROUP,
    required: false,
    options: ['Done', 'Pending', 'N/A'],
    displayName: 'What is the final status of the IC?',
    category: 'UNHEALTHY',
    parent: '',
  },
  icstatus: {
    name: FIELD_NAME.icstatus,
    type: FIELD_TYPES.GROUP,
    required: false,
    options: ['Enabled', 'Disabled'],
    displayName: 'What is the final Status of the IC?',
    category: '',
    parent: 'IC Number',
  },
  existingic: {
    name: FIELD_NAME.existingic,
    type: FIELD_TYPES.GROUP,
    required: false,
    options: ['Yes', 'No'],
    displayName: 'Existing IC',
    category: '',
    parent: '',
  },
};

export const CRAWL_TYPE = {
  TK: 'TARAKAN',
  JC: 'JCRAWLER',
  XF: 'XML FEED',
  MF: 'MASTER FEED',
  CC: 'CANNOT-CRAWL'
};

export const FIELD_DEFAULTS = {
  owner: 'Owner',
  project: 'High Priority',
  ticketType: 'New Ticket',
  url: 'https://weworkremotely.com/categories/remote-programming-jobs', // TODO input onchange not working
  crawlType: 'TARAKAN',
  comment: '',
  checkemployerexist: 'Yes',
  checkmoreemployers: 'Yes',
  checkexistingic: 'Yes',
  xpaths: 'Yes',
  pprs: 'Yes',
  jobCount: 'Yes',
  IDFromSource: 'Yes',
  unhealthyicstatus: 'Done',
  icnumber: '0000',
  icstatus: 'Enabled',
  existingic: 'No',
};

export const CUSTOM_DISPLAYNAME = {
  owner: FIELDS.owner.displayName,
  project: FIELDS.project.displayName,
  ticketType: FIELDS.ticketType.displayName,
  crawlType: FIELDS.crawlType.displayName,
  comment: 'Cannot-Crawl Comment',
  checkemployerexist: 'Checked if employer exist',
  checkmoreemployers: 'Checked for more employers',
  checkexistingic: 'Checked if existing IC',
  xpaths: FIELDS.xpaths.displayName,
  pprs: 'Included necessary PPRs',
  jobCount: FIELDS.jobCount.displayName,
  IDFromSource: 'Captured ID/Email',
  unhealthyicstatus: 'Unhealthy IC status',
  icnumber: FIELDS.icnumber.displayName,
  icstatus: FIELDS.icstatus.displayName,
  existingic: FIELDS.existingic.displayName,
};
