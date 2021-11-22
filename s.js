fetch('a.json').then(response => {
    response.json().then(result => {
        Add(result.p1);
        Add(result.p2);
        Add(result.base64);
    });
});
function Add(url) {
    const pic = new Image();
    pic.src = url;
    document.querySelector('.art').append(pic);
}