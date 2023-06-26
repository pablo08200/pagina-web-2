/*alert();*/ //madar alerts
 //parte del menu
 let ubicacionPrincipal = window.pageYOffset; //dara la ubicacion de cada seccion dividida de la pagina


  AOS.init();  /*INICIALIZAMOS LA ANIMATION DE AOS ANIMATION PARA LA ILUSTRACION DE ABAJO*/ 


 //ayudara a que la barra header desaparezca cuando hagamos scroll abajo y aparezca con scroll arriba 
 window.addEventListener("scroll",function(){
    //console.log(this.window.pageYOffset) //dime en que parte de la pagina esta el usuario y print it
    let dezplazamientoActual = window.pageYOffset; //mide 100   | 200
    if(ubicacionPrincipal>=dezplazamientoActual){ //0>100? 100>200
        document.getElementsByTagName("nav")[0].style.top="0px" //toma la info de acuerdo al nombre de etiqueta
    }else{
        document.getElementsByTagName("nav")[0].style.top="-100px"  //si baja
    }
    ubicacionPrincipal=dezplazamientoActual; //100 200  
 })

//menu en movimiento
let enlacesHeader = document.querySelectorAll(".enlades-header")[0];
let semaforo=true;
document.querySelectorAll(".hamburguer")[0].addEventListener("click",function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color="#fff";
        semaforo=false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color="#000";
        semaforo=true;
    }
    enlacesHeader.classList.toggle("menudos")
})

document.querySelectorAll('.video-container video').forEach(vid => {
    vid.onclick = () =>{
        document.querySelectorAll('.popup-video').style.display = 'block';
        document.querySelectorAll('.popup-video video').src = vid.getAttribute('src');
    }
});

document.querySelectorAll('.popup-video span').onclick = () =>{
    document.querySelectorAll('.popup-video').style.display = 'none';

}
