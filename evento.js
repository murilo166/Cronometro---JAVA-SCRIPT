//selecionando div s

let relogio = document.querySelector(".relogio");

let iniciar = document.querySelector(".iniciar");

let encerrar = document.querySelector(".encerrar");




//criando variaveis para segundos minutos e horas
let segundos = 0;
let minutos = 0;
let horas = 0;



//criando zero a esquerda

let zerosegundos = 0;

let zerominutos = 0;

let zerohoras = 0;


//variaveis para controlar o intervalor e o status

let intervalo = "";

let statusrelogio = "parado";

    function tempo (){

        segundos++;

        if(segundos/60===1){
            segundos=0;

            minutos ++;

        }if(minutos/60===1){

            minutos=0;
            horas++;
        }

        if(segundos<10){

            zerosegundos = "0" + segundos.toString();


        }else{
            zerosegundos = segundos;
        }


        if(minutos<10){

            zerominutos = "0" + minutos.toString();


        }else{
            zerominutos = minutos;
        }

        if(horas<10){

            zerohoras = "0" + horas.toString();
        }else{
            zerohoras = horas;
        }
        

        relogio.innerHTML= zerohoras + ":" + zerominutos + ":" + zerosegundos;


    }





iniciar.addEventListener("click",function controlerelogio(){


    if(statusrelogio==="parado"){

        intervalo = window.setInterval(tempo,1);

        iniciar.classList.add("pausar");
        iniciar.innerHTML = "pausar";
        statusrelogio="trabalhando";
        relogio.style.color="green";




        
        }else{


            clearInterval(intervalo);
            iniciar.classList.remove('pausar');
            iniciar.innerHTML ="Inciar";
            statusrelogio="parado";
            relogio.style.color= "red";
        }

    
    
    })

    

   encerrar.addEventListener("click", function acabarcontagem(){

    clearInterval(intervalo);
    relogio.style.color = "green"


    segundos = 0;
    minutos = 0;
    horas = 0;

    relogio.innerHTML = "00:00:00";








   })


