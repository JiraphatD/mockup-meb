var basket = cookiemonster.get("basket");
var temp_basket = basket;
var count_cart = basket.length;
var wish = cookiemonster.get("wish");
count_wish = wish.length;

cart(count_cart);

if(count_wish > 0){
    document.getElementById('wish').innerHTML += count_wish;
}




function cart(count_cart){
    if(count_cart == 0){
        document.getElementById('count_cart').style.display = 'none';
    }
    else{
        document.getElementById('count_cart').style.display = 'block';
        document.getElementById('count_cart').innerHTML = count_cart;
    }
}