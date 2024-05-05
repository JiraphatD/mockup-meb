let requestURL = 'books2.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        book(JSON.parse(request.responseText));
        bookLister(JSON.parse(request.responseText));
    }
};
request.open("GET", requestURL, true);
request.send();

function book(data) {
    var row_id;
    for (var i = 0; i < 60; i++) {

        if (i == 0) {
            row_id = 'new_book';
        }
        else if (i == 5) {
            row_id = 'book_cartoon';
        }
        else if (i == 10) {
            row_id = 'book_light_novel';
        }
        else if (i == 15) {
            row_id = 'book_fantasy';
        }
        else if (i == 20) {
            row_id = 'book_good_sell';
        }
        else if (i == 25) {
            row_id = 'book_good_sell_cartoon';
        }
        else if (i == 30) {
            row_id = 'good_sell_novel';
        }
        else if (i == 35) {
            row_id = 'good_sell_fantasy';
        }
        else if (i == 40) {
            row_id = 'book_interested';
        }
        else if (i == 45) {
            row_id = 'book_promotion';
        }
        else if (i == 50) {
            row_id = 'book_free';
        }
        else if (i == 55) {
            row_id = 'book_popular';
        }

        if (i < 20) {
            document.getElementById(row_id).innerHTML += '<div class="col-sm-5ths" >';
            document.getElementById(row_id).innerHTML += '<div class="book" id="book' + i + '">';
            document.getElementById('book' + i).innerHTML += ' <div class="book_img"><img class="img_book_list lazy"src="' + data[i].img + '"></div>'
            document.getElementById('book' + i).innerHTML += '<div class="info" id="info' + i + '">';
            document.getElementById('info' + i).innerHTML += '<div class="name_book" style="cursor:pointer;"><h6 onclick="bookId('+i+');toBookDetail();"style="margin-top: 0.4em; font-weight: 700;">' + data[i].title + '</h6></div>';
            document.getElementById('info' + i).innerHTML += '<div class="meta" id="meta' + i + '">';
            document.getElementById('meta' + i).innerHTML += '<a style="margin-top: 0em; font-size: 12px;">' + data[i].author + '</a>';
            document.getElementById('meta' + i).innerHTML += '<a style="margin-left: 5px; margin-top: 0em; font-size: 12px;">' + data[i].publisher + '</a>';
            document.getElementById('meta' + i).innerHTML += '<a style="margin-left: 5px; margin-top: 0em; font-size: 12px;"><p>' + data[i].category + '</p></a>';
            document.getElementById('info' + i).innerHTML += '</div>';
            document.getElementById('info' + i).innerHTML += '<div class="btn_book_list" id="btn_book_list' + i + '">';
            document.getElementById('btn_book_list' + i).innerHTML += '<table style="width:90%;" id="table' + i + '" >';
            document.getElementById('table' + i).innerHTML += '<tbody>';
            document.getElementById('table' + i).innerHTML += '<tr style="width:100%;" >';
            document.getElementById('table' + i).innerHTML += '<td>';
            for (var j = 0; j < 5; j++) {
                document.getElementById('table' + i).innerHTML += '<img class="img_rating_book_list" src="pho/ic-rating-active@2x.png"  style="width: 10px; margin-top: 1em; margin-left: 1px;">';
            }
            document.getElementById('table' + i).innerHTML += '<div class="text_rating_book_list" style="font-size:12px;color: #5A5A5A;">' + data[i].rating + ' Rating</div>';
            document.getElementById('table' + i).innerHTML += '</td>';
            document.getElementById('table' + i).innerHTML += '<td><input type="button" series-id="" price="349.00" class="buy_button" onclick="addBook(' + i + ')" value="฿ ' + data[i].price + '"  style="position: relative; bottom: 2em;"></td>';
            document.getElementById('table' + i).innerHTML += '</tr>';
            document.getElementById('table' + i).innerHTML += '</tbody>';
            document.getElementById('btn_book_list' + i).innerHTML += '</table>';
            document.getElementById('info' + i).innerHTML += '</div>';
            document.getElementById('book' + i).innerHTML += '</div>';
            document.getElementById(row_id).innerHTML += '</div>';
            document.getElementById(row_id).innerHTML += '</div>';
        }
        else {
            document.getElementById(row_id).innerHTML += '<div class="col-sm-5ths" >';
            document.getElementById(row_id).innerHTML += '<div class="book" id="book' + i + '">';
            document.getElementById('book' + i).innerHTML += ' <div class="book_img"><img class="img_book_list lazy"src="' + data[i].img + '"></div>'
            document.getElementById('book' + i).innerHTML += '<div class="info" id="info' + i + '">';
            document.getElementById('info' + i).innerHTML += '<div class="name_book"><h6 style="margin-top: 0.4em; font-weight: 700;">' + data[i].title + '</h6></div>';
            document.getElementById('info' + i).innerHTML += '<div class="meta" id="meta' + i + '">';
            document.getElementById('meta' + i).innerHTML += '<a style="margin-top: 0em; font-size: 12px;">' + data[i].author + '</a>';
            document.getElementById('meta' + i).innerHTML += '<a style="margin-left: 5px; margin-top: 0em; font-size: 12px;">' + data[i].publisher + '</a>';
            document.getElementById('meta' + i).innerHTML += '<a style="margin-left: 5px; margin-top: 0em; font-size: 12px;"><p>' + data[i].category + '</p></a>';
            document.getElementById('info' + i).innerHTML += '</div>';
            document.getElementById('info' + i).innerHTML += '<div class="btn_book_list" id="btn_book_list' + i + '">';
            document.getElementById('btn_book_list' + i).innerHTML += '<table style="width:90%;" id="table' + i + '" >';
            document.getElementById('table' + i).innerHTML += '<tbody>';
            document.getElementById('table' + i).innerHTML += '<tr style="width:100%;" >';
            document.getElementById('table' + i).innerHTML += '<td>';
            for (var j = 0; j < 5; j++) {
                document.getElementById('table' + i).innerHTML += '<img class="img_rating_book_list"src="pho/ic-rating-active@2x.png" title="Ratings : 0.00/5" style="width: 10px; margin-top: 1em; margin-left: 1px;">';
            }
            document.getElementById('table' + i).innerHTML += '<div class="text_rating_book_list" style="font-size:12px;color: #5A5A5A;">' + data[i].rating + ' Rating</div>';
            document.getElementById('table' + i).innerHTML += '</td>';
            document.getElementById('table' + i).innerHTML += '<td><input type="button" series-id="" price="349.00" class="buy_button" value="฿ ' + data[i].price + '"  style="position: relative; bottom: 2em;"></td>';
            document.getElementById('table' + i).innerHTML += '</tr>';
            document.getElementById('table' + i).innerHTML += '</tbody>';
            document.getElementById('btn_book_list' + i).innerHTML += '</table>';
            document.getElementById('info' + i).innerHTML += '</div>';
            document.getElementById('book' + i).innerHTML += '</div>';
            document.getElementById(row_id).innerHTML += '</div>';
            document.getElementById(row_id).innerHTML += '</div>';
        }
    }
}