"use strict";

// implement on scroll animatmation for nav bar

const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 100);

});


// Expert name selection


//  create the objects for each chef

// chef Luca Fontaine

const chefsData = {
    
   Luca:{
    name: "Luca Fontaine",
    img:"media/Chef Luca Fontaine.jpg",
    tagline:"Creating soulful meals that tell a story.",
    desc:"Luca Fontaine is a legend in the world of barbeque, celebrated for his mastery of open-flame cooking. Known for his bold flavors and innovative grilling techniques, Bob transforms simple cuts into smoky, succulent masterpieces.",
    dish_img1:{
        dish_name:"Chicken",
        dish_img_url:"media/c-chicken.jpg"
    },
    dish_img2:{
        dish_name:"HotDog",
        dish_img_url:"media/c-Hot Dogs.jpg"
    }
},


Aurora:{
    name: "Chef Aurora Beaumont",
    img:"media/Chef Aurora Beaumont.jpg",
    tagline:"Where passion meets precision in every dish.",
    desc:"Aurora Beaumont is a culinary artist who infuses her dishes with the vibrant essence of Indian cuisine. Renowned for her deep understanding of spices, Rani creates flavorful masterpieces that balance tradition with innovation.",
    dish_img1:{
        dish_name:"Cronut",
        dish_img_url:"media/c-Cronut.jpg"
    },
    dish_img2:{
        dish_name:"Soup",
        dish_img_url:"media/c-Soup.jpg"
    }
},

   Amara:{
    name: "Amara de Blanc",
    img:"media/Chef Amara de Blanc.jpg",
    tagline:"Mastering the art of fusion, one plate at a time.",
    desc:"Amara de Blanc is a trailblazer in the plant-based culinary world, redefining what it means to eat sustainably. With a deep commitment to fresh, local ingredients, Rahul crafts dishes that are as nourishing as they are delicious.",
    dish_img1:{
        dish_name:"Cheese",
        dish_img_url:"media/c-Cream Cheese.jpg"
    },
    dish_img2:{
        dish_name:"Pasta",
        dish_img_url:"media/c-pasta.jpg"
    }
},
 Mark:{
    name: "Mark John",
    img:"media/chef-mark John.jpg",
    tagline:"Turning ingredients into unforgettable flavors.",
    desc:"Mark is a celebrated seafood specialist who brings the ocean’s bounty to life with finesse and artistry. Known for his sustainable practices and delicate preparations, Mark's dishes highlight the purity and freshness of the sea.",
    dish_img1:{
        dish_name:"Pastrami",
        dish_img_url:"media/c-Pastrami on Rye .jpg"
    },
    dish_img2:{
        dish_name:"Chicken",
        dish_img_url:"media/c-chicken.jpg"
    }
}
}
// create the array of the chefs aobjetcts

const chefs = document.querySelectorAll(".expert-widget-box");

chefs.forEach((chef)=> {
    chef.addEventListener("click", function(e){
      const clickedChefName = chef.dataset.name;
      const selectedChef = chefsData[clickedChefName];
      
    // change the name
    document.querySelector(".expert-name").textContent = selectedChef.name;

    // change the image
    document.querySelector(".expert-box-image-enclosed").querySelector("img").src = selectedChef.img;

    // change the tagline
    document.querySelector(".expert-tagline").textContent = selectedChef.tagline;

    // change the expert info

    document.querySelector(".expert-info").textContent = selectedChef.desc;
      
    // change expert name in span
    document.querySelector(".expert-name-span").textContent = selectedChef.name;

    // change the experties

    // change the image
    document.querySelector(".expert-experty-menu-img-container1").querySelector("img").src = selectedChef.dish_img1.dish_img_url; 

    document.querySelector(".expert-experty-menu-img-container2").querySelector("img").src = selectedChef.dish_img2.dish_img_url; 

    // chnage the text
    document.querySelector(".expert-experty-menu-img-container1").querySelector("h2").textContent = selectedChef.dish_img1.dish_name;

    document.querySelector(".expert-experty-menu-img-container2").querySelector("h2").textContent = selectedChef.dish_img2.dish_name;

    })
    
})

// on scroll animantion

document.querySelector("nav").addEventListener("click", function(e){
    e.preventDefault();
      console.log(e.target);
    if(e.target.classList.contains("nav-link"))
    {
      const id = e.target.getAttribute("href");
      console.log(id);
    
      const section = document.querySelector(id);
      console.log(section);
      section.scrollIntoView({behavior: "smooth"}); 
    }

})

// our chef scroll

document.querySelector(".btn-our_chef").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector("#expert").scrollIntoView({behavior: "smooth"});
})

// menu section

document.querySelector(".btn-our_menu").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector("#menu").scrollIntoView({behavior: "smooth"});
})

// menu toggler
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
document.querySelector(".control-buttons").addEventListener("click", function(e){
  console.log(e.target);
})