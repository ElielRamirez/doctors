window.onload=()=>{
    let menu_mas = document.getElementById('menu-mas')
    let sub_menu= document.getElementById('sub-menu')
    menu_mas.addEventListener('click',function(e){
        e.preventDefault()
         sub_menu.style.display='block'
        // sub_menu.style.position='relative'

         
    // console.log(sub_menu)

        // alert('click')
    })

    function verEspecilidad(especilidad){
        // let doctores = document.getElementsByClassName('doctor-info')
        // str_doctores = JSON.stringify(doctores)
        // console.log(str_doctores.lenght.toInteger())


        // // console.log(str_doctores.l)


        // // JSON.parse(doctores)     
        // console.log(doctoresjson)


    }
verEspecilidad("especialidad")

    
}