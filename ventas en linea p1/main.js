document.addEventListener('keyup', e => {
    if (e.target.matches('.buscador')) {
        const searchValue = e.target.value.toLowerCase();
        document.querySelectorAll('li').forEach(product => {
            product.textContent.toLowerCase().includes(searchValue)
                ? product.classList.remove('filtro')
                : product.classList.add('filtro');
        });
    }
});









function redireccionar() {
    var select = document.getElementById("buscador");
    var url = select.value;
    if (url) {
        window.location.href = url;
    }
}


document.getElementById("guardarBtn").onclick = function() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const direccion = document.getElementById("direccion").value;

    //  solicitud para guardar los datos en una base de datos
   

    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "Información actualizada con éxito.";
    mensaje.style.color = "green";

    // Limpiar los campos después de guardar
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("direccion").value = "";
};




