import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
        apiKey: "AIzaSyB8MHL0K2SYqZWkMaVGT_OtkSStfjKWzmk",
        authDomain: "ecommerce-25aa6.firebaseapp.com",
        projectId: "ecommerce-25aa6",
        storageBucket: "ecommerce-25aa6.appspot.com",
        messagingSenderId: "691418409988",
        appId: "1:691418409988:web:fb2b1092656298a8011951",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const collectionProd = collection(db, "productos");
