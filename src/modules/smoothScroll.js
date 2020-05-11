
const smoothScroll = () => {
    const linkOfLi = document.querySelectorAll('li>a'),
        btnDown = document.querySelector('[href="#service-block"]');

    const scrolling = (element) =>{
        const idLink = element.getAttribute('href');
        document.querySelector(idLink).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    btnDown.addEventListener('click', (e) =>{
        e.preventDefault();
        scrolling(btnDown);
    });

    linkOfLi.forEach((li) => {
        li.addEventListener('click', (e) =>{
            e.preventDefault();
            scrolling(li);
        });
    });    

};
export default smoothScroll;