let btn = document.getElementById('favBtn');

let favBtnActive = function () {
    btn.classList.remove('deactive');
    btn.classList.add('active');
}

let favBtnDeactive = function () {
    btn.classList.remove('active');
    btn.classList.add('deactive');
}

btn.addEventListener('click', function () {
    if (btn.classList.contains('active')) {
        favBtnDeactive();
    } else {
        favBtnActive();
    }
});
