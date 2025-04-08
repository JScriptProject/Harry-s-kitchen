"use strict";

// implement on scroll animatmation for nav bar

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});

// Expert name selection

//  create the objects for each chef

// chef Luca Fontaine

const chefsData = {
  Luca: {
    name: "Luca Fontaine",
    img: "media/Chef Luca Fontaine.jpg",
    tagline: "Creating soulful meals that tell a story.",
    desc: "Luca Fontaine is a legend in the world of barbeque, celebrated for his mastery of open-flame cooking. Known for his bold flavors and innovative grilling techniques, Bob transforms simple cuts into smoky, succulent masterpieces.",
    dish_img1: {
      dish_name: "Chicken",
      dish_img_url: "media/c-chicken.jpg",
    },
    dish_img2: {
      dish_name: "HotDog",
      dish_img_url: "media/c-Hot Dogs.jpg",
    },
  },

  Aurora: {
    name: "Chef Aurora Beaumont",
    img: "media/Chef Aurora Beaumont.jpg",
    tagline: "Where passion meets precision in every dish.",
    desc: "Aurora Beaumont is a culinary artist who infuses her dishes with the vibrant essence of Indian cuisine. Renowned for her deep understanding of spices, Rani creates flavorful masterpieces that balance tradition with innovation.",
    dish_img1: {
      dish_name: "Cronut",
      dish_img_url: "media/c-Cronut.jpg",
    },
    dish_img2: {
      dish_name: "Soup",
      dish_img_url: "media/c-Soup.jpg",
    },
  },

  Amara: {
    name: "Amara de Blanc",
    img: "media/Chef Amara de Blanc.jpg",
    tagline: "Mastering the art of fusion, one plate at a time.",
    desc: "Amara de Blanc is a trailblazer in the plant-based culinary world, redefining what it means to eat sustainably. With a deep commitment to fresh, local ingredients, Rahul crafts dishes that are as nourishing as they are delicious.",
    dish_img1: {
      dish_name: "Cheese",
      dish_img_url: "media/c-Cream Cheese.jpg",
    },
    dish_img2: {
      dish_name: "Pasta",
      dish_img_url: "media/c-pasta.jpg",
    },
  },
  Mark: {
    name: "Mark John",
    img: "media/chef-mark John.jpg",
    tagline: "Turning ingredients into unforgettable flavors.",
    desc: "Mark is a celebrated seafood specialist who brings the ocean’s bounty to life with finesse and artistry. Known for his sustainable practices and delicate preparations, Mark's dishes highlight the purity and freshness of the sea.",
    dish_img1: {
      dish_name: "Pastrami",
      dish_img_url: "media/c-Pastrami on Rye .jpg",
    },
    dish_img2: {
      dish_name: "Chicken",
      dish_img_url: "media/c-chicken.jpg",
    },
  },
};
// create the array of the chefs aobjetcts

const chefs = document.querySelectorAll(".expert-widget-box");

chefs.forEach((chef) => {
  chef.addEventListener("click", function (e) {
    const clickedChefName = chef.dataset.name;
    const selectedChef = chefsData[clickedChefName];

    // change the name
    document.querySelector(".expert-name").textContent = selectedChef.name;

    // change the image
    document
      .querySelector(".expert-box-image-enclosed")
      .querySelector("img").src = selectedChef.img;

    // change the tagline
    document.querySelector(".expert-tagline").textContent =
      selectedChef.tagline;

    // change the expert info

    document.querySelector(".expert-info").textContent = selectedChef.desc;

    // change expert name in span
    document.querySelector(".expert-name-span").textContent = selectedChef.name;

    // change the experties

    // change the image
    document
      .querySelector(".expert-experty-menu-img-container1")
      .querySelector("img").src = selectedChef.dish_img1.dish_img_url;

    document
      .querySelector(".expert-experty-menu-img-container2")
      .querySelector("img").src = selectedChef.dish_img2.dish_img_url;

    // chnage the text
    document
      .querySelector(".expert-experty-menu-img-container1")
      .querySelector("h2").textContent = selectedChef.dish_img1.dish_name;

    document
      .querySelector(".expert-experty-menu-img-container2")
      .querySelector("h2").textContent = selectedChef.dish_img2.dish_name;
  });
});

// function to remove the scroll animatin

function removeScroll()
{
  if(document.body.classList.contains("no-scroll"))
  {
    document.body.classList.remove("no-scroll");
  }
}

// on scroll animantion

document.querySelector("nav").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    removeScroll();
    menuCloseFn();
    const section = document.querySelector(id);
    console.log(section);
    section.scrollIntoView({ behavior: "smooth" });
  }
});

// our chef scroll

document.querySelector(".btn-our_chef").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#expert").scrollIntoView({ behavior: "smooth" });
});

// menu section

document.querySelector(".btn-our_menu").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
});

// menu toggler
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const navbar = document.querySelector(".navbar");
const mobo_logo = document.querySelector(".mobo-logo");

let mm = gsap.matchMedia();

function menuOpenFn()
{
  mm.add("(max-width:900px)", () =>{
    menuOpen.classList.toggle("menu-hide");
    menuClose.classList.toggle("menu-show");
    navbar.classList.toggle("d-flex");
 
    gsap.fromTo(navbar,
     {y:"200%",
       opacity:0.5,
       duration:0.5
     },
     {
         y:"0",
         opacity:1,
         duration:0.5,
         ease: "power2.in",
     });
 
     gsap.to(".bg-overlay",{
       scale:1.4,
       duration:8,
       ease: "power2.out",
     })
     document.body.classList.add("no-scroll");
  }) 
}


