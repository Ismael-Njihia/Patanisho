document.getElementById("signUp").onclick = function(){
    var Fname= document.getElementById("inputFName").value;
    var Sname= document.getElementById("inputSName").value;
    var phoneNo = document.getElementById("phoneNumber").value;
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;
    var cPassword= document.getElementById("confirmPassword").value;

   if(password == cPassword){
   //sign in the user
   firebase.auth().createUserWithEmailAndPassword(email, password).then((userCred)=>{
    const userId = userCred.user.uid;

    firebase.firestore().collection("users").doc(userId).set({
        Fname: Fname,
        Sname: Sname,
        phoneNo: phoneNo,
        email: email,
        userId: userId,

    }).then(()=>{
        window.href="../views/upload.html"
    }).catch((error)=>{
        var error1 = message.error;
        alert(error1);
    })
   })

   }else{
    alert("Password not matching!")
   }
}