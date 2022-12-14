/*
 * @Author: Chengbotao
 * @Date: 2022-08-19 16:26:34
 */
module.exports = {
  types: [
    { value: "feat", name: "â¨ Features | æ°åè½" },
    { value: "fix", name: "ð Bug Fixes | Bug ä¿®å¤" },
    { value: "init", name: "ð Init | åå§å" },
    { value: "docs", name: "âï¸ Documentation | ææ¡£" },
    { value: "style", name: "ð Styles | é£æ ¼" },
    { value: "refactor", name: "â»ï¸ Code Refactoring | ä»£ç éæ" },
    { value: "perf", name: "â¡ Performance Improvements | æ§è½ä¼å" },
    { value: "test", name: "â Tests | æµè¯" },
    { value: "revert", name: "âª Revert | åé", hidden: true },
    { value: "build", name: "ð¦â Build System | æåæå»º" },
    { value: "chore", name: "ð Chore | æå»º/å·¥ç¨ä¾èµ/å·¥å·" },
    { value: "ci", name: "ð· Continuous Integration | CI éç½®" }
  ],

  // scopes: [{ name: 'accounts' }, { name: 'admin' }, { name: 'exampleScope' }, { name: 'changeMe' }],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "éæ©è¦æäº¤çæ´æ¹ç±»å:",
    scope: '\nè¡¨ç¤ºæ­¤æ´æ¹çèå´(å¯é):',
    // used if allowCustomScopes is true
    customScope: 'è¡¨ç¤ºæ­¤æ´æ¹çèå´(èªå®ä¹):',
    subject: 'åä¸ä¸ªç®ç­çï¼å½ä»¤å¼çæ¶ææè¿°åå:\n',
    body: 'æä¾æ´æ¹çè¾é¿æè¿°(å¯é)ãä½¿ç¨"|"æ¢è¡:\n',
    breaking: 'ååºä»»ä½éå¤§æ´æ¹(å¯é):\n',
    footer: 'ååºæ­¤æ´æ¹å³é­çä»»ä½é®é¢(å¯é). E.g.: #31, #34:\n',
    confirmCommit: 'æ¨ç¡®å®è¦ç»§ç»­ä¸é¢çæäº¤å?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['body'],

  // limit subject length
  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};