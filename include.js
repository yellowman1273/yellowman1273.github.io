/* insert head.html's tags in file where script is imported */

(function () {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open('GET', '/head.html', true);
    xmlHttpRequest.onreadystatechange = () => {
        if (xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200) {
            var head = document.getElementsByTagName('head')[0];
            head.innerHTML = xmlHttpRequest.responseText + head.innerHTML;
        }
    };
    xmlHttpRequest.send();
})();