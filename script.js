const shareIcons = document.querySelectorAll(".share-icon");
const toolTip = document.querySelector("#share");

shareIcons.forEach((shareIcon) => {
  shareIcon.addEventListener("click", () => {
    toolTip.classList.toggle("visible");
  });
});