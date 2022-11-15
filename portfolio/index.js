function typeWriter(element) {
    const array = element.innerHTML.split('');
    element.innerHTML = '';

    array.forEach((value, i) => {
        setTimeout(function() {
            element.innerHTML += value;
        }, 300 * i);
    });
}

typeWriter(document.querySelector(".name-home"));