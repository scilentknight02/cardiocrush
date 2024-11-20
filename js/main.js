// 'use strict';

// (function ($) {

//     /*------------------
//         Preloader
//     --------------------*/
//     $(window).on('load', function () {
//         $(".loader").fadeOut();
//         $("#preloder").delay(200).fadeOut("slow");
//     });
// })(jQuery);


// Show menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// menu Show
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// menu hidden
// Validate if constant exists
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}
      
// Remove menu mobile
const navLink = document.querySelectorAll( `.nav__link`)

const linkAction = () => {
    const navMenu= document.getElementById(`nav-menu`)
    // when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener( `click`, linkAction))

// =========== change backround header====================
const scrollHeader= ()=>{
    const header= document.getElementById('header');
    // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >=50 ? header.classList.add('bg-header')
                      : header.classList.remove('bg-header')
}
window.addEventListener('scroll',scrollHeader);



/*=================Calculate JS====================*/
const calculateForm= document.getElementById('calculate-form'),
      calculateCm=document.getElementById('calculate-cm'),
      calculateKg=document.getElementById('calculate-kg'),
      calculateMessage=document.getElementById('calculate-message')

const calculateBmi=(e)=>{
    e.preventDefault()
    // Check if the fields have a value
    if(calculateCm.value===''|| calculateKg.value===''){
        //add and remove color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')
        // Show message
        calculateMessage.textContent=  `Fill in your Height and Weight`
        // Remove message three seconds
        setTimeout(()=>{
            calculateMessage.textContent=''
        },3000)
    } else{
        //BMI formula
        const cm = parseFloat(calculateCm.value) / 100;
        const kg = parseFloat(calculateKg.value);

        if (isNaN(cm) || isNaN(kg)) {
            calculateMessage.textContent = 'Invalid input values. Please enter numbers only.';
            return;
        }

        if (cm === 0) {
            calculateMessage.textContent = 'Height cannot be zero.';
            return;
        }
        const bmi = Math.round(kg / (cm * cm));

    // Show health status
    if(bmi < 18.5){
        calculateMessage.classList.add('color-green')
        calculateMessage.textContent=`Your BMI is ${bmi} and you are SKINNY 😔`
    }else if(bmi <25){
        calculateMessage.classList.add('color-green')
        calculateMessage.textContent=`Your BMI is ${bmi} and you are NORMAL 😉`
    }else{
        calculateMessage.classList.add('color-green')
        calculateMessage.textContent=`Your BMI is ${bmi} and you are OVERWEIGHT 🥲`
    }
    // to clear the input field
    calculateCm.value=''
    calculateKg.value=''
    // Remove message four secs
    setTimeout(()=>{
        calculateMessage.textContent=''
    },4000)
}
}
calculateForm.addEventListener(`submit`,calculateBmi)

// =========== Email JS ===============

const contactForm= document.getElementById('contact-form'),
      contactMessage= document.getElementById('contact-message'),
      contactUser= document.getElementById('contact-user')
      
const sendEmail=(e)=>{
    e.preventDefault()
    // Check if the field has a value
    if(contactUser.value===''){
        // Add amd remove color
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')
        // Show message
        contactMessage.textContent= 'You must enter your email 😇'
        // Remove message in 3 secs
        setTimeout(()=>{
            contactMessage.textContent=''
        },3000)
    }else{
        // serviceID - template ID - #form - public key
        emailjs.sendForm('service_qh865qj', 'template_jq5ulur', '#contact-form', 'iiDQNGU0fGDKmk-QC')
        .then(()=>{
            // show message
            contactMessage.classList.add('color-green')
            contactMessage.textContent='You have registered successfully 💪'
            // Remove message in 3 secs
            setTimeout(()=>{
                contactMessage.textContent=''
            },3000)
            // Clear the input field
            contactUser.value=''
        }, (error)=>{
            // mail sending error
            alert('Ohh nooo! Something has failed.....', error)
        })
    }
}
contactForm.addEventListener('submit', sendEmail)

// =========== Scroll sections Active Link ===========
const sections= document.querySelectorAll('section[id]')
const scrollActive=() =>{
    const scrollY= window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight= current.offsetHeight,
              sectionTop= current.offsetTop - 50, // To make it smooth
              sectionId= current.getAttribute('id'),
              sectionsClass= document.querySelector('.nav__menu a[href*='+ sectionId+']')
            if(scrollY>sectionTop && scrollY <= sectionTop+ sectionHeight){
                sectionsClass.classList.add('active-link')
            }else{
                sectionsClass.classList.remove('active-link')
            }
    })
}
window.addEventListener('scroll',scrollActive)

// =========== SHOW SCROLL UP ================\

const scrollUp= () =>{
    const scrollUp= document.getElementById('scroll-up')
    // When the scroll is higher than 350 vh, add the show-scroll class to the a taG with the scrollup
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                         :scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll', scrollUp)