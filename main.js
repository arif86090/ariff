// ######### scrooltop#############



var mybutton =document.getElementById("mybtn");
window.onscroll=function() {scrollfunction()};
function scrollfunction(){
if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){ mybutton.style.display ="block";}
else{mybutton.style.display ="none";}}
function topFunction(){
document.body.scrollTop=0;
document.documentElement.scrollTop=0;}





// ########## nevbar#########
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop()>400) {
	$('.main-navbar').addClass('active');
		}else {
			$('.main-navbar').removeClass('active');
		}
	})
	})



var slider=document.querySelector('.navbar-contant');
	var xx=document.querySelector('.navbar-togglor');
	document.querySelector('.manu').addEventListener('click',function(){
		slider.classList.toggle('active');
		xx.classList.toggle('active');
	})



	



// #############typed js


var typed = new Typed('.element', {
  strings: ['webdesigner', 'Devloper','freelancer'],
  smartBackspace: true,// Default value
   startDelay:160,
     backSpeed: 160,
     loop:true,
     
     typeSpeed: 110,
});

// ##########preloder############

 var preloader=document.querySelector('.loading');

 function myfun1(){

preloader.style.display="none";

 }

 
 AOS.init({
  		duration:1000
  });



 // social icon
 var linkall =document.querySelector('.all-icons');


function social(){
	linkall.classList.toggle('active');
	
}

$(document).ready(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop()>500) {
	$('.socialManuIccon').addClass('active');
		}else {
			$('.socialManuIccon').removeClass('active');
		}
	})
	})




// popup

var contact=document.querySelector('.inputt');
var popup=document.querySelector('.popup');
var mainpopup=document.querySelector('.main-popup');
var closs=document.querySelector('.closs');
var submit=document.querySelector('.submitid');


contact.addEventListener('click',()=>{

popup.classList.add('active');
mainpopup.classList.add('active');


})

closs.addEventListener('click',()=>{

popup.classList.remove('active');
mainpopup.classList.remove('active');


})

submit.addEventListener('click',()=>{

popup.classList.remove('active');
mainpopup.classList.remove('active');


})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    autoplay:true,
     autoplayTimeout:3000,


    responsive:{
        0:{
            items: 1                    
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})



                    $(document).ready(function(){
                      var mixer=mixitup(".mx-it");});