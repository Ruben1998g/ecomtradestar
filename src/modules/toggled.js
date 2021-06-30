//Модуль Toggled
const toggled = function(trigger, modalCalc){
    let open = document.getElementById(trigger);
    let calc = document.querySelector(modalCalc);

    //Cлущает Esc
    const onBeginListenEsc = (e)=>{
        const Ecode = e.keyCode;
        if(Ecode == 27){
            calc.classList.remove('show');
            window.removeEventListener('keyup', onBeginListenEsc);
        }
    }

    //Слущает Trigger
    open.addEventListener('click', (e)=>{
        e.preventDefault();
        calc.classList.add('show');

        window.addEventListener('keyup', onBeginListenEsc)
    });

    //Слущает Overlay
    calc.addEventListener('click',(e)=>{
        
        if(e.target.classList.contains('calc')){
            calc.classList.remove('show');
        }
        
    });
}


export default toggled;