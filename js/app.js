const openSearch = () =>{
    const icon = document.getElementById("myOverlay");
    const insert = document.querySelector('.insert');
    insert.addEventListener('click', () => {
        icon.style.display = "block";
    })
}
openSearch();

const closeSearch = () =>{
    const icon = document.getElementById("myOverlay");
    const close = document.querySelector('.closebtn');
    close.addEventListener('click', () => {
        icon.style.display = "none";
    })
}
closeSearch();

const navSlide = () =>{
    const bars = document.querySelector('.fa-bars');
    const web = document.querySelector('.web');

    bars.addEventListener('click', () => {
        web.classList.toggle('web-active');
    });
}
navSlide();