menuOpen.addEventListener("click", function () {
  menuOpenFn();

});

function menuCloseFn()
{
  mm.add("(max-width:900px)", () =>{
    gsap.to(navbar,
      {
          y:"200%",
          opacity:0.5,
          duration:0.5,
          ease: "power2.in",
     onComplete:() =>{
      menuClose.classList.toggle("menu-show");
      menuOpen.classList.toggle("menu-hide");
      navbar.classList.toggle("d-flex");
     }
     
  });
      gsap.to(".bg-overlay",{
        scale:1,
        duration:1.5,
        ease: "power2.in",
      })
      document.body.classList.remove("no-scroll");
  })
  
}



menuClose.addEventListener("click", function () {
   menuCloseFn();
});

// Scroll TRigger animations

gsap.registerPlugin(ScrollTrigger);

// mm.add("(min-width:900px)", () =>{
//   gsap.utils.toArray(".sub-heading").forEach(subheading =>{
//     gsap.fromTo(subheading, {
//       fontSize:"75px",
//       duration:1,
//     },{fontSize:"30px", 
//       duration:1, 
//       scrollTrigger:{
//         trigger:subheading,
//         start:"top 80%",
//         end:"top 40%",
//         scrub:1,
//       }
//     })
//   })
// });

mm.add("(min-width:900px)", () =>{
  gsap.fromTo(".section_content-img-img",{
    scale:1,
    duration:5
  },{
    scale:2,
    duration:5,
    scrollTrigger:{
      trigger:".section_content-img-img",
      start:"top 90%",
      end:"top -90%",
      scrub:1,
    }
  })
});

mm.add("(min-width:900px)", () =>{
  gsap.fromTo(".menu-img-back",{
    right:"90%",
    duration:1,
    opacity:0.2,
    width:"1000px",
    top: "-20rem",
  },{
    right:"10%",
    duration:1,
    opacity:1,
    width:"250px",
    top: "-13rem",
    scrollTrigger:{
      trigger:".menu-img-back",
      start:"top 70%",
      end:"top 20%",
      scrub:1,
    }
  })
});

// mm.add("(min-width:900px)", () =>{
//   gsap.to(".left-box", {
//     scrollTrigger: {
//       trigger: ".section_content-inclosed-menu",
//       start: "top center",
//       end: "bottom center",
//       scrub: true,
//     },
//     x: 0,
//     scale: 1.05,
//     zIndex: 3,
//   });
  
//   gsap.to(".right-box", {
//     scrollTrigger: {
//       trigger: ".section_content-inclosed-menu",
//       start: "top center",
//       end: "bottom center",
//       scrub: true,
//     },
//     x: 0,
//     scale: 1.05,
//     zIndex: 3,
//   });
  

// });


mm.add("(min-width:900px)", () =>{
  gsap.fromTo(".menu-img-back",{
    y:"90%",
    duration:1,
    opacity:0.5,
  },{
    y:"10%",
    duration:1,
    opacity:1,
    scrollTrigger:{
      trigger:".menu-img-back",
      start:"top 90%",
      end:"top 20%",
      scrub:1,
    }
  })
});

mm.add("(min-width:900px)", () =>{
  document.querySelectorAll(".card-group").forEach((group) => {
    const left = group.querySelector(".left-box");
    const right = group.querySelector(".right-box");
  
    gsap.fromTo(left, 
      { opacity: 0, x: 200, scale: 0.9, rotateY:0 }, 
      {
        opacity: 1,
        x: -30,
        scale: 1,
        duration: 1,
        rotateY:10,
        ease: "power3.out",
        scrollTrigger: {
          trigger: group,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      });
  
    gsap.fromTo(right, 
      { opacity: 0, x: -200, scale: 0.9, rotateY:0 }, 
      {
        opacity: 1,
        x: 30,
        scale: 1,
        duration: 1,
        rotateY:-10,
        ease: "power3.out",
        scrollTrigger: {
          trigger: group,
          start: "top 75%",
          end: "top 50%",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      });
  });
});

// mm.add("(min-width:900px)", () =>{
  
// });










// document.querySelectorAll(".card-group").forEach((group) => {
//   const left = group.querySelector(".left-box");
//   const right = group.querySelector(".right-box");

//   gsap.fromTo(left, 
//     { opacity: 0, x: 200, scale: 0.9, rotateY:0 }, 
//     {
//       opacity: 1,
//       x: -30,
//       scale: 1,
//       duration: 1,
//       rotateY:10,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: group,
//         start: "top 80%",
//         end: "top 50%",
//         scrub: 1,
//         toggleActions: "play none none reverse"
//       }
//     });

//   gsap.fromTo(right, 
//     { opacity: 0, x: -200, scale: 0.9, rotateY:0 }, 
//     {
//       opacity: 1,
//       x: 30,
//       scale: 1,
//       duration: 1,
//       rotateY:-10,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: group,
//         start: "top 75%",
//         end: "top 50%",
//         scrub: 1,
//         toggleActions: "play none none reverse"
//       }
//     });
// });