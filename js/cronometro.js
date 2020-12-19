
function iniciarContador(m_init){
    var dias = document.getElementById("dias");
    var horas = document.getElementById("horas");
    var minutos = document.getElementById("minutos");
    var segundos = document.getElementById("segundos");
  
    dias.innerHTML = ((m_init - 1) > 9) ? ("" + (m_init - 1)) : ("0" + (m_init - 1));
    horas.innerHTML = ((m_init - 1) > 9) ? ("" + (m_init - 1)) : ("0" + (m_init - 1));
    minutos.innerHTML = ((m_init - 1) > 9) ? ("" + (m_init - 1)) : ("0" + (m_init - 1));
    segundos.innerHTML = ((m_init - 1) > 9) ? ("" + (m_init - 1)) : ("0" + (m_init - 1));

    var d = m_init - 1;
    var h = 59;
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
            h = 59;
            d -= 1;
        }
        else{
            d = m_init;
        }

    }, 100)


}

iniciarContador(10);