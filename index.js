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
    let pineTree = createElement("img", "assets/pine-tree.png", "450px", "200px")

}
newImage();