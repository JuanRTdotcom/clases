console.log('Joshua Semi Dios');
// let _nombre = 'Joshus Silva Sosaya'
// let edades=23
// let nombreCiudadCartajena = 'Kirume'


//convertir de un tipo a otro
//  let ed='28'
//  let alt=18
 //console.log(Number(ed));// convercion de String a numero
 //console.log(alt.toString());//convetir de numero a String
// console.log(String(alt));//mismo resultado


// let ed = '16'
// let nom = 'Jakie'
// let es = 'Ilegal'
// // En 10 años cuantos años tendra la señorita

// let e=Number(ed);

// console.log( `La señorita ${nom} tendra ${e+10} y su estado es ${es}` )
//29


// var nombres = 'Jose'
// nombres = 'Joshua Silva'
// let apelli="Vizcarra"
// apelli='Ramera'
// const nApelli='Puta'
// console.log(nombres);

//para crear una mecha
// let fech=new Date();
// console.log(fech);


// (asignar =) (comprando ==) (comparar tipo de datos ===) operadores relaciones
// console.log( '10' === 10 ) ;
// let ed1 = 10
// let ed2 = 20

// //  =  ==  === > <  >=  !=
// console.log( ed1 != ed2 ) ;

//CONDICIONALES
// let edad = 20
// let suma = 3


// if(edad == suma){
//     console.log("verdadero");
// }else{
//     console.log("falso");
// }
// let edad = 20
// let suma = 30
// let misOpciones=['Menu','Cliente','Ventas']
// let opciones= misOpciones[1] 

// switch(opcion){
//     case 'Menu':
//         console.log('Abre menu de opciones');
//         break;
//     case 'Cliente':
//         console.log('Abre menu clientes');
//         break;
//     case 'Ventas':
//         console.log('Abre menu ventas');
//         break;
//     default:
//         console.log('no es nunguno');
//         break;
    
// }


// var edadJo = prompt('Ingresa tu edad Joshua')

// // dime si es manor o mayor de edad

// if(edadJo>=18){
//     console.log('Si osea ya me lo puedo tirar al Jean Pierre');
// }else{
//     console.log('No es mayor de Edad');

// }


//20
// de otra forma solo cuando hay dos condiciones (Tradicional)

// let edadJuan = 26

// edadJuan>=18
//     ? console.log('Mayor de edad')
//     : console.log('Menor de edad')

// let primerNumero = prompt('Joshua Ingresa el primer número: ')
// let segundoNumero = prompt('Joshua Ingresa el segundo número: ')

// if(primerNumero==segundoNumero){
//     console.log('Son iguales');
// }else if(primerNumero>segundoNumero){
//        console.log( `El primer ${primerNumero} Mayor que el ${segundoNumero}`);
// }else{
//        console.log(`El segundo numero ${segundoNumero} es Mayor que ${primerNumero} `);
// }
//14

// let añoActual = prompt('Ingresa año actual')
// let añoCalcula = prompt('Ingresa año a calcular')

// if(añoActual==añoCalcula ){
//     console.log('Es Año Actual');
// }else if(añoActual>añoCalcula ){
//     let años=añoActual-añoCalcula ;
//     console.log(`Falta ${años} años para el ${añoActual}`);
// }else if(añoActual<añoCalcula){

// let año=añoCalcula-añoActual;
// console.log(`Falta ${año} años para el ${añoCalcula}`);

// }
//19
//

//

//

//

//

// let numJ=prompt('Ingresar el Numero Mi amor')

// let numero1=Number(numJ)

// if(Number(num)==0){

//     console.log('CERO NO ES PAR NI IMPAR SEGUN LA REAL ACADEMIA ESPAÑOLA')
//else if(numero1%2==0){
//     console.log('Es Par')
// }else if(numero1%2!=0){
//     console.log('Es Impar')
// }else{
//     console.log('Es una Letra')
// }
// console.log('Gracias por usar JARVIS')


// if else  -  if else if - swtich
//17



// let numero2
// let num1=prompt('Ingrese el Numerador')
// let numero1=Number(num1)
// do{
    
