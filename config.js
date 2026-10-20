// Marn Tasks: settings for the web edition. Edit the values, keep the structure.
window.MARN_CONFIG = {
  // From the Firebase console: Project settings > General > Your apps > Web app > firebaseConfig
  firebase: {
    apiKey: "AIzaSyAGppQu-3bjZEEiMQ4tZA3fwkDMKxrYYd4",
    authDomain: "marn-tasks.web.app",
    projectId: "marn-tasks",
    storageBucket: "marn-tasks.firebasestorage.app",
    messagingSenderId: "543042410165",
    appId: "1:543042410165:web:81d135b40192fc8c7250fc"
  },
  // Who may sign in: every Google Workspace account on these domains (the part after @ in Marn work emails)
  allowedDomains: ["marn.com", "jahez.net"],
  // ... plus these individual emails
  allowedEmails: ["mohammed.albasri12@gmail.com"],
  // Who can set or change the Business Committee password
  owners: ["m.albasri@marn.com", "mohammed.albasri12@gmail.com"]
};
