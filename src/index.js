import css from './css/index.css';
import toggled from './modules/toggled.js';
import calc from './modules/calc.js';

document.addEventListener('DOMContentLoaded', ()=>{
    
    toggled('buttom-open','.calc');
    calc('.calc__list','.calc__out-text');
});