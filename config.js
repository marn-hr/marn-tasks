// Marn Tasks: settings for the web edition. Edit the values, keep the structure.
window.MARN_CONFIG = {
  // From the Firebase console: Project settings > General > Your apps > Web app > firebaseConfig
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },
  // Who may sign in: every Google Workspace account on these domains (the part after @ in Marn work emails)
  allowedDomains: [],
  // ... plus these individual emails
  allowedEmails: ["mohammed.albasri12@gmail.com"],
  // Who can set or change the Business Committee password
  owners: ["mohammed.albasri12@gmail.com"]
};
