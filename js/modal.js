const modal = document.querySelector(".modal");
const circleModal = document.querySelector(".o");
export function interval(intervalCircle, intervalModal){
    intervalCircle = setInterval(loadingModal, 500);
    intervalModal = setInterval(displayModal, 2000);
}
function loadingModal() {
    return circleModal.style.animationPlayState = "running";
}
function displayModal() {
    return modal.style.display = "none";
}

interval();