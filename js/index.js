// COMPROBAR ESTADO CHECKBOX
const checkbox = document.getElementById('aceptar')
let activar = document.getElementById('activarCheckbox')

// COMPROBAR CHECKBOX Y SOLICITAR CONFIRMACIÓN
function comprobarCheckbox(){
    
    if (checkbox.checked){
        console.log('La casilla esta activada')
        activar.textContent = ""
    }
    else{
        activar.textContent = '*Por favor acepte la Política de Privacidad para continuar'
        document.getElementById('activarCheckbox').classList.add('activar')
    }
}

// PERMITE LA ACTIVACION/DESACTIVACION DEL CHECKBOX UNA VEZ PULSADO EL SUBMIT
checkbox.addEventListener('click', () => {
    if (checkbox.checked){
        activar.textContent = ""
    }
})

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault()
    comprobarCheckbox()
})


// MODAL
document.getElementById('modal_politica').addEventListener('click', () => {

    // MODAL POLITICA PRIVACIDAD EMERGENTE
    let modalTxt = document.getElementById ('politica')
    let modalBox = document.getElementById('modal')
    
    //MUESTRA LA VENTANA MODAL
    modalBox.style.display= "block"

    modalTxt.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula velit id nulla pellentesque malesuada. Pellentesque tristique scelerisque lorem ac commodo. Aenean placerat orci eget elit consequat, eu cursus elit facilisis. Pellentesque vel ex sit amet arcu vehicula pharetra quis vitae libero. Donec semper turpis vitae tortor finibus, ac sagittis neque sagittis. In magna nibh, laoreet et ligula at, posuere rutrum nibh. Aenean ante elit, pellentesque eu mollis non, luctus eget dolor. Cras sed pulvinar magna. Praesent iaculis diam quis enim viverra, commodo eleifend velit tincidunt. Donec at tincidunt tellus. Morbi dui dui, pretium in ligula non, hendrerit gravida turpis.'
})

const closeBtn = document.querySelector('.close')

// FUNCION PARA CERRAR LA VENTANA MODAL PINCHANDO EN CUALQUIER SITIO SIN CONTENIDO
window.onclick = (event) => {
    if (event.target.classList.contains ('modal')){
    modal.style.display = "none"
    }
}

// FUNCION PARA CERRAR PINCHANDO A LA X
closeBtn.onclick = () => {
    modal.style.display = "none"
}