// let num2=prompt('Ingrese el Denominador')
// numero2=Number(num2)

// }while( numero2==0)

// let div=numero1/numero2;
// let resi=numero1%numero2;
// console.log(`La division de ${numero1}/${numero2} 
// es igual a ${div} y su residuo ${resi} `)
// 20


// let opc=prompt('Elige 1 o 2\n1.Area de Triangulo\n2.Area del Cuadrado')

// if(opc==1){
//     var b=prompt('Ingrese la base')
//     var h=prompt('Ingrese la altura')
//     var resul=(Number(b)*Number(h))/2
//     console.log(`El Area del Triangulo es ${Number(resul)}`)

// }else if(opc==2){
//     var l=prompt('Ingrese la medida de los lados')
//     var res=Number(l)*Number(l)
//     console.log(`El Area del Cuadrado es ${Number(res)}`)
// }
        
//     console.log('Gracias por usar Jarviz')


//push() - añadir elementos
//length - cantidad d elementos
//pop()  - El ultimo elemento
//sort() - ordena de manera ascendente
//include() - busca elementos en un array
// join() - une todos los elementos de un array como string


// function miPrimeraFuncion(edad=0,nombre='DEFAULT',sexo=M){
//         let suma = 50 + 50
//         console.log('ERROR DEL SISTEMA : '+ nombre)
//         console.log('RETORNAR');
//         console.log('La suma es :'+ suma);
// }

// miPrimeraFuncion(18,'Jean')}

// if(Number(nume) == 0){
//     let num1= prompt('Ingresar Numero 1')
//     let num2= prompt('Ingresar Numero 2')
//     let multi = ejercicio(Number(num1),Number(num2),'*')
//     console.log(`El resultado de la Multiplicación es ${multi}`)
// }else if(Number(nume) == 1){
//     let num1= prompt('Ingresar Numero 1')
//     let num2= prompt('Ingresar Numero 2')
//     let sumita = ejercicio(Number(num1),Number(num2),'+')
//     console.log(`El resultado de la Suma es ${sumita}`)
// }else if(Number(nume) == 2){
//     let num1= prompt('Ingresar Numero 1')
//     let num2= prompt('Ingresar Numero 2')
//     let restita = ejercicio(Number(num1),Number(num2),'-')
//     console.log(`El resultado de la Resta es ${restita}`)
// }else{
//     console.log('No es ninguna de las 2 ocpciones RECONCHATUMARE')
// }






// function ejercicio(num1,num2,operador){
//     switch(operador){
//         case '*': 
//             let multi = num1 * num2
//             return multi
        
//         case '+':
//             let sumita = num1 + num2
//             return sumita

//         case '-':
//             let restita = num1 - num2
//             return restita
//     }
// }


 
// let opc=prompt("Multiplicacion[0]\nSuma[1]\nResta[2]")

// switch (opc){

//     case '0':
   
//             let num1=prompt('Ingrese el Primer Numero')
//             let num2=prompt('Ingrese el Segundo Numero')
//             let mul=Multiplicacion(Number(num1),Number(num2))
//             console.log(`La Muliplicacion es ${Number(mul)}`)
   
//             break;
//     case '1':
//             let num1=prompt('Ingrese el Primer Numero')
//             let num2=prompt('Ingrese el Segundo Numero')
//             let res=Restar(Number(num1),Number(num2))
//             console.log(`La resta es ${Number(res)}`)
//             break;  

//     case '2':
//             let num1=prompt('Ingrese el Primer Numero')
//             let num2=prompt('Ingrese el Segundo Numero')
//             let sum=Suma(Number(num1),Number(num2))
//             console.log(`La resta es ${Number(sum)}`)
//             break;  
        
            
// }


// function Muliplicacion(num1,num2){

//     let mul=num1*num2;
//     return mul;
// }

// function Resta(num1,num2){

//     let res=num1-num2;
//     return res;
// }

// function Suma(num1,num2){

//     let Sum=num1+num2;
//     return Sum;
// }


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

