function myFunction() {
    let x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function focusFunction() {
    document.getElementById("nombre").style.background = "aqua";
  }
  function blurFunction() {
    document.getElementById("nombre").style.background = "white";
  }
  function mouseDown() {
    document.getElementById("cargaForm").innerHTML = "Cargando contacto...";
  }
  function mouseUp() {
    document.getElementById("cargaForm").innerHTML = "Formulario disponible  ";
    document.getElementById("formularioSect").style.display = "block";
  }
  
  function validarForm(){

    let nombre = document.getElementById("nombre").value; 
    let mail = document.getElementById("email").value;
    let numero = document.getElementById("tlf").value;
    
    let prohibidos = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if ( !prohibidos.test(mail) ){                                                         
        alert("Error: La dirección de correo " + correo + " es incorrecta.");
    }
    
    if ((nombre == " ") || (mail == " ") || (numero == " ")) { 
        alert("Los campos no pueden quedar vacios");
    }
    
    }