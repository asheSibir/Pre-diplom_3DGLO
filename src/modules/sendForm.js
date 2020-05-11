
const sendForm = () => {
    //SPINNER
    const preloader = () => {
        return `
        <div id="loader" class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>`;
    }; 
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successsMessage = 'Спасибо! Мы скоро с Вами свяжемся!';
        
    const forms = document.querySelectorAll('form'),
        form = document.getElementById('form1'),
        formEnd = document.getElementById('form2'),
        formPopUp = document.getElementById('form3'),
        statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem; color: #19b5fe';
        
// Отправка на сервер
    
    const showError = (status) =>{
        if (status !== 200){
            statusMessage.textContent = errorMessage;
        }
    };
    const hideMessage = () => {
        statusMessage.style.display = "none";
    };
    const successFin = () => {
        const loader = document.getElementById('loader'),
        formPopUp = document.querySelector('.popup-content');
        loader.style.display = 'none';
        formPopUp.style.display = 'none';
        statusMessage.textContent = successsMessage;
        if (statusMessage.textContent === successsMessage){
            setTimeout(hideMessage, 5000);
        }
    };
    
    
    forms.forEach((form) => {
        form.addEventListener('submit', (event)=> {
            event.preventDefault(); //не отправляем пустую форму
            form.appendChild(statusMessage); // добавляем информацию о загрузке для user
            statusMessage.textContent = loadMessage; // "Загрузка"
            form.insertAdjacentHTML('beforeend', preloader()); //спиннер
            const formData = new FormData(form); //получаем объект для отправки
            let body = {};
            for (let val of formData.entries()) {
                body[val[0]] = val[1];
            }
            const postData = (body) => { 
                return fetch('server.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body), 
                    credentials: 'include'
                }); 
            };
            
            postData(body)
                .then((response) => {
                    if(response.status !== 200){
                        throw new Error(response.statusText);
                    }
                    return response.body;                    
                })
                .then((data) => {
                    successFin();
                })
                .catch((err) => {
                    console.warn(err);
                    statusMessage.textContent = errorMessage;
                    setTimeout(() => {
                        hideMessage();
                        document.getElementById('loader').style.display = "none";
                    }, 5000);
                });
            
            const inputs = [form.querySelectorAll('input')];
            inputs[0].forEach((elem) => {
                elem.value = '';
            });
        });
    });    

    // ВАЛИДАЦИЯ ИНПУТОВ
    const validate = (block) => {
        const fullForm = new Set(block.elements),
            chechedForm = [];
            fullForm.forEach((elem) => {
            chechedForm.push(elem);
        });
        const inputs = chechedForm.filter(elem => elem.tagName === 'INPUT');
        inputs.forEach((input) => {
            if (input.name === 'user_name'){
                if (/^[А-ЯЁ][а-яё]*$/gi.test(input.value)){
                    return;
                } else {input.value = input.value.slice(0,-1);}
            }
            if (input.name === 'user_email'){
                if (/^[a-z\d@\._]*$/gi.test(input.value)){
                    return;
                } else {input.value = input.value.slice(0,-1);}
            }
            if (input.name === 'user_phone'){
                if(/\D/g.test(input.value)){
                    input.value = input.value.slice(0,-1);
                }
            }
            if (input.name === 'user_message'){
                if (/^[А-ЯЁа-яё\.,\?!_\-\(\)'":;\s]*$/gi.test(input.value)){
                    return;
                } else {input.value = input.value.slice(0,-1);}
            }

        });
    }; 

    forms.forEach((form) => {
        form.addEventListener('keyup', (event)=> {
            setTimeout(validate(form), 2000);
        });
    });
    forms.forEach((form) => {
        form.addEventListener('input', (event)=> {
            setTimeout(validate(form), 2000);
        });
    });
 
};
export default sendForm;

