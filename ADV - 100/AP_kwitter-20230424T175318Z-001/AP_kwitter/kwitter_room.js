
//ADICIONE SEUS LINKS DO FIREBASE


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


  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a), " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionando nome da sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Nome da sala: " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
