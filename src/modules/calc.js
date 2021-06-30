//Модуль калькулятор
const calc = () =>{
    const calc  = document.querySelector('.calc__list');
    let output = document.querySelector('.calc__out-text');

    //Первичная инициализация
    let resolve = ['0'];
    let resolveBool = true;

    //Выводит результат (ответ) на экран
    const calculate = () =>{
        let result = '';
            resolve.forEach((item)=>{
                result+=item;
            });
            result = eval(result);
            resolve = ['0'];
            resolveBool = true;
            output.textContent = result;
        };
    
    //Выводит результат (ввод) на экран
    const outputResolve = ()=>{
        let outValue = '';
        resolve.forEach((item)=>{
            outValue+=item;
        });
        output.textContent = outValue;
    }

    const outInput = (value) =>{
        if(value != '='){
            //В будущем можно доработать
            if((value == 'AC') || (value == '+/-') || (value == '%') || (value == ',')){
                //Очищает калькулятор
                resolve = ['0'];
                resolveBool = true;
                outputResolve(resolve);
            }else{
                if(resolve.length == 1 && resolveBool){
                    //Повторное использование калькулятора
                    resolve.splice(0,1);
                    resolveBool = false;
                }
                //Учитывает особенности математики(на 0 делить нельзя)
                if(((resolve.length == 0) && (value == '/'))||((resolve.length == 0) && (value == '*'))){

                }else{
                    resolve.push(value);
                    outputResolve(resolve);
                }
            }
        }else{
            //Считает результат
            calculate();
        }
        
    }

    //Следит за кнопками калькулятора
    calc.addEventListener("click",(e)=>{
        if((e.target.nodeName == "LI") || (e.target.nodeName == "SPAN")){
            if(e.target.nodeName == "LI"){
                const trigger = e.target.dataset.value;
                outInput(trigger);
            }else{
                const trigger = e.target.parentElement.dataset.value;
                outInput(trigger);
            }
            
        }
    });
    
    
}

export default calc;