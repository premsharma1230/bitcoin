

//bar 

jQuery('.main-bar').click(function(e) {
  jQuery(this).toggleClass('activefile');
  e.preventDefault();
  jQuery('.myHeader').slideToggle();
});


//--bottom--to--top--- and------stickyyy---on----header---//
var mybutton = document.querySelector(".BT-top");
var navbar = document.getElementById("navbar");
//var sticky = navbar.offsetTop;
window.onscroll = function() {
    matrixFunction() //or scroll function--
};
function matrixFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        mybutton.style.display = "block";
        navbar.classList.add("sticky")
    } else {
        mybutton.style.display = "none";
        navbar.classList.remove("sticky");
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
//end--here--//

// ---Log---in---
const signupButton = document.getElementById('signup-button'),
    loginButton = document.getElementById('login-button'),
    userForms = document.getElementById('user_options-forms')

/**
 * Add event listener to the "Sign Up" button
 */
signupButton.addEventListener('click', () => {
  userForms.classList.remove('bounceRight')
  userForms.classList.add('bounceLeft')
}, false)

/**
 * Add event listener to the "Login" button
 */
loginButton.addEventListener('click', () => {
  userForms.classList.remove('bounceLeft')
  userForms.classList.add('bounceRight')
}, false)



// -----stickyyyy------//

// window.onscroll = function() {myFn()};
        
// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFn() {
//   if (window.pageYOffset > 200) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


// Tamino Martinius - All rights reserved

// Copyright © 2013 Tamino Martinius (http://zaku.eu)
// Copyright © 2013 Particleslider.com (http://particleslider.com

// Terms of usage: http://particleslider.com/legal/license

var init = function(){
    var isMobile = navigator.userAgent &&
      navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
    var isSmall = window.innerWidth < 1000;
    
    var ps = new ParticleSlider({
      ptlGap: isMobile || isSmall ? 3 : 0,
      ptlSize: isMobile || isSmall ? 3 : 1,
      width: 1e9,
      height: 1e9
    });
      
    var gui = new dat.GUI();
    gui.add(ps, 'ptlGap').min(0).max(5).step(1).onChange(function(){
      ps.init(true);
    });
    gui.add(ps, 'ptlSize').min(1).max(5).step(1).onChange(function(){
      ps.init(true);
    });
    gui.add(ps, 'restless');
    gui.addColor(ps, 'color').onChange(function(value){
      ps.monochrome = true;
      ps.setColor(value);
        ps.init(true);
    });
    
    
    (window.addEventListener
     ? window.addEventListener('click', function(){ps.init(true)}, false)
     : window.onclick = function(){ps.init(true)});
  }
  
  var initParticleSlider = function(){
    var psScript = document.createElement('script');
    (psScript.addEventListener
      ? psScript.addEventListener('load', init, false)
      : psScript.onload = init);
    psScript.src = 'https://particleslider.com/js/particleslider/current/particleslider.js';
      psScript.setAttribute('type', 'text/javascript');
    document.body.appendChild(psScript);
  }
      
  (window.addEventListener
    ? window.addEventListener('load', initParticleSlider, false)
    : window.onload = initParticleSlider);
  