// Калькулятор (отрабатываем регулярки, на ограничение ввода)
const calculator = () => {
    const checkData = () => { // ПРОВЕРКА ВХОДНЫХ ДАННЫХ
        const calcBlock = document.querySelector('.calc-block');
        calcBlock.addEventListener('input', (event) =>{
            let target = event.target;
            target = target.closest('.calc-item');
            if (!target.classList.contains('calc-type')){
                if (target.value.match(/\d/g) === null || target.value.match(/[^\d]/g)){
                    target.value = '';
                }
            }
        });
    
    };
    checkData();
    const calc = (price = 100) => { // РАБОТА САМОГО КАЛЬКУЛЯТОРА
        const calcBlock = document.querySelector('.calc-block'),
            calcType = calcBlock.querySelector('.calc-type'),
            calcSquare = calcBlock.querySelector('.calc-square'),
            calcCount = calcBlock.querySelector('.calc-count'),
            calcDay = calcBlock.querySelector('.calc-day'),
            totalValue = document.getElementById('total');
        
            const countSum = () => {
                let total = 0,
                countValue = 1,
                dayValue = 1;
                const typeValue = calcType.options[calcType.selectedIndex].value,
                    squareValue = +calcSquare.value;
    
                if (calcCount.value > 1){
                    countValue += (calcCount.value - 1) / 10;
                }
                if (calcDay.value !== '' && calcDay.value <= 5){
                    dayValue += 1;  
                } else if (calcDay.value !== '' && calcDay.value < 10) {dayValue += 0.5;} 
    
                if (typeValue && squareValue){
                    total = price * typeValue * squareValue * countValue * dayValue;
                } 
                
                totalValue.textContent = Math.ceil(total);
                
            };
             calcBlock.addEventListener('change', (event) => {
                let target = event.target;
                target = target.closest('.calc-item');
                if (target){countSum ();}
            });
    };
    calc(100);
    const increasTotal = () => { // Анимация калькулятора
        const calcBlock = document.querySelector('.calc-block'),
            totalValue = document.getElementById('total');
        let target, 
            step = 0;
        
        const showRes = () => {
            target = totalValue.textContent;
            totalValue.innerText = 0;
            const increase = () => {
                totalValue.innerHTML = 0;
                if (step < target){
                    if (target < 1000){
                        step += 1; 
                    } else {
                        step += Math.ceil(target/100);
                    }
                } else if (step > target){
                    step -= step;
                }
                totalValue.innerHTML = step;
            };
            setInterval (increase, 0.001);
        };
        calcBlock.addEventListener('change', showRes);
    
    };
    increasTotal();
};

export default calculator;

