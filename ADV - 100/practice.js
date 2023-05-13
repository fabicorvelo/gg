
//ADICIONE OS LINKS DO SEU APP FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyCryow5GDMc9P1BS4bmy8qY52yUR-5Z_wY",
  authDomain: "redesocial-4501a.firebaseapp.com",
  databaseURL: "https://redesocial-4501a-default-rtdb.firebaseio.com",
  projectId: "redesocial-4501a",
  storageBucket: "redesocial-4501a.appspot.com",
  messagingSenderId: "250194306472",
  appId: "1:250194306472:web:16a287c6092f459821e99d"
};



// Inicializar Firebase
   firebase.initializeApp(firebaseConfig);


function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adicionando usuário"
  });
}


