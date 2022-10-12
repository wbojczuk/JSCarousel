const container = document.querySelector(".as-carousel-container");
const upArrow = document.querySelector(".as-carousel-up");
const downArrow = document.querySelector(".as-carousel-down");
const content = document.getElementById("carouselContent");
const contentArray = ["images/wallpaper.jpg", "images/wallpaperthing.jpg", "images/wallpaperthingy.jpg","images/wally.jpg"];
let carouselCount = 0;

// Initialze
content.style.backgroundImage = `url('${contentArray[carouselCount]}')`;
content.style.backgroundSize = "cover";
content.style.backgroundPosition = "center";

// LISTENERS

upArrow.addEventListener("click", ()=>{
    container.style.transform = "translateY(-100px) scale(1, 1.1)";
    container.style.opacity = "0";
    
    setTimeout(() => {
            container.style.transition = "none";
            container.style.transform = "translateY(100px) scale(1, 1.1)";
            
        }, 500);
    setTimeout(()=>{
        if(carouselCount < (contentArray.length - 1)){
            carouselCount++;  
        }else{
            carouselCount = 0;
        }
        container.style.transition = "transform 0.5s, opacity 0.5s";
        content.style.backgroundImage = `url('${contentArray[carouselCount]}')`;
        container.style.transform = "translateY(0) scale(1)";
        container.style.opacity = "1";
    },550);
});

downArrow.addEventListener("click", ()=>{
    container.style.transform = "translateY(100px) scale(1, 1.1)";
    container.style.opacity = "0";
    setTimeout(() => {
        container.style.transition = "none";
        container.style.transform = "translateY(-100px) scale(1, 1.1)";
        
    }, 500);
    setTimeout(()=>{
        if(carouselCount > 0){
            carouselCount--;  
        }else{
            carouselCount = (contentArray.length - 1);
        }
        container.style.transition = "transform 0.5s, opacity 0.5s";
        content.style.backgroundImage = `url('${contentArray[carouselCount]}')`;
        container.style.transform = "translateY(0) scale(1)";
        container.style.opacity = "1";
    },550);
});