

// let a = 10

// // console.log('Mi variable es: '+a+' '+ b +);
// // console.log(`Mi variable es ${a} y la otra variable ${}`);



// let  jean=18

// for(let i=0;i<5;i++){
//     if(i=233){
//         break;
//     }

// }
// function miFunion(){

// }

// let mifuncion =a =>console.log(a);
// mifuncion(jean)


// let suma = (a,b = 'no tiene datos') =>{
//     let suma = a + b
//     return suma
// }

// let misuma = suma()


// let nombre = 'JP'
// let apellido = 'Lujan'
// let edad = 20
// miFuncion(nombre, apellido, edad)

// function miFuncion(...datos){
//     nombre 
// }

// document.getElementById('hola').addEventListener('click',()=>{

// })

//document.getElementById('elem').setAttribute('disabled','')
//document.getElementById('elem').removeAttribute('disabled','')
//document.getElementById('elemento').style.display='block'
//document.getElementById('elemento').style.display='none'
// let nombre = document.getElementById("idNombre")
// let apellido1 = document.getElementById("idApellido1")
// let apellido2 = document.getElementById("idApellido2")
// let edad = document.getElementById("idEdad")
// let dni = document.getElementById("idDNI")
// let mess = document.getElementById('mess')

// let btn = document.getElementById("idBoton")
// let array= []


// btn.addEventListener('click',()=>{
    
// if(nombre.value != '' && apellido1.value != '' && apellido2.value != '' && edad.value != '')
// {  
//     array.push(nombre.value)
//     array.push(apellido1.value)
//     array.push(apellido2.value)
//     array.push(edad.value)
    
    
//     if(dni.value == '') {
//         array.push('eres menor de edad')
//     }
//     else {
//         array.push(dni.value)
//     }
//     // //push() = agregar elementos
//     // //length = ver la cantidad de elementos (desde 1)
//     // //pop()  = eliminar el ultimo elemento    
//     //sort() - ordena de manera ascendente
//     //include() - busca elementos en un array
//     // join() - une todos los elementos de un array como string
    
//     console.log(array.join(' / '))
//     limpiar()

// }

// else {
//     alert('faltan datos por llenar')
// }
    

// })


// let limpiar = () => {
//     nombre.value =''
//     apellido1.value = ''
//     apellido2.value = ''
//     edad.value = ''
//     dni.value = '' 
//     array = []
// }

// function validarEdad(){

//     if(Number(edad.value)>17){
//         dni.removeAttribute('disabled','')
//     }
//     else{
//         dni.setAttribute('disabled','')
//     }
// }
 
 
// function validarDNI(){
//      if(Number(dni.value)<100000000 && Number(dni.value)>9999999){  
//         btn.removeAttribute('disabled','')
//         mess.style.display='none'
//      }
//      else{
//         btn.setAttribute('disabled','')
//         mess.style.display='block'  
//      }
// }
let bdUser = 
[
    {nombre:'Juan Ruiz Trujillo',usuario:'root',contraseña:'root'},
    {nombre:'Jean Pierre',usuario:'admin',contraseña:'admin'},
    {nombre:'Martin Ruiz',usuario:'qwer',contraseña:'qwer'}

]

let user = document.getElementById('idUsuario')
let contra = document.getElementById('idContraseña')
let ingresar = document.getElementById('idIngresar')
let form = document.getElementById('idForm')


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let valida = false
    for (let i=0;i<bdUser.length;i++){
    if(bdUser[i].usuario == user.value && bdUser[i].contraseña == contra.value){
        swal("Correcto", 'Bienvenido '+ bdUser[i].nombre, "success");
        valida = true
        break;
        //success
        //error
        //warning
        //question
    }
    }
    valida==false
        ? swal("ERROR", 'Usuario Incorrecto', "error")
        : {}

})










































































































