// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHmUIvwBSSo_ovjnqCY6SxmFxc_ZeKnBQ",
  authDomain: "bymetal-tool-inc.firebaseapp.com",
  projectId: "bymetal-tool-inc",
  storageBucket: "bymetal-tool-inc.appspot.com",
  messagingSenderId: "872463342240",
  appId: "1:872463342240:web:fff07875c94bebf56e87c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;