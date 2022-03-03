import Firebase from "firebase/app";
import "firebase/firestore";
// NOTE: we are importing seed database before we create it. we will create and export it to avoid errors.
import seedDatabase from "./catalog";

const config = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
const firebase = Firebase.initializeApp(config);

// Delete this line after the catalog has been uploaded
seedDatabase(firebase);
export { firebase };
