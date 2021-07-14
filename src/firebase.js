import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDesS1iRgtrBOKz7T-MdPa_ycTLDg0-n4c",
  authDomain: "fir-e04a5.firebaseapp.com",
  databaseURL: "https://fir-e04a5-default-rtdb.firebaseio.com",
  projectId: "fir-e04a5",
  storageBucket: "fir-e04a5.appspot.com",
  messagingSenderId: "967916211322",
  appId: "1:967916211322:web:a842d9fda285ac2b85ffc3",
  measurementId: "G-7FM0MPWMFT"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

