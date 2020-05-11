import 'nodelist-foreach-polyfill'; //https://www.npmjs.com/package/nodelist-foreach-polyfill
import elementClosest from'element-closest'; //https://www.npmjs.com/ С НИМ ВОТ ТАК!!!
elementClosest(window);
import 'formdata-polyfill';
import "regenerator-runtime/runtime.js";
import 'element-remove';
import 'url-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import 'whatwg-fetch';
import 'scroll-behavior-polyfill';
import '@babel/polyfill'; //https://babeljs.io/docs/en/babel-polyfill


import countTimer from './modules/countTimer';
import toggle from './modules/toggle';
import togglePopUp from './modules/togglePopUp';
import smoothScroll from './modules/smoothScroll';
import tabs from './modules/tabs';
import moveSlider from './modules/slider';
import showDataPhot from './modules/showDataPhot';
import calculator from './modules/calc';
import sendForm from './modules/sendForm';


//Счетчик
countTimer('30 September 2020 16:51');
//МЕНЮ
toggle();
//popup
togglePopUp();
//Scroll
smoothScroll ();
//TABS 
tabs();
// Slider
moveSlider();
// Наша команда, замена фоток (отрабатываем делегирование + dataset)
showDataPhot();
// Калькулятор (отрабатываем регулярки, на ограничение ввода)
calculator();
// Отправка формы
sendForm();

