const links = document.querySelector("#links");
const burger = document.querySelector("#burger");

let timesClicked = 1;

burger.addEventListener("click", () => {
    timesClicked++;
    if (timesClicked % 2 == 0) {
        links.classList.remove("hidden");
    } else {
        links.classList.add("hidden");
    }
});
