import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCPP_GatOrVYLZUQaB-6lPCGSeq91Ulgdk",
    authDomain: "nwitter-b167b.firebaseapp.com",
    projectId: "nwitter-b167b",
    storageBucket: "nwitter-b167b.appspot.com",
    messagingSenderId: "657471179695",
    appId: "1:657471179695:web:1b49bc602018b16439bd5a"
  };

  const app = initializeApp(firebaseConfig);

  export default app;