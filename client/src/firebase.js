import {initializeApp} from 'firebase/app';
import { getStorage,ref,uploadBytes,getDownloadURL } from "firebase/storage";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCG58MgfOcRG2R6QrvBHQ3bQxta9TrioM8",
  authDomain: "test-1fdb6.firebaseapp.com",
  projectId: "test-1fdb6",
  storageBucket: "test-1fdb6.appspot.com",
  messagingSenderId: "508437994065",
  appId: "1:508437994065:web:db8dbfa25a2ab2c318f670",
  measurementId: "G-5RJ8Q4ZX6T"
});

const storage = getStorage(firebaseApp);


export {storage,uploadBytes,ref, getDownloadURL};