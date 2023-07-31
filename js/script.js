/* 
    header-section
*/ 
//showing and hiding nav-lists   
const barsIcon = document.querySelector(".bars-icon");
const closeIcon = document.querySelector(".close-icon");
const navLists =  document.querySelector(".nav-lists");

// show nav-lists
barsIcon.onclick = ()=>{
  navLists.classList.add("actives");
  barsIcon.style.display = "none";
  closeIcon.style.display = "flex";
}
// hide nav-lists
closeIcon.onclick = ()=>{
        navLists.classList.remove("actives");
        barsIcon.style.display = "flex";
        closeIcon.style.display = "none";
}

//changing the style of nav-item when clicking on it
const navItems = document.querySelectorAll(".nav-lists li");
//removing the active class
function removeClass(){
        navItems.forEach( item =>{   
                const link = item.querySelector(".nav-lists li a");
                link.classList.remove("active");
                
        })
}
//adding the active-class
navItems.forEach( item =>{
        
        const link = item.querySelector(".nav-lists li a");
        link.addEventListener("click", ()=>{
                removeClass();
                link.classList.add("active");
                navLists.classList.remove("actives");
                closeIcon.style.display = "none";
                barsIcon.style.display = "block";       
        })
        
})


/*   
     about-section
     working on show-more and show-less
*/
showMore = document.querySelector(".show-more-anchor");
readMoreContent = document.querySelector(".read-more-content"); 

showMore.onclick = (e)=>{
        e.preventDefault();
        if(showMore.textContent != "Show Less"){
           readMoreContent.style.display = "block";
           showMore.textContent = "Show Less";
        }
        else{
           readMoreContent.style.display = "none";
           showMore.textContent = "Show More...";      
        }     
}


/*   skill-section
     show and hide the skills
*/


const skill = document.querySelectorAll(".skill");


skill.forEach( item =>{
        const downArrow = item.querySelector(".sort-down");
        downArrow.addEventListener("click" , ()=>{
                const skills = item.querySelector(".skills-inside-it");
                skills.classList.toggle("block");
                
        })
})


/*   
     testimonial-section
     swiper-js-library
*/
const swiper = new Swiper('.swiper', {
        scrollbar: {
           el: '.swiper-scrollbar',
           draggable: true,
        }
       
})      