// TransFi Peso Desk settings
window.PESODESK_CONFIG = {
  firebase: {
    apiKey: "AIzaSyCD3hojAl2wAHMzFy56Ne2VxoGe07jyiic",
    authDomain: "transfi-peso-desk.firebaseapp.com",
    projectId: "transfi-peso-desk",
    storageBucket: "transfi-peso-desk.firebasestorage.app",
    messagingSenderId: "752152059165",
    appId: "1:752152059165:web:8c2df52e275dfcfc78d5f4"
  },
  allowedDomains: ["transfi.com"],  // only these email domains can sign in
  provider: "google",
  collectionPrefix: "pesodesk_"
  // The owner (who can delete) is set in the Firestore security rules.
};
