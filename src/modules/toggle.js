const toggle = () => {
    const body = document.querySelector('body'),
        menuBlock = body.querySelector('main'),
        btnMenu = body.querySelector('.menu'),
        menu = body.querySelector('menu'),
        closeBtn = body.querySelector('.close-btn'),
        menuItems = menu.querySelectorAll('a');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('a') && target.closest('menu') || target.closest('.menu')){
            handlerMenu();  
        } else if (!target.closest('menu')){
            menu.classList.remove('active-menu');
        }
        
    });        
};
export default toggle;