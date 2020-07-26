console.log('Roberth');
// // let nombre = 'roberth' 
// let edadJuan = 25
// let edadMaria= 20
// let edadMartin=16
// let suma = edadJuan + edadMaria + edadMartin
// let respuesta =suma / 3

// console.log( respuesta)
// // sumes las 3 edades y saques el promedio
// // console.log()
// //20

// let nombre = 'Roberth '
// let edad = 25
// let hijos = 2
// // mostrar tu informacion modo: 'Mi nombre es ---- y tengo -- años con --- hijos en mi casa.

// console.log( 'Mi nombre es ' + nombre + ' y tengo '+ edad+ ' años con '+ hijos)
// //18

// let arrayR=['Fresa','Mango','Papaya','Piña']

// Quiero un jugo de Fresa
//  console.log('Quiero un jugo de '+arrayR[0])
//  17

// REGLA DE 3 SIMLE
// 200 --- 100%
// 50 ----- x
///////////
// let val1 = 120
// let porcen1=100
// let val2 = 70
// // let porce2 = ????

// let val3 = val2 * porcen1
// let porc = val3 / val1

// console.log(porc + '%')

// //20
//res - 58.333333333333336%



// console.log(---+'%');
// *  /  +  -  %

 
// let numero = prompt('Ingresa un número')
// //  =  == ===
// let numero = 10

// if( numero > 10){
//     console.log('si es 10');
// }else{
//     console.log('es menor que 10');
// }


// if(primera condicion){

// }else if(segunda condicion){
    
// }else{

// }

// switch(numero){
//     case 10:
//         console.log('es diez');
//         break;
//     case 11:
//         console.log('es once');
//         break;
//     case 12:
//         console.log('Vale doce');
//         break;
//     default:
//         console.log('Es un valor erroneo');
//         break;
// }
// a != b
// let numero = prompt('ingresa primer numero')
// let  numero2 = prompt('ingresa segundo numero')

// if ( numero2 == 0){
//     console.log('no debe ser 0');
// }
// else {
// let div = numero / numero2
// let res =numero%numero2

//  console.log(' el resultado es '+ div + ' el residuo es ' + res )

// }

// -> Quieres calcular el area de triangulo[1] o del cuadrado[2]

// -> b*h/2 ingresa base / ingresa altura - el area del ta
// ->l*l 


// a !=  b // diferente -> true - false 
// a == b
// let numero = prompt('ingresa primer numero')
// let numero = prompt( 'Quieres calcular el area de triangulo[1] o del cuadrado[2]')

// // Number(numero)
// if( Number(numero) == 1){
    
//     let base = prompt( 'ingrese base')
//     let altura = prompt( 'ingrese altura')
//     let atria = ((Number(base) * Number(altura))/2)

//     console.log( 'El area del triangulo es ' + atria)        

// }
// else {
//     let lado = prompt ('ingrese lado')
//     let acua = Number(lado) * Number(lado)
//     console.log('el area del cuadrado es ' + acua)
// }
//18

// -> de centimetros - metros[0]   !!  metros a kilometros[1]  !!  kilometros a milimetros[2]

// let numero = prompt( 'centimetros - metros[1]   !!  metros a kilometros[2]  !!  kilometros a centmetros[3]')

// switch(numero){
//     case '1' : 
//     let val1 = prompt( 'ingrese valor')
//     let metros = Number(val1) / 100
//     console.log( metros + ' metros')
//     break;

//     case '2' :  
//     let val2 = prompt( 'ingrese valor')
//     let kilo = Number(val2) / 100
//     console.log( kilo + ' kilometros')
//     break;

//     case '3' :  
//     let val3 = prompt( 'ingrese valor')
//     let centi = Number(val3) * 100000
//     console.log( centi + ' Centimetros')
    
//     default:
//   console.log('Es un valor erroneo');
// break;
// }
//20

//LOOPS - REPETITIVAS
// WHILE    -    DO WHILE      -  FOR

// let numero = 0
// let frutas = ['Manzana','Pera','Sandía','Fresa','Durazno']


// console.log(frutas);

