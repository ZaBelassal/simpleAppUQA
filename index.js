document.getElementById("mybutton").onclick=function(){

    var myinput = document.getElementById("myname").value;
   console.log(myinput);
    document.getElementById("newMsg").innerHTML = myinput ; //pour écrire au paragraphe ou div
    myname.value=""; // pour supprimer le champ de texte
}

