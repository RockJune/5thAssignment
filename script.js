function bgChange() {
    document.body.style.backgroundColor =
    `rgb(${200-Math.ceil(Math.random()*255)},
         ${200-Math.ceil(Math.random()*255)},
         ${200-Math.ceil(Math.random()*255)})`;
}