// for(let i)
// let dat=[]
// let nom=prompt('Ingrese el Nombre')
// let apell=prompt('Ingrese el Apellido')
// let ed=prompt(`La edad de ${nom.toUpperCase()} ${apell.toUpperCase()} es `)

// dat.push(nom)
// dat.push(apell)
// dat.push(ed)

// if(Number(ed)>17){
//     var DNI=prompt(`Ingrese el DNI de ${nom.toUpperCase()} ${apell.toUpperCase()} es `)
//     dat.push(DNI)    
// }else{
//     dat.push('Es menor de edad')    
// }
//  imprimir(dat)



// function imprimir(dat){
//     console.log(dat.join('-'))

// }

// let mib=document.getElementById('btn_Joshua')
// let bodyj=document.getElementById('body')
// mib.style.background='blue'
// mib.addEventListener('click',()=>{
//     let caja=document.getElementById('contra2')
//     console.log(caja.value)
    
// })


// document.getElementById('btn_ingresar').addEventListener('click',()=>{
//     let us=document.getElementById('user').value.trim().replace(' ','')
//     let con=document.getElementById('pass').value.trim().replace(' ','')
//     if(us==''||con==''){
//         alert('Ingresa bien los datos joputa')
//     }else{
//         console.log(`Bienvenido usuario ${us} con contraseña ${con}`)

//     }

// })
// let n1 = document.getElementById('n1')
// let n2= document.getElementById('n2')
// document.getElementById('sumar').addEventListener('click',()=>{
//     let num1=n1.value
//     let num2=n2.value
//     let resul=Operar(Number(num1),Number(num2),'suma')
//     console.log(`El Resultado de Sumar ${num1} + ${num2} es igual ${resul}`)
         
// })

// document.getElementById('restar').addEventListener('click',()=>{
//     let num1=n1.value
//     let num2=n2.value
//     let resul=Operar(Number(num1),Number(num2),'resta')
//     console.log(`El Resultado de Restar ${num1} - ${num2} es igual ${resul}`)
      
// })

// document.getElementById('multiplicar').addEventListener('click',()=>{
//     let num1=n1.value
//     let num2=n2.value
//     let resul=Operar(Number(num1),Number(num2),'multiplicacion')
//     console.log(`El Resultado de Multiplicar ${num1} * ${num2} es igual ${resul}`)
      
// })


// function Operar(n1=0,n2=0,operador){
//     let suma,resta,multi
//     if(operador=='suma'){
//         return suma=n1+n2
//     }else if(operador=='resta'){
//          return resta=n1-n2
//     }else if(operador=='multiplicacion'){
//         return multi=n1*n2
//     }
// }

// let nombre=document.getElementById('idNom').value
// let apellido1=document.getElementById('idApell1').value
// let apellido2=document.getElementById('idApell2').value
// let edad=document.getElementById('_idEd').value
// let dni=document.getElementById('idDNI')
// let button=document.getElementById('_ingresar')
// let array[]


// button.addEventListener('click',()=>{
      
    
// })


// let bdUser = 
// [
//     {nombre:'Juan Ruiz Trujillo',usuario:'root',contraseña:'root'},
//     {nombre:'Jean Pierre',usuario:'admin',contraseña:'admin'},
//     {nombre:'Martin Ruiz',usuario:'qwer',contraseña:'qwer'},
//     {nombre:'Joshua Silva',usuario:'josh',contraseña:'1123'}

// ]

// let usuario=document.getElementById('_user')
// let contra=document.getElementById('_pass')
// let boton=document.getElementById('_Ingresar')
// let form = document.getElementById('_form')

// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
       
//     for(let i=0; i<bdUser.length;i++){
      
//            if(bdUser[i].usuario==usuario.value && bdUser[i].contraseña==contra.value){
//                swal('CORRECTO','Bienvenido '+bdUser[i].nombre,"success")
               
//                break;
             
//            }else {
//                swal('INCORRECTO','Contraseña Erronea'+bdUser[i].nombre,'error')
              

//            }
         

//        }


// })






