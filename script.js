const shareImg = document.querySelector(".share-icon");
const toolTip = document.querySelector("#share");
const hideToolTip = document.querySelector("#share .share-icon");


shareImg.addEventListener("click", () => { 
    toolTip.style.transform = 'translateY(0)'
    toolTip.style.opacity = '1'
    toolTip.style.transition = 'all 0.3s ease-in'
});

hideToolTip.addEventListener("click", () => { 
    toolTip.style.transform = 'translateY(-100%)'
    toolTip.style.opacity = '0'
    toolTip.style.transition = 'all 0.3s ease-out'
});

