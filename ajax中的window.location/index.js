var result,
    xhr = new XMLHttpRequest();

xhr.open('GET', './books.json?_' + Math.random(), false);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
        result = JSON.parse(xhr.responseText);
        window.setTimeout(function () {
            window.location.href = result.url;
        }, 3000);
    }
};

xhr.send(null);
