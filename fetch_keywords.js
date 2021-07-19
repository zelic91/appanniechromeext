(function () {
    result = [];
    var elements = document.querySelectorAll(".search-index-row");
    for (var i = 0; i < elements.length; i++) {
        var text = elements[i].textContent;
        text = text.substring(text.indexOf(' ') + 1, text.length);
        result.push(text);
    }
    return result;
})();
