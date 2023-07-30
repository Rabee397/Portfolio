//navbar
const barsIcon = document.querySelector(".bars-icon");
const closeIcon = document.querySelector(".close-icon");
const navLists =  document.querySelector(".nav-lists");


barsIcon.onclick = ()=>{
  navLists.classList.add("actives");
  barsIcon.style.display = "none";
  closeIcon.style.display = "flex";
}

closeIcon.onclick = ()=>{
        navLists.classList.remove("actives");
        barsIcon.style.display = "flex";
        closeIcon.style.display = "none";
}

/*   about-section
     working on show-more and show-less
*/
showMore = document.querySelector(".show-more-anchor");
showLess = document.querySelector(".show-less-anchor");
readMoreContent = document.querySelector(".read-more-content"); 

showMore.onclick = (e)=>{
        e.preventDefault();
        readMoreContent.style.display = "block";
        showMore.style.display = "none";
        showLess.style.display = "block";     
}
showLess.onclick = (e)=>{
        e.preventDefault();
        readMoreContent.style.display = "none";
        showMore.style.display = "block";
        showLess.style.display = "none";     
}

/*   skill-section
     show and hide the skills
*/
const skills = document.querySelector(".sills-inside-it");
const sortDown = document.querySelector(".sort-down");
const sortUp = document.querySelector(".sort-up");


sortDown.addEventListener("click" , ()=>{
        skills.classList.add("block");
        sortDown.style.display = "none";
        sortUp.style.display = "block";
})

sortUp.addEventListener("click" , ()=>{
        skills.classList.remove("block");
        sortUp.style.display = "none";
        sortDown.style.display = "block";
})

const swiper = new Swiper('.swiper', {
        scrollbar: {
           el: '.swiper-scrollbar',
           draggable: true,
        }
       
})      