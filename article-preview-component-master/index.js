document.addEventListener("DOMContentLoaded", function() {
    const shareImg = document.querySelector(".share1 img");
    const hideDiv = document.querySelector(".hide");

    shareImg.addEventListener("mouseover", function() {
        hideDiv.style.display = "block";  // or "flex" or any other display type that suits your design
    });

    shareImg.addEventListener("mouseout", function() {
        hideDiv.style.display = "none";
    });
});
