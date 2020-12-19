
function cronometro(tempo){
    var dias = document.getElementById("dias");
    var horas = document.getElementById("horas");
    var minutos = document.getElementById("minutos");
    var segundos = document.getElementById("segundos");
  
    dias.innerHTML = ((tempo - 1) > 9) ? ("" + (tempo - 1)) : ("0" + (tempo - 1));
    horas.innerHTML = ((tempo - 1) > 9) ? ("" + (tempo - 1)) : ("0" + (tempo - 1));
    minutos.innerHTML = ((tempo - 1) > 9) ? ("" + (tempo - 1)) : ("0" + (tempo - 1));
    segundos.innerHTML = ((tempo - 1) > 9) ? ("" + (tempo - 1)) : ("0" + (tempo - 1));

    var d = tempo - 1;
    var h = 23;
    var min = 59
    var seg = 59;

    var contador = setInterval(function(){
        dias.innerHTML = (d > 10) ? ("" + d) : ("0" + d);
        horas.innerHTML = (h > 10) ? ("" + h) : ("0" + h);
        minutos.innerHTML = (min > 9) ? ("" + min) : ("0" + min);
        segundos.innerHTML = (seg > 9) ? ("" + seg) : ("0" + seg);

        if(seg > 0){
            seg -= 1;
        }
        else if(seg == 0 && min > 0){
            seg = 59;
            min -= 1;
    
        }
        else if(seg == 0 && min == 0 && h > 0){
            seg = 59;
            min = 59;
            h -= 1;

        }
        else if(seg == 0 && min == 0 && h == 0 && d > 0){
            seg = 59;
            min = 59;
            h = 23;
            d -= 1;
        }
        else{
            d = tempo;
        }

    }, 1000)


}

cronometro(10);