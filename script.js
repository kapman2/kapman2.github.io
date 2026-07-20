const character = document.getElementById('character');
let isJumping = false;

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !isJumping) {
        jump();
    }
});

function jump() {
    isJumping = true;
    let jumpHeight = 0;
    const maxHeight = 200;
    const jumpSpeed = 10;

    const jumpInterval = setInterval(() => {
        if (jumpHeight < maxHeight) {
            jumpHeight += jumpSpeed;
            character.style.bottom = (50 + jumpHeight) + 'px';
        } else {
            clearInterval(jumpInterval);
            fallDown();
        }
    }, 20);
}

function fallDown() {
    let currentHeight = 200;
    const fallSpeed = 10;

    const fallInterval = setInterval(() => {
        if (currentHeight > 0) {
            currentHeight -= fallSpeed;
            character.style.bottom = (50 + currentHeight) + 'px';
        } else {
            clearInterval(fallInterval);
            isJumping = false;
        }
    }, 20);
}