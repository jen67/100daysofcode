const shareImg = document.querySelector(".share-icon");
const toolTip = document.querySelector("#share");
const hideToolTip = document.querySelector("#share .share-icon");


shareImg.addEventListener("click", () => { 
    toolTip.style.transform = 'translateY(0)'
    toolTip.style.opacity = '1'
});

hideToolTip.addEventListener("click", () => { 
    toolTip.style.transform = 'translateY(-100%)'
    toolTip.style.opacity = '0'
});

