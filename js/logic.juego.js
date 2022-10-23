let tabla=2;
let estado=1;
let multiplicadores=[1,2,3,4,5,6,7,8,9,10];

function inicio(){
    let opciones=document.getElementById("opciones");
    let listaOpciones="";
    for(i=2;i<11;i++){
        listaOpciones+=`<button class="circulo-opcion" id="o${i}" onclick="opcion(this)">${i}</button>`;
    }
    opciones.innerHTML=listaOpciones;
    document.getElementById("multiplicaciones").style.display='none';
}

function opcion(op){
    let numero = op.id.substring(1);
    cambiarTabla(numero);
}

function cambiarTabla(numero){
    let multiplicando=document.getElementById("multiplicando");
    multiplicando.textContent=numero;
    let soluciones=[]
    for(i=0;i<10;i++){
        soluciones.push((i+1)*(numero*1));
    }
    for(i=10;i<15;i++){
        soluciones.push(Math.floor(Math.random() * (numero*10)));
    }
    soluciones=shuffle(soluciones);
    soluciones.map((x,i)=>{
        document.getElementById("s"+(i*1+1)).textContent=x;
    })

    document.getElementById("multiplicaciones").style.display='';
    tabla=numero;
    estado=1;
    multiplicadores=shuffle(multiplicadores);
    document.getElementById("multiplicador").textContent=multiplicadores[estado-1];
    document.getElementsByName("sol").forEach((x)=>{x.style.backgroundColor=""})
}

function respuesta(obj){
    let numero = obj.textContent*1;
    if(tabla*multiplicadores[estado-1]==numero){
        obj.style.backgroundColor="#adff2f";
        siguienteOperacion();
    }else{
        swal("Recuerda: "+tabla+" x "+multiplicadores[estado-1]+" = "+(tabla*multiplicadores[estado-1]), "... Continua!")
    }
}

function siguienteOperacion(){
    if(estado<10){
        estado++;
        document.getElementById("multiplicador").textContent=multiplicadores[estado-1];
    }else{
        if(tabla<10){
            tabla++;
            swal("Good job!", "Let's see the next!", "success").then((value)=>{
                cambiarTabla(tabla)
            });
        }else{
            swal("Amazing!!!", "you completed the path!", "success");
            document.getElementById("multiplicaciones").style.display='none';
        }
        
    }
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }