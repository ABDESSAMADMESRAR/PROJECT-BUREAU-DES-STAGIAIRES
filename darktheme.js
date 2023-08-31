var body = document.querySelector("body");

var row =document.querySelectorAll(".row");



let darkMode = false;
function switchmode1(){
    if(darkMode==false){
     darkMode=true
     for(var i=0; i<  row.length; i++){
        row[i].style.boxShadow=" 0 0 2rem #ffff"
    }
     body.style.backgroundColor="#000" 

     for(var i=0; i< list.length; i++){
         list[i].style.backgroundColor="#000"
     }
     for(var i=0; i< list.length; i++){
         list[i].style.color="#fff"
     }
 
 for(var i=0; i<world.length; i++){
     world[i].style.color="#fff"
 }
 
 
    }else{
     darkMode=false
     body.style.backgroundColor="white" 
     for(var i=0; i< list.length; i++){
     list[i].style.backgroundColor="white"
     }
     for(var i=0; i< list.length; i++){
         list[i].style.color="#000"
     }
 
     for(var i=0; i<world.length; i++){
         world[i].style.color="#811538"
     }
    }
 
 
 }
 