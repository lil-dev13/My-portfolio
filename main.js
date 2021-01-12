
setTimeout(function(){
   document.getElementById('preloader').style.display = "none"
}, 4000);
myIcon = document.getElementById('myIcon');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      myIcon.style.display = "block";
    } else {
      myIcon.style.display = "none";
    }
  }
  // When the user clicks on the icon, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
// === MENU SHOW ===
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

// === ACTIVE AND REMOVE MENU ===
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

    //checkbox
    const checkbox = document.getElementById('switch');
    checkbox.addEventListener('change', () => {
        //change the theme
      
        document.body.classList.toggle('dark');
        if(document.body.classList == 'dark'){
          document.getElementById('dev').src = "./img/web-programming.png";
          document.getElementById('dev1').src = "./img/creativity1.png";
          document.getElementById('dev2').src = "./img/animationw.png";
        }else{
            document.getElementById('dev').src = "./img/web-programmingb.png";
            document.getElementById('dev1').src = "./img/creativity.png";
            document.getElementById('dev2').src = "./img/animation.png";
        }
    })
    // Type animation
    var typed = new Typed(".type", {
        strings: [
            'Developer',
            'Designer',
            'Student'
        ],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true
    });
    //email
    
    document.querySelector(".contact__button").addEventListener("click", function() {
        document.getElementById('message');
        document.getElementById('mail');
       

        if(message.value === ''){
            alert('Fill in the form')
        }
        else{
        const nom = document.getElementById('name').value;
        alert("Sorry " + nom + " this section is coming soon...")
    }});
// === SCROLL REVEAL ANIMATION ===
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000, 
    reset: true
})
// OVERLAY

// === SCROLL HOME ===
// sr.reveal('.home__title', {});
// sr.reveal('.button', {delay: 200});
// sr.reveal('.home__img', {delay: 400});
// sr.reveal('.home__social-icon', { interval: 200});
// IMG
gsap.from('.home__img', {opacity: 0, duration: 2, delay: 2, x: 60})

// INFORMATION
gsap.from('.home', {opacity: 0, duration: 3, delay: 2.3, y: 25})
gsap.from('.home__data', {opacity: 0, duration: 3, delay: 2.3, y: 25, ease:'expo.out', stagger: .3})

// NAV ITEM
gsap.from('.nav__logo', {opacity:0, duration: 3, delay: 3.2, y: 25, ease:'expo.out'});
gsap.from('.nav__item', {opacity: 0, duration: 3, delay: 3.2, y: 25, ease:'expo.out', stagger: .2})

// SOCIAL
gsap.from('.home__social-icon', {opacity: 0, duration: 3, delay: 4, y: 25, ease:'expo.out', stagger: .2})

//  === SCROLL ABOUT ===
sr.reveal('.about__img',{});
sr.reveal('.about__subtitle', {delay:400});
sr.reveal('.about__text',{delay:400});

// === SCROLL SKILLS ===
sr.reveal('.skills__subtitle', {});
sr.reveal(".skills__text", {});
sr.reveal(".skills__data",{interval:200});
sr.reveal(".skills__img", {delay:600});

// === SCROLL WORK ===
sr.reveal('.services__data', {interval:400})
// === SCROLL WORK ===
sr.reveal('.work__card', {interval: 200});

// === SCROLL CONTACT ===
sr.reveal('.contact__input', {interval: 200});
sr.reveal('.indicator', {delay: 1000});


// === MAIL VALIDATION ===
function validate(){
    const form = document.getElementById('form');
    const mail = document.getElementById('mail').value;
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if(mail.match(pattern)){
        form.classList.add('valid')
        form.classList.remove('invalid')
    }else{
        form.classList.add('invalid')
        form.classList.remove('valid')
    }if(mail ==""){
        form.classList.remove('invalid')
        form.classList.remove('valid')
    }
}

function popup(){
    const blur = document.getElementById('blur');
    blur.classList.toggle('hello');
    const pop = document.getElementById('pop');
    pop.classList.toggle('hello')
}

function hi(){
    const blur = document.getElementById('blur');
    blur.classList.toggle('hello');
    const pop = document.getElementById('pop0');
    pop.classList.toggle('hello')
}

function sup(){
    const blur = document.getElementById('blur');
    blur.classList.toggle('hello');
    const pop = document.getElementById('pop1');
    pop.classList.toggle('hello')
}
function heyya(){
    const blur = document.getElementById('blur');
    blur.classList.toggle('hello');
    const pop = document.getElementById('pop2');
    pop.classList.toggle('hello')
}

function hey(){
    const blur = document.getElementById('blur');
    blur.classList.toggle('hello');
    const pop = document.getElementById('pop3');
    pop.classList.toggle('hello')
}

function bruh(){
    const blur = document.getElementById('blur');
    blur.classList.toggle('hello');
    const pop = document.getElementById('pop4');
    pop.classList.toggle('hello')
}

