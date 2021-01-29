function setData(){
  var user_data = localStorage.getItem("user_data");
  if (user_data == undefined){
    var data = {
      "boss_nurhadi" : {
        "pass" : "admin123",
        "name" : "NURHADI",
        "class" : "admin",
        "photo" : "image/nurhadi.png"
      },
      "ucup":{
        "pass" : "ucup123",
        "name" : "YUSUF",
        "class" : "user",
        "photo" : "image/ucup.png"
      }
    };
    localStorage.setItem("user_data", JSON.stringify(data)); 
  }
}
setData();

function validasi() {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var user_data = JSON.parse(localStorage.getItem("user_data"));
  console.log(user_data);
  if(user in user_data) {
    if(user_data[user]["pass"] == pass){
    window.location.href = "Home.html";
    localStorage.setItem("user_class", user_data[user]["class"].toUpperCase());
    localStorage.setItem("user_name", user_data[user]["name"]);
    localStorage.setItem("user_photo", user_data[user]["photo"]);
    localStorage.setItem("isLogin", "true");
    }
    else{
      alert("Password Salah")
    }
  }
  else {
    alert("Username Tidak Terdaftar");
  }
}
function setUser(){
  var user_class_doc = document.getElementById("user-class");
  user_class_doc.append(localStorage.getItem("user_class"));
  var user_class_name = document.getElementById("user-name");
  user_class_name.append(localStorage.getItem("user_name"));
  document.getElementById("user-photo").src = localStorage.getItem("user_photo");
}
if (document.getElementById("user-class") !== null){
  setUser();
}
function checkAdmin(){
  user_class = localStorage.getItem("user_class");
  if (user_class != "ADMIN"){
    var tambah_seminar = document.getElementById("tambah-seminar");
    tambah_seminar.style.display = "none" ;
    var peserta_seminar = document.getElementById("peserta-seminar");
    peserta_seminar.style.display = "none" ;
    var daftar_seminar = document.getElementById("daftar-seminar");
    daftar_seminar.style.display = "none" ;
  }
}
if (window.location.href != "http://localhost/sista/Proyek/Halaman_Login.html"){
  checkAdmin();
}
function logout(){
  window.location.href = "Halaman_Login.html"
  localStorage.clear();
}
function checkLogin(){
  if(localStorage.getItem("isLogin") != "true"){
    if (window.location.href != "http://localhost/sista/Proyek/Halaman_Login.html"){
      window.location.replace("Halaman_Login.html");
   }
  }
}
checkLogin();