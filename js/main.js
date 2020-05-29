window.onload = () => {
    let menu = document.getElementById('menu')
    let navbar = document.getElementById("navbar")
        /*
         * Metodo que muetra u oculta el menu de navegacion
         */
    menu.addEventListener("click", function() {
        if (navbar.style.display === 'block' || navbar.style.display === 'inline-block') {
            navbar.style.display = 'none';
        } else {
            navbar.style.display = 'inline-block';
        }
    });

    function reportWindowSize() {
        ancho = window.innerWidth;
        if (ancho >= 1024) {
            navbar.style.display = 'inline-block';
            let listas = document.querySelector('nav ul li');
            listas.style.display = 'inline-block'

        } else {
            navbar.style.display = 'none';

        }

    }

    window.onresize = reportWindowSize;

}