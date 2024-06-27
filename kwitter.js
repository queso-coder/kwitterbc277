function addUser() {
    username = document.getElementById("login_input").value;
    localStorage.setItem("u_name", username );
     window.location= "kwitter_room.html";
} 