//LINKS DO SEU APP FIREBASE

const firebaseConfig = {
      apiKey: "AIzaSyCryow5GDMc9P1BS4bmy8qY52yUR-5Z_wY",
      authDomain: "redesocial-4501a.firebaseapp.com",
      databaseURL: "https://redesocial-4501a-default-rtdb.firebaseio.com",
      projectId: "redesocial-4501a",
      storageBucket: "redesocial-4501a.appspot.com",
      messagingSenderId: "250194306472",
      appId: "1:250194306472:web:16a287c6092f459821e99d"
    };
    
    

    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
 });

document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Comece a programar aqui
       console.log(firebase_message_id);
           console.log(message_data);
           name = message_data['name'];
           message = message_data['message'];
       like = message_data['like'];
       name_with_tag = "<h4> "+ name +"</h4>";
       message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>Curtidas: "+ like +"</button>";

      row = name_with_tag + message_with_tag +like_button;       
      document.getElementById("output").innerHTML += row;
//Termine de programar aqui
    } });  }); }
getData();

function updateLike(message_id)
{
console.log("clicou no botão Curtidas - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
          like : updated_likes  
     });

}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}