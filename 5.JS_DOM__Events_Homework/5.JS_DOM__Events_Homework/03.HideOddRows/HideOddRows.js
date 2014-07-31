function hideOddRows() {
    //var rows = document.body.querySelectorAll('tr');
    //var rowsCount = rows.length;

    //for (var i = 0; i < rowsCount; i++) {
    //    document.getElementsByTagName("tr")[i].setAttribute("id", i);
    //}

    //for (var i = 0; i < rowsCount; i++) {
    //    if ((i+1) % 2 !== 0) {
    //        document.getElementById(i).style.display = 'none';
    //    } 
    //}

    var rows = document.body.querySelectorAll('td');
    var rowsCount = rows.length;

    for (var i = 0; i < rowsCount; i++) {

        if ((i + 1) % 2 !== 0) {
            var parent = rows[i].parentNode;
            parent.removeChild(rows[i]);
        }
    }
}