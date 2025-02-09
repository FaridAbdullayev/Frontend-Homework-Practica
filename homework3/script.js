function addClose() {
    let liList = document.getElementsByTagName("li");
    [...liList].forEach(elem => {
        let closeSpan = createClose();
        elem.appendChild(closeSpan)
    })
}
function createClose() {
    let elem = document.createElement("span");
    elem.classList.add("close");
    elem.innerText = 'x';
    return elem;
}

let addBtn = document.querySelector(".addBtn");
let input = document.querySelector("input");
let ul = document.querySelector("ul");



addBtn.addEventListener("click", function (e) {
    let newLi = document.createElement("li");
    newLi.innerText = input.value;

    newLi.onclick = e=>taskClick(e.target);

    let closeSpan = createClose();

    closeSpan.onclick = function(e){
        close(e.target)
    }

    newLi.appendChild(closeSpan);

    ul.appendChild(newLi);
})
document.querySelectorAll(".close").forEach(elem => {
    elem.addEventListener("click", function (e) {
        elem.parentElement.remove();
    })
})

document.querySelectorAll("li").forEach(elem => {
    elem.addEventListener("click", function (e) {
        elem.classList.toggle("checked")
    })
})

