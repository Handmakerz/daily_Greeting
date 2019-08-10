
//Calendar button-----------

let calendar = document.getElementById('btn1').addEventListener('click', toggleDate);

function toggleDate () {

    let currentDay= document.getElementById('theDate');
    if(currentDay.style.display==='block'){
    currentDay.style.display= 'none';
    }else {
    currentDay.style.display='block';
    }
};

   //Clock
   const clockDisplay = (function(){
   let dateTime2 = new Date();
    
        let hours = dateTime2.getHours() < 10 ? "0" + dateTime2.getHours() : dateTime2.getHours();
        let minutes = dateTime2.getMinutes() < 10 ? "0" + dateTime2.getMinutes() : dateTime2.getMinutes();
        let seconds = dateTime2.getSeconds() < 10 ? "0" + dateTime2.getSeconds() : dateTime2.getSeconds();
        time = hours + ":" + minutes + ":" + seconds;

        let clockResults = document.getElementById("timeOutput");
    
        clockResults.innerHTML = time;
        setTimeout('clockDisplay()',1000);

        });

    clockDisplay();

//Select value button and listener

let selectValue = document.getElementById('selector').addEventListener('click', valueSelect);

//Select value function --------------------

function valueSelect (){
  let greetingTime = new Date().getHours();
   
//-----------------------------------------------
/*selector for value change */
let selectValue2 = document.getElementById('selector').value;
//---------------------------------------------
//hr design element
h.style.display ='inline-block';
//--------------------------------------------

//English greeting and time---------------

    if(selectValue2 === 'english' && greetingTime<11){
        greetingOutput.innerHTML='Good morning. |:-}';
        message.innerHTML='Define the Adventure. Enjoy the Adventure.';
        theDate.innerHTML = `${us_lang}`;

    }else if(selectValue2 === 'english' && greetingTime<14){
        greetingOutput.innerHTML='Good afternoon. How are you Wane? |:-}';
        message.innerHTML='Define the Adventure. Enjoy the Adventure.';
        theDate.innerHTML = `${us_lang}`;

    }else if(selectValue2 === 'english' && greetingTime<21){
        greetingOutput.innerHTML='Good day. How are you Wane? |:-}';
        message.innerHTML='Define the Adventure. Enjoy the Adventure.';
        theDate.innerHTML = `${us_lang}`;

    }else if (selectValue2 === 'english' && greetingTime<24){
        greetingOutput.innerHTML='Night time Wane |:-}';
        message.innerHTML='Define the Adventure. Enjoy the Adventure.';
        theDate.innerHTML = `${us_lang}`;
    }
    
  //Czech greeting and time--------------------------
 
    if(selectValue2 === 'czech' && greetingTime<14){
    greetingOutput.innerHTML='Dobré ráno. |:-}';
    message.innerHTML='Definovat se dobrodružstvi užit se dobrodružstvi.';
    theDate.innerHTML = `${czech_lang}`;
    
    }else if(selectValue2 === 'czech' && greetingTime<21){
    greetingOutput.innerHTML='Dobrý večer. Jak se máš Wane? |:-}';
    message.innerHTML='Definovat se dobrodružstvi užit se dobrodružstvi.';
    theDate.innerHTML = `${czech_lang}`;
        
    }else if (selectValue2 === 'czech' && greetingTime<24) {
    greetingOutput.innerHTML='Dobrou noc Wane. |:-}';
    message.innerHTML='Definovat se dobrodružstvi užít se dobrodružstvi.';
    theDate.innerHTML = `${czech_lang}`
}
    
    //Espanol greeting and time-------------------------

    if(selectValue2 === 'espanol' && greetingTime<14){
        greetingOutput.innerHTML='Buenos d&iacute;as. |:-}';
        message.innerHTML='Defina la adventura. Se disfruta la adventura.';
        theDate.innerHTML = `${espanol_lang}`;

        }else if(selectValue2 === 'espanol' && greetingTime<21){
        greetingOutput.innerHTML='Buenas tardes &#191;C&oacute;mo est&aacute; Wane? |:-}' ;
        message.innerHTML='Defina la adventura. Se disfruta la adventura.';
        theDate.innerHTML = `${espanol_lang}`; 

        }else if (selectValue2 === 'espanol' && greetingTime<24) {
        greetingOutput.innerHTML='Buenas noches Wane. |:-}';
        message.innerHTML='Defina la adventura. Se disfruta la adventura.';
        theDate.innerHTML = `${espanol_lang}`;
        }
};

   
    //Czech lang date for calendar---------------------------

    let czech_langTime = new Date();
    let days2 = ["Neděle","Pondělí","Úterý","Středa","Čtvrtek","Pátek","Sobota"];
    var months2 = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září","Říjen", "Listopad", "Prosinec"];

    let czech_lang= document.getElementById("theDate").innerHTML = `Dnes je ${days2[czech_langTime.getDay()]} ${months2[czech_langTime.getMonth()]}, ${czech_langTime.getDate()} ${czech_langTime.getFullYear()}`;

    //Espanol lang date for calendar-------------------------------------

    let espanol_langTime = new Date();
    let days3 = ["Domingo","Lunes","Martes","Miércoles","Juves","Viernes","Sábado"];
    var months3 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre","Octubre", "Noviembre", "Diciembre"];

    let espanol_lang= document.getElementById("theDate").innerHTML = `Hoy es ${days3[espanol_langTime.getDay()]} ${months3[espanol_langTime.getMonth()]}, ${espanol_langTime.getDate()} ${espanol_langTime.getFullYear()}`;
    
     //US lang date for calendar---------------------------

     /*Place at the bottom because of bubbling. By default the 
     calendar time will equal the end variable by positioning. This
     occurs when the select value is not selected, when application 
     loads. */

     /*Note: If czech or espanol declared variable is below the us_lang
     variable by default the calendar will display whichever
     declared variable that is at the end*///-----------

     let us_langTime = new Date();
     let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
     var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 
     let us_lang = document.getElementById("theDate").innerHTML = `Today is ${days[us_langTime.getDay()]} ${months[us_langTime.getMonth()]}, ${us_langTime.getDate()} ${us_langTime.getFullYear()}`;

   
    

    
    





    






 