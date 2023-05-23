function createElement(elementType, src, left, bottom) {
    let element = document.createElement(elementType);
    element.src = src;
    element.style.position = "fixed";
    element.style.left = left;
    element.style.bottom = bottom;
    document.body.append(element);
    return element;
}
function newImage() {
    let greenCharacter = createElement("img", "assets/green-character.gif", "100px", "100px");
    let pineTree = createElement("img", "assets/pine-tree.png", "450px", "200px");
    let tree = createElement("img", "assets/tree.png", "200px", "300px");
    let pillar = createElement("img", "assets/pillar.png", "350px", "100px");
    let crate = createElement("img", "assets/crate.png", "150px", "200px");
    let well = createElement("img", "assets/well.png", "500px", "425px");
}
newImage();

function newItem() {
    let sword = createElement("img", "assets/sword.png", "500px", "405px")
    let shield = createElement("img", "assets/shield.png", "165px", "185px")
    let staff = createElement("img", "assets/staff.png", "600px", "100px")
    document.addEventListener("dblclick", function (event) {
        if (event.target === sword || event.target === shield || event.target === staff) {
            event.target.remove();
        }
    }
    )
}
newItem();
function backgroundImg() {
    let grass = createElement("img", "assets/grass.png", "0px", "0px")
    let sky = createElement("img", "assets/sky.png", "0px", "610px")
}
backgroundImg()