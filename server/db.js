const { initializeApp, getApps, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
var admin = require("firebase-admin");

const config = require('./config');
const serviceAccount = require('./admin.json');

const app = initializeApp({
  credential: cert(serviceAccount) 
});
//console.log('Firebase admin app is initialized', app);

//console.log(getApps());

const db = getFirestore();

//let tutorsData = db.collection('tutors');
//console.log('Firestore is accessed', db);

//const db = initializeApp({
//    credential: applicationDefault(),
//    databaseURL: "https://test-1fdb6.firebaseio.com"
//});



module.exports = db;