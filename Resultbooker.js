function resBooker(data, eid) {
    var row_id;
    for (var i = 0; i < data.length; i++) {
        if (i == 0) {
            row_id = eid+'r1';
        }
        else if (i == 5) {
            row_id = eid+'r2';
        }
        else if (i == 10) {
            row_id = eid+'r3';
        }
        else if (i == 15) {
            row_id = eid+'r4';
        }
        else if (i == 20) {
            row_id = eid+'r5';
        }
        else if (i == 25) {
            row_id = eid+'r6';
        }
        else if (i == 30) {
            row_id = eid+'r7';
        }
        else if (i == 35) {
            row_id = eid+'r8';
        }
        else if (i == 40) {
            row_id = eid+'r9';
        }
        else if (i == 45) {
            row_id = eid+'r10';
        }
        else if (i == 50) {
            row_id = eid+'r11';
        }
        else if (i == 55) {
            row_id = eid+'r12';
        }

            document.getElementById(row_id).innerHTML += '<div class="col-sm-5ths" >';
            document.getElementById(row_id).innerHTML += '<div class="book" id="'+eid+'book' + i + '">';
            document.getElementById(eid + 'book' + i).innerHTML += ' <div class="book_img"><img class="img_book_list lazy"src="' + data[i].img + '"></div>'
            document.getElementById(eid + 'book' + i).innerHTML += '<div class="info" id="'+eid+'info' + i + '">';
            if(data[i].id == 99){
                document.getElementById(eid + 'info' + i).innerHTML += '<div class="name_book" style="cursor:pointer;"><h6 style="margin-top: 0.4em; font-weight: 700; font-family: Helvetica,Thonburi,Tahoma,sans-serif;">' + data[i].title + '</h6></div>'; 
            }
            else{
               document.getElementById(eid + 'info' + i).innerHTML += '<div class="name_book" style="cursor:pointer;"><h6 onclick="bookId('+data[i].id+');toBookDetail();"style="margin-top: 0.4em; font-weight: 700; font-family: Helvetica,Thonburi,Tahoma,sans-serif;">' + data[i].title + '</h6></div>'; 
            }
            
            document.getElementById(eid + 'info' + i).innerHTML += '<div class="meta" id="'+eid+'meta' + i + '">';
            document.getElementById(eid + 'meta' + i).innerHTML += '<a style="margin-top: 0em; font-size: 12px;">' + data[i].author + '</a>';
            document.getElementById(eid + 'meta' + i).innerHTML += '<a style="margin-left: 5px; margin-top: 0em; font-size: 12px;">' + data[i].publisher + '</a>';
            document.getElementById(eid + 'meta' + i).innerHTML += '<a style="margin-left: 5px; margin-top: 0em; font-size: 12px;"><p>' + data[i].category + '</p></a>';
            document.getElementById(eid + 'info' + i).innerHTML += '</div>';
            document.getElementById(eid + 'info' + i).innerHTML += '<div class="btn_book_list" id="'+eid+'btn_book_list' + i + '">';
            document.getElementById(eid + 'btn_book_list' + i).innerHTML += '<table style="width:90%;" id="'+eid+'table' + i + '" >';
            document.getElementById(eid + 'table' + i).innerHTML += '<tbody>';
            document.getElementById(eid + 'table' + i).innerHTML += '<tr style="width:100%;" >';
            document.getElementById(eid + 'table' + i).innerHTML += '<td>';
            for (var j = 0; j < 5; j++) {
                document.getElementById(eid + 'table' + i).innerHTML += '<img class="img_rating_book_list"src="pho/ic-rating-active@2x.png"  style="width: 10px; margin-top: 1em; margin-left: 1px;">';
            }
            document.getElementById(eid + 'table' + i).innerHTML += '<div class="text_rating_book_list" style="font-size:12px;color: #5A5A5A;">' + data[i].rating + ' Rating</div>';
            document.getElementById(eid + 'table' + i).innerHTML += '</td>';
            if(data[i].id == 99){
                document.getElementById(eid + 'table' + i).innerHTML += '<td><input type="button" series-id="" price="349.00" class="buy_button" value="฿ ' + data[i].price + '"  style="position: relative; bottom: 2em;"></td>';
            }
            else{
            document.getElementById(eid + 'table' + i).innerHTML += '<td><input type="button" series-id="" price="349.00" class="buy_button" onclick="addBook_w(' + data[i].id + ')" value="฿ ' + data[i].price + '"  style="position: relative; bottom: 2em;"></td>';}
            document.getElementById(eid + 'table' + i).innerHTML += '</tr>';
            document.getElementById(eid + 'table' + i).innerHTML += '</tbody>';
            document.getElementById(eid + 'btn_book_list' + i).innerHTML += '</table>';
            document.getElementById(eid + 'info' + i).innerHTML += '</div>';
            document.getElementById(eid + 'book' + i).innerHTML += '</div>';
            document.getElementById(row_id).innerHTML += '</div>';
            document.getElementById(row_id).innerHTML += '</div>';
    }
}