// //frutas.push('Uva')
// //frutas.length
// //frutas.pop()
// // frutas.sort()
// //frutas.includes('elemento')
// //frutas.join('separador')


// // console.log(frutas.join(''));

// let numero = 0

// // debugger
// while(numero < 1){
//     numero = prompt('Ingresa numero')
// }

// let valor = 0
// do{
//     valor = prompt('Ingresa numero')
// }while(valor < 1)

// let frutas = ['Manzana','Pera','Sandía','Fresa','Durazno']
// for(let i=0;i<frutas.length;i++){
//     if(frutas[i] == 'Fresa'){
//         console.log('Posicion '+ i+1);
//         break;
//     }
// }

// function sumarElementos(num1=0,num2=0){
//     let suma = num1 + num2
//     return suma
// }

// function unirNombre(nombre ='No puso nombre ',apellido = '- No puso apellido'){
//     let nombreCompleto = nombre+' '+apellido
//     return nombreCompleto
// }


// let misuma=sumarElementos(25,50)
// // let misuma2 = sumarElementos(100,2002)
// // let misuma3 = sumarElementos(120,20430)
// // let misuma4 = sumarElementos(1040,2010)
// // let misuma5 = sumarElementos(1005,2200)
// let nombreUsuario = unirNombre()

// console.log(nombreUsuario);
// // console.log(misuma2);
// // console.log(misuma3);
// // console.log(misuma4);
// // console.log(misuma5);


// escribir un programa que lea 3 prompt
// nombre
//apellidos
//edad
//si soy mayor de edad, me pide DNI, si no, no pide nada
// 
//TODOS LOS ELEMENTOS SE DEBEN GUARDAR EN UN ARRAY

//con el array como parametro , usamos una funcion para mostrar
// en un console los datos unidos y separados por un '-'


// escribir un programa que lea 3 prompt
// nombre
//apellidos
//edad
//si soy mayor de edad, me pide DNI, si no, no pide nada
// 
//TODOS LOS ELEMENTOS SE DEBEN GUARDAR EN UN ARRAY

//con el array como parametro , usamos una funcion para mostrar
// en un console los datos unidos y separados por un '-'
// let array_datos=[]
// let nombre = prompt('Ingrese nombre')
// array_datos.push(nombre)
// let apellido = prompt ( 'ingrese apellido')
// array_datos.push(apellido)
// let edad = prompt('ingrese edad')
// array_datos.push(edad)


// if ( Number(edad) >= 18){

//     let dni =prompt ('ingrese dni')
//     array_datos.push(dni)
// }
// else{
//     array_datos.push('Es menor de edad') 
    
// }
// unirdatos(array_datos)



// function unirdatos(array_datos){
//     console.log(array_datos.join('_'))
    
// 
// // alert(`Bienvenido o welcome pues ${usr} y tu perra contraseña es ${passw}`)
let Rname =document.getElementById('_idNombre')
let lastName1 = document.getElementById('_idApellido1')
let lastName2 = document.getElementById('_idApellido2')
let btn = document.getElementById('_idIngresar')
let span = document.getElementById('idspan')
let edM = document.getElementById('_idEdad')
let Midni =document.getElementById('_iddni')

let array_datos = []

function validaEdad(){
   

    if(Number(edM.value) >17){
        Midni.removeAttribute('disabled','')  
    } 
    else {
        Midni.setAttribute('disabled','')
    }
} 

function validadni(){

    if(Number(Midni.value) >9999999 && Number(Midni.value) < 10000000){
btn.removeAttribute('disabled','')
span.style.display='none'

    }
else{ 
    btn.setAttribute('disabled','')
    span.style.display='block'

}
}

btn.addEventListener('click',()=>{
array_datos.push(Rname.value)
array_datos.push(lastName1.value)
array_datos.push(lastName2.value)
array_datos.push(edM.value)

if(Midni.value.length == 8){
    array_datos.push(Midni.value)
}else{
       array_datos.push('Eres menor ctm')               
}
alert(array_datos.join('|'))

array_datos = []
Rname.value= ''
lastName1.value= ''
lastName2.value= ''
edM.value=''
Midni.value=''

})