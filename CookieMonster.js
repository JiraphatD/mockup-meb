var cookiemonster = new Object();

        cookiemonster.append = function (cookieName, item) {
            item = cm_clean(item);
            var cookievalue = cookiemonster.get(cookieName);
            if (cookievalue instanceof Array) {
                cookievalue[cookievalue.length] = item;
                cm_createCookie(cookieName, cm_arrayAsString(cookievalue), 60);
            } else {
                cm_createCookie(cookieName, cookievalue + item, 60);
            }
        };

        cookiemonster.splice = function (cookieName, index, numberToRemove) {
            var cookievalue = cookiemonster.get(cookieName);
            if (cookievalue instanceof Array) {
                cookievalue.splice(index, numberToRemove);
                cm_createCookie(cookieName, cm_arrayAsString(cookievalue), 60);
            }
        };

        cookiemonster.get = function (cookieName) {
            var cstring = cm_readCookie(cookieName);
            if (cstring.indexOf('<#&type=ArrayVals>') != -1) {

                var carray = cstring.split(',');

                for (var i = 0; i < carray.length; i++) {
                        carray[i] = cm_dirty(carray[i]);
                }

                if (carray[0] == '<#&type=ArrayVals>') {
                    carray.splice(0, 1);
                }

                return carray;

            } else {

                return cm_dirty(cstring);
            }
        };

        cookiemonster.set = function (cookieName, value) {
            if (value instanceof Array) {
                cm_createCookie(cookieName, cm_arrayAsString(value), 60);
            }
            else { cm_createCookie(cookieName, cm_clean(value), 60); }

        };

        cookiemonster.eraseCookie = function (name) {
            cm_createCookie(name, "", -1);
        };

        function cm_replaceAll(str, find, replace) {

            return str.replace(new RegExp(find, 'g'), replace);
        };

        function cm_clean(ret) {
            ret = cm_replaceAll(ret.toString(), ',', '&#44');
            ret = cm_replaceAll(ret.toString(), ';', '&#59');
            return ret;
        };
        function cm_dirty(ret) {
            ret = cm_replaceAll(ret, '&#44', ',');
            ret = cm_replaceAll(ret, '&#59', ';');
            return ret;
        };

        function cm_createCookie(name, value, days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            } else var expires = "";
            document.cookie = name + "=" + value + expires + "; path=/";
        };

        function cm_readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        };

        function cm_arrayAsString(array) {
            var ret = "<#&type=ArrayVals>"; //escapes, tells that string is array
            for (var i = 0; i < array.length; i++) {
                    ret = ret + "," + cm_clean(array[i]);
            }
            return ret;
        };

        // remove item

        cookiemonster.remove = function (cookieName, item) {
            var cookievalue = cookiemonster.get(cookieName);
            //Find the item
            for( var i = 0; i < cookievalue.length; i++) {
                if ( cookievalue[i] == item) { 
                    cookievalue.splice(i, 1);
                }
            }
            cm_createCookie(cookieName, cm_arrayAsString(cookievalue), 60);
        };

        function cm_cookieExist(cookieName, item) {
            var cookievalue = cookiemonster.get(cookieName);
            //Find the item
            for( var i = 0; i < cookievalue.length; i++) {
                if ( cookievalue[i] == item) { 
                    return true;
                }
            }
            return false;
        };

        if(cm_readCookie("wish") == null){
        cookiemonster.set("wish",[]);
        }

        if(cm_readCookie("basket") == null){
            cookiemonster.set("basket",[]);
        }

        function bookId(i){
            cookiemonster.set("bookid", i);
        }

        function toBookDetail(){
            window.open('bookdetail.html', '_blank');
        }

        function addWish(i){
            if(cm_cookieExist("wish", i)){
                cookiemonster.remove("wish", i);
                var wish = cookiemonster.get("wish");
                count_wish = wish.length;
                wish_count(count_wish);
            }
            else{
                cookiemonster.append("wish", i);
                var wish = cookiemonster.get("wish");
                count_wish = wish.length;
                wish_count(count_wish);
            }
           
        }

        function addBasket(i){
            if(!cm_cookieExist("basket", i)){
                cookiemonster.append("basket", i);
            }
        }

        function delAllWish(){
            cookiemonster.set("wish",[]);
        }

        /*function delWish(n){
            cookiemonster.remove("wish", n);
        }*/

        function delAllBasket(){
            cookiemonster.set("basket",[]);
        }

        function delBasket(n){
            cookiemonster.remove("basket", n);
        }

        function setHeart(n){
            cookiemonster.set("heart", n);
        }

        function search(n){
            cookiemonster.set("search", n);
            location.href= "result.html";
        }

        function wish_count(count_wish){
            if(count_wish == 0){
                document.getElementById('box_wish').removeChild(document.getElementById('wish'));
                document.getElementById('box_wish').innerHTML += ' <button class="btn btn-success" id="wish"><img src="https://www.mebmarket.com/web/dist/assets/images/ic-wishlist-2-30px.png"width="24px"></button>';
            }
            else{
                document.getElementById('box_wish').removeChild(document.getElementById('wish'));
                document.getElementById('box_wish').innerHTML += ' <button class="btn btn-success" id="wish"><img src="https://www.mebmarket.com/web/dist/assets/images/ic-wishlist-2-30px.png"width="24px">'+count_wish+'</button>';
            }
        }