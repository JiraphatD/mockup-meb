
function addBook(n) {
    document.getElementById('idtest').style.display = 'block';
    document.getElementById('box_header').style.zIndex = "0";
    document.getElementById("mySwiper1").style.zIndex = "-1";
    document.body.setAttribute("scroll", "no");
    document.body.style.overflow = "hidden";
    addBasket(n);
    if(temp_basket.includes(n) == false){
        count_cart++;
        temp_basket.push(n);
    }
    cart(count_cart);
}

var modal = document.getElementById('idtest');
function closeWithX() {
    
    document.getElementById('idtest').style.display = 'none'
    document.getElementById('box_header').style.zIndex = "100";
    document.getElementById("mySwiper1").style.zIndex = "1";
    document.body.setAttribute("scroll", "");
    document.body.style.overflow = "visible";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        closeWithX();
    }
}

var wishState = false;
function wishIconChange(){
    wishState = !wishState;
    if(wishState){
        Path_1374.style.fill = "#dc3545";
    }
    else{
        Path_1374.style.fill = "#00bf6c";
    }
    wishIconUser.setAttribute("xlink:href", "#ic-add-wishlist");
}

function addBook_w(n) {
    document.getElementById('box_header').style.zIndex = "-1";
    document.getElementById('idtest').style.display = 'block';
    document.body.setAttribute("scroll", "no");
    document.body.style.overflow = "hidden";
    addBasket(n);
    if(temp_basket.includes(n) == false){
        count_cart++;
        temp_basket.push(n);
    }
    cart(count_cart);
}

function closeWithX_w() {
    document.getElementById('box_header').style.zIndex = "100";
    document.getElementById('idtest').style.display = 'none'
    document.body.setAttribute("scroll", "");
    document.body.style.overflow = "visible";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        closeWithX_w();
    }
}