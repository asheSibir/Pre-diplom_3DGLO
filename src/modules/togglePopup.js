const togglePopUp =()=> {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        btnPopupClose = document.querySelector('.popup-close'),
        popupContent = popup.querySelector('.popup-content'),
        mainForm = popup.querySelector('.main-form');
        
    const makeForm = () => {
        let count = 0;
        let fullfil;
        
            let actForm = () => {
                fullfil = requestAnimationFrame(actForm);
                count += 1;
                if (count === 10){
                    mainForm.innerHTML = '';
                    mainForm.innerHTML = `<h3 style='color: #fff !important;'>Введите свои данные для связи с нами!</h3>`;
                }
                if (count > 10 && count <=45){
                    popupContent.style.height = `${count}rem`;
                }
                if (count === 45){
                    mainForm.innerHTML = `
                    <h3>Введите свои данные для связи с нами!</h3>
                <form id="form3" name="user_form">
                    <div>
                        <input type="text" class="form-name" id="form3-name" name="user_name" placeholder="Ваше имя"
                                    required>
                    </div>
                    <div>
                        <input type="tel" class="form-phone" id="form3-phone" name="user_phone"
                                    placeholder="Ваш номер телефона" required>
                    </div>
                    <div>
                        <input type="email" class="form-email" id="form3-email" name="user_email"
                                    placeholder="Ваш E-mail">
                    </div>
                    <button class="btn form-btn" type="submit">Оставить заявку!</button>
                </form>
                    `;
                }
            };
            setInterval(actForm, 1000);
            fullfil = requestAnimationFrame(actForm);
        
    };
    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            popup.style.display = 'block';
            popup.style.popupContent = '10%';
            let widthOfScreen = screen.availWidth;
            if (widthOfScreen > 768){
                mainForm.innerHTML = `
                <h2 style='color: #fff !important;'>Давайте познакомимся!</h2>
                `;
                setTimeout (makeForm, 1000);
            }
        });
    });
    
    const movePopup = () => {

        let initialTop = 10;
        let limitTop = 105;
        let popupGoesDown;
        let leavePopup = () => {
            let widthOfScreen = screen.availWidth;
            if (widthOfScreen > 768){
                popupGoesDown = requestAnimationFrame(leavePopup);
                initialTop += 2;
                if (initialTop < 102){
                popupContent.style.position = 'relative';
                popupContent.style.top = `${initialTop}%`;
                    if (initialTop === 100){
                        const basicView = () => {
                            popup.style.display = 'none';
                            popupContent.style.top = '10%'; 
                        }
                        setTimeout (basicView, 300);                            
                        cancelAnimationFrame(leavePopup);
                    }
                }   
            } else {
                popup.style.display = 'none';
                cancelAnimationFrame(leavePopup);
            } 
        };
        popupGoesDown = requestAnimationFrame(leavePopup);
    };

    popup.addEventListener('click', (event)=> {
        const target = event.target;
        if(popupContent){
            if (target === btnPopupClose || target.closest('.popup-content') === null){
                movePopup();
            } 
        }
    });

};
export default togglePopUp;