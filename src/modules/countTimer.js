
function countTimer (deadline){
    const timerHours = document.getElementById("timer-hours"),
        timerMinutes = document.getElementById("timer-minutes"),
        timerSeconds = document.getElementById("timer-seconds");
    let dayMs = 185400;
 
    function getTimeRemaining (){
        let dateNow = new Date().getTime(),
            dateStop = new Date(deadline).getTime(),
            timeRemain = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemain % 60), 
            minutes = (Math.floor(timeRemain / 60) % 60),
            hours = (Math.floor(timeRemain / 60 / 60) % 60); 
            return{timeRemain, hours, minutes, seconds};
    }
    setInterval (function(){
        let timer = getTimeRemaining();

        const updNumberView =(elem)=>{
            if (elem < 10){
                return ('0' + elem);
            } else {
                return elem;
            }
        }
        if (timer.seconds > 0) {
            
            timerSeconds.textContent = updNumberView(timer.seconds); 
            timerMinutes.textContent = updNumberView(timer.minutes);  
            timerHours.textContent = updNumberView(timer.hours);
        } else {
            if (timer.seconds <= 0){
                let finSec = 59,
                    finMin = 59,
                    finHour = 23;  
                dayMs-= 1;
                timerSeconds.textContent = updNumberView(Math.floor(dayMs % 60)); 
                timerMinutes.textContent = updNumberView(Math.floor((dayMs / 60 ) % 60));
                timerHours.textContent = updNumberView(Math.floor((dayMs / 60 / 60) % 60));
            }
        }

    }, 1000);   
}
export default countTimer;