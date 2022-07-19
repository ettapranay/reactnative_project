import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCt19v8y5MVaDj5-xOEZ5Eu6A8wmI-eb6I",
  authDomain: "reactnative-714d9.firebaseapp.com",
  databaseURL: "https://reactnative-714d9-default-rtdb.firebaseio.com",
  projectId: "reactnative-714d9",
  storageBucket: "reactnative-714d9.appspot.com",
  messagingSenderId: "702830170831",
  appId: "1:702830170831:web:71ba60146a20829e001dba",
  measurementId: "G-PMCB6PXTCQ"
};
firebase.initializeApp(firebaseConfig);
let database = firebase.database()

export { database }