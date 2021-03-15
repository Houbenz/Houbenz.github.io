
const updateTime= () => {
            
    let dateJs = new Date();

    var hours,minutes,secondes;

    if(dateJs.getHours() < 10)
        hours ="0"+dateJs.getHours();
    else
        hours = dateJs.getHours();
    
        
    if(dateJs.getMinutes() < 10)
        minutes = "0"+dateJs.getMinutes();
    else
        minutes = dateJs.getMinutes();
           

    if(dateJs.getSeconds() < 10)
        secondes = "0"+dateJs.getSeconds();
    else
        secondes = dateJs.getSeconds();
    
    
    
    var timeString =hours+":"+minutes+":"+secondes;
    
    var dateString = dateJs.getDay()+"/"+dateJs.getMonth()+"/"+dateJs.getFullYear();

    var date=document.getElementById("date");
    var clock=document.getElementById("clock");

    date.innerHTML = dateString
    clock.innerHTML = timeString
}
//updateTime();
//setInterval(updateTime,1000);


/**************************carousel *************/

var slideIndex = 1 ;
showSlide(slideIndex);

function plusSlide(n){
    console.log("plus slide is clicked");
    showSlide(slideIndex += n);
}

function currentSlide(n){
    showSlide(slideIndex = n);
}

function showSlide(n){
    var i;
    var slides= document.getElementsByClassName("carousel-slide")
    if ( n > slides.length)
        slideIndex = 1 ;
    if (n < 1)
        slideIndex = slides.length;
    
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }

    slides[slideIndex-1].style.display="block";
}

/*******type writer */


var title= document.getElementById("title");

var typeWriter = new Typewriter(title,
    {
        loop:true,
        autostart:true
    }
);

typeWriter.typeString('Hello I am Hocine Benzagouta')
    .pauseFor(1500)
    .deleteAll()
    .typeString('I am a Developer')
    .pauseFor(1000)
    .deleteAll()
    .typeString('And a Designer')
    .pauseFor(1000)
    .deleteAll()
    .start();

/*************************scroll position */

var homeLink  =document.getElementById("homeLink");
var aboutLink =document.getElementById("aboutLink");
var eduLink   =document.getElementById("eduLink");
var portLink  =document.getElementById("portLink");


window.addEventListener("scroll",(event) =>{

    if(scrollY > 0 & scrollY < 803){
        removeAllActive()
        homeLink.classList.add("active-nav")
    }else
        homeLink.classList.remove("active-nav")

    if(scrollY > 803 && scrollY < 1765){
        removeAllActive()
        aboutLink.classList.add("active-nav")
    }else
        aboutLink.classList.remove("active-nav")

    if(scrollY > 1765 & scrollY < 2408){
        removeAllActive()
        eduLink.classList.add("active-nav")
    }else
        eduLink.classList.remove("active-nav")


    if(scrollY >= 2408){
        removeAllActive()
        portLink.classList.add("active-nav")
    }else
        portLink.classList.remove("active-nav")


        console.log(scrollY)

        
});


function removeAllActive(){
    homeLink.classList.remove("active-nav")
    aboutLink.classList.remove("active-nav")
    portLink.classList.remove("active-nav")
    eduLink.classList.remove("active-nav")
}

//get position on an element
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }


  function navbarShow(){

    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }