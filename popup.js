function setResult(data) {
    document.querySelector('#data').value = data.join(", ");
}

document.querySelector('#data').onclick = function (e) {
    e.target.select();
    e.target.setSelectionRange(0, 10000000);
    document.execCommand("copy");
}

chrome.tabs.query({ active: true }, function (tabs) {
    var tab = tabs[0];
    tabTitle = tab.title;
    chrome.tabs.executeScript(tab.id, {
        file: 'fetch_keywords.js'
    }, setResult);
});

