const yesModal = document.getElementById("modal_da");
const noModal = document.getElementById("modal_net");
const yesButton = document.getElementById("button_yes");
const noButton = document.getElementById("button_no");
const closeYes = document.getElementById("close_modal_da");
const closeNo = document.getElementById("close_modal_net");
const huiBackground = document.getElementById("hueta")

yesButton.addEventListener("click", () =>{
    yesModal.classList.add("open"),
    huiBackground.classList.add("background")
});

closeYes.addEventListener("click", () =>{
    yesModal.classList.remove("open"),
    huiBackground.classList.remove("background")
});

noButton.addEventListener("click", () =>{
    noModal.classList.add("open"),
    huiBackground.classList.add("background")
});

closeNo.addEventListener("click", () =>{
    noModal.classList.remove("open"),
    huiBackground.classList.remove("background")
})