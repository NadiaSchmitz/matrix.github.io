$("#new_number").on("click", function() {
    var i = 1;
    var new_number;
    var sum_row_1 = 0;
    var sum_row_2 = 0;
    var sum_row_3 = 0;
    var sum_row_4 = 0;
    var sum_column_1 = 0;
    var sum_column_2 = 0;
    var sum_column_3 = 0;
    var sum_column_4 = 0;
    var sum_diagonal_1 = 0;
    var sum_diagonal_2 = 0;
    
    while (i <= 16) {
        new_number = Math.round(Math.random() * 9,5);
        $("." + i).html(new_number)
        i++;
    }

    for (row_i = 1; row_i <= 4; row_i++) {
        sum_row_1 = sum_row_1 + +$("." + row_i).html()
    }
    $(".matrix_block_row_1").html(sum_row_1);

    for (row_i = 5; row_i <= 8; row_i++) {
        sum_row_2 = sum_row_2 + +$("." + row_i).html()
    }
    $(".matrix_block_row_2").html(sum_row_2);

    for (row_i = 9; row_i <= 12; row_i++) {
        sum_row_3 = sum_row_3 + +$("." + row_i).html()
    }
    $(".matrix_block_row_3").html(sum_row_3);

    for (row_i = 13; row_i <= 16; row_i++) {
        sum_row_4 = sum_row_4 + +$("." + row_i).html()
    }
    $(".matrix_block_row_4").html(sum_row_4);

    for (col_i = 1; col_i <= 16; col_i = col_i + 4) {
        sum_column_1 = sum_column_1 + +$("." + col_i).html()
    }
    $(".matrix_block_column_1").html(sum_column_1);

    for (col_i = 2; col_i <= 16; col_i = col_i + 4) {
        sum_column_2 = sum_column_2 + +$("." + col_i).html()
    }
    $(".matrix_block_column_2").html(sum_column_2);

    for (col_i = 3; col_i <= 16; col_i = col_i + 4) {
        sum_column_3 = sum_column_3 + +$("." + col_i).html()
    }
    $(".matrix_block_column_3").html(sum_column_3);

    for (col_i = 4; col_i <= 16; col_i = col_i + 4) {
        sum_column_4 = sum_column_4 + +$("." + col_i).html()
    }
    $(".matrix_block_column_4").html(sum_column_4);

    sum_diagonal_1 = +$(".4").html() + +$(".7").html() + +$(".10").html() + +$(".13").html()
    $(".diagonal_1").html(sum_diagonal_1);

    sum_diagonal_2 = +$(".1").html() + +$(".6").html() + +$(".11").html() + +$(".16").html()
    $(".diagonal_2").html(sum_diagonal_2);




})