document.getElementById("login").onclick = function(){
    const email= document.getElementById("inputEmail").value;
    const password = document.getElementById("inputPassword").value;

    firebase.auth().signInWithEmailAndPassword(email, password).then((userCred)=>{
        //if signup is successful redirect to the homepage;

        window.location.href="../index.html";
    }).catch((error)=>{
      const mss = error.message;
      alert(mss);
      
    })
}