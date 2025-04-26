const tryForFreebtn = document.getElementById('tryForFreebtn');

//function to scroll to liked section

function scrollTolikedprd() {
    const likedprd = document.getElementById('prd-liked');
    likedprd.scrollIntoView({ behavior: 'smooth' });
}

//event Listener for "try for free" btn

tryForFreebtn.addEventListener('click', scrollTolikedprd);