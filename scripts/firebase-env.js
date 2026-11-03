const fs = require("fs");

const serviceAccount = require("./portfolio.json");

console.log(`
FIREBASE_PROJECT_ID=${serviceAccount.project_id}
FIREBASE_CLIENT_EMAIL=${serviceAccount.client_email}
FIREBASE_PRIVATE_KEY="${serviceAccount.private_key.replace(/\n/g, "\\n")}"
FIREBASE_STORAGE_BUCKET=${serviceAccount.project_id}.appspot.com
`);
