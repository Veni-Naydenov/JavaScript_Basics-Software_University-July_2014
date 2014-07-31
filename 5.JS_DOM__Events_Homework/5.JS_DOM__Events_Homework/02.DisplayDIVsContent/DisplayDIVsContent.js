(function divContendAsList() {
    var divs = document.body.getElementsByTagName('div');
    var divsCount = divs.length;
    var ul = document.getElementById('result');

    for (var i = 0; i < divsCount; i++) {
        var list = document.createElement('li');
        list.innerText = divs[i].innerText;
        if (list.innerText !== '') {
            ul.appendChild(list);
            document.body.appendChild(ul);
        }
    }
})();