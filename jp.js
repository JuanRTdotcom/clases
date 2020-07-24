console.log('De Jean ;v');
// let miarrayobjtos=[{distrito:'El porvenir',ciudad:'Trujillo'},{distrito:'Moche',ciudad:'Trujillo'}]
// for(let i=0; i<miarrayobjtos.length; i++){
//     // console.log("Yo vivo en la ciudad de "+ miarrayobjtos[i].ciudad+(" y en el distrito de ")+miarrayobjtos[i].distrito)
//     let bodya = document.getElementById('aver')
//     let je = document.createElement("div")
//     je.textContent="Yo vivo en la ciudad de "+ miarrayobjtos[i].ciudad+(" y en el distrito de ")+miarrayobjtos[i].distrito
//     bodya.appendChild(je)
// }

// let a=prompt("ingresa tu edad") 

// console.log(typeof a)
// let s=typeof a === 'number'
// if(s >= 18 ){
//     console.log("Es mayor de edad")
// }
// else{
//     console.log("Es menor de edad")
// }


// /////////////////////////////// 
// let edadesSalon = [10,20,24,16,25]
// // La edad de __ y es menor de edad

// for(let i=0; i<edadesSalon.length; i++) {
//     if(edadesSalon[i]<18){
//         console.log(" La edad de  "+ edadesSalon[i]  " es menor de edad" )
//     }else{
//         console.log("La edad de  "+ edadesSalon[i]  " no es menor de edad")
//     }
// }
//  18

// let misAlumnos=[
//                 {genero:'M',edad:'36',distrito:'Trujillo',nombre:'Mayra'},
//                 {genero:'F',edad:'300',distrito:'Lima',nombre:'Lucía'},
//                 {genero:'F',edad:'19',distrito:'Chiclayo',nombre:'Jaime'},
//                 {genero:'F',edad:'13',distrito:'Piura',nombre:'Alicia'},
//                 ]

//quien es la persona que es menor de edad: Es de genero femenino/masculino de____ y su nombre es____
//quien esta muerta(o) : Ya persona ya esta muerta y es de genero___ y vivia en____ 
// for( let i=0 ;i<misAlumnos.length;i++ ){
//     if(misAlumnos[i].edad < 18 ){

//             let genero
//                     if(misAlumnos[i].genero == 'F'){
//                         genero='Femenino'
//                     }
//                     else{
//                         genero = 'Masculino'
//                     }
//                     console.log("Es de genero "+genero+" y su nombre es " + misAlumnos[i].nombre)

//     } else if(misAlumnos[i].edad>110)
//         {
       
//         if(misAlumnos[i].genero == 'F'){
//             console.log("Ya la persona esta morida y es de genero femenino y vivia en " + misAlumnos[i].distrito)
    
//         }else{
//             console.log("Ya la persona esta morida y es de genero masculino y vivia en " + misAlumnos[i].distrito)
//         }
//     }
// }

//16

// let años = '20'
// let alto = 20
// console.log(alto.toString()); // Convertir de Number a String
// console.log(Number(años)); // conversion de strin a namber


// let edadellas = '16'
// let nombreEllas = 'Jakie'
// let estados  = 'Ilegal'
// // En 10 años cuantos años tendra la señorita
// //la señorita jackie tendra en 10 años : 

// console.log("La Señorita "+ nombreEllas + " tendra en 10 años "+ (Number(edadellas)+10))
// 12
///***************************************************************************************************
// Var  : var nombre = 'Juan'
//        nombre = 'Luis Alberto'
//        console.log(nombre);-> Lee eL ultimo dato por ser statica

// Const: const nombre = 'Juan'
//        nombre = 'Luis Alberto'
//        console.log(nombre);-> no cambia por es constante

// Let  : let nombre = 'Juan'
//        nombre = 'Luis Alberto'
//        console.log(nombre);-> Lee eL ultimo dato por ser statica

// var nombre = 'Juan'
// nombre = 'Luis Alberto'

//  for( let i = o ; i<5 ; i++){
//     let apellido = 'Ruiz'
//     apellido = 'Zamora'
//  }

// let fecha = new Date()
// console.log(fecha);

//*********************************************************************************************************** */

// var edadJ = prompt('Ingresa tu edad Jean')

// dime si es manor o mayor de edad
// if(edadJ >= 18){
//     console.log('Es mayor de edad')
// }else{
//     console.log('Es menos de edad')  
// }

// switch (edadJ >=18) {
//     case true:
//         console.log('Es mayor de edad')
//         break;

//     default:
//         console.log('Es menor de edad')
//         break;
// }
//20


// let priNumero = prompt('Jean Ingresa el primer número: ')
// let segNumero = prompt('Jean Ingresa el segundo número: ')

// if(priNumero == segNumero){
//     console.log('son iguales xd')
// }else if(priNumero > segNumero){
//     console.log('El primero numero es' + priNumero + ' es mayor Serrano CTMRE')
// }else if(priNumero < segNumero){
//     console.log('El segudo numero ' + segNumero + ' es mayor Serrano CTMRE')
// }
//18

// let aa = prompt('Ingresa año actual')
// let ac = prompt('Ingresa año a calcular')

// if(aa == ac){
//     console.log("Estas en el mismo año prro")
// }else if(aa > ac) {
//     let c = aa - ac
//     console.log(`se paso burro ctmr ${c} años`)
// }else if(aa < ac){
//     let d = ac - aa
//     console.log(`faltan ${d} años `)
// }
//16
// let mesJ = prompt('Escribe el mes')

// switch(mesJ){
//     case '1':
//         console.log("Es enero")
//         break;
//     case '2':
//         console.log("Es febrero")
//         break;
//     case '3':
//         console.log("Es Marzo")
//         break;
//     case '4':
//         console.log("Es abril")
//         break;
//     case '5':
//         console.log("es mayo")
//         break;
//     case '6':
//         console.log("es junio")
//         break;
//     case '7':
//         console.log("es julio")
//         break;
//     case '8':
//         console.log("es agosto")
//         break;
//     case '9':
//         console.log("es septiembre")
//         break;
//     case '10':
//         console.log("es octubre")
//         break;
//     case '11':
//         console.log("es noviembre")
//         break;
//     case '12':
//         console.log("es diciembre")
//         break;
//     default:
//         console.log("no es un mes :v")
//         break;
    
// }
//20
// let letra = prompt('Ingresa una letra')

// if ( letra == 'N' || letra == 'n' || letra == 'S' || letra == 's'){
//     console.log(letra)
// }else{
//     console.log('Error')
// }
//17

// let sueldoManager = 20000
// let tuSueldo = prompt('Ingresa tu sueldo: ')

// tuSueldo = 100*tuSueldo/sueldoManager
// console.log(`el procentaje es  ${tuSueldo}% de ${sueldoManager}`)
//17




// Quiero ingresar numeros hasta que ingrese 
// el valor cero, y cada que
// ingrese un nuevo valor, 
// se acumule y me muestre su suma
 

// let c= 0 
 
// for (let i=0;i < 10;i++){
//     let f = prompt('Ingresar numero')
//     if (Number(f)!=0){   

//         c = Number(f)+ c
//         console.log(c)

//     }else if (Number(f)== 0){
        
//         console.log(c)
//         i=10
//     }
//  }
//14

 // ingresar un numero y validad + o - o 0 o si es letra
//  let f = prompt('Ingresar numero')

// if(Number(f)<0){
//         console.log('Numero negativo')
//      }else if(Number(f)>0){
//         console.log('Numero Positivo wuuuu')
//      }else if(Number(f)==0){
//          console.log('El numero 0')
//      }else {
//         console.log('Es una letra') if(typeof f == String)
//      }
//17

// let v = prompt('Ingresar numero')
// if(Number(v) == 0){
//     console.log('es 0')
// }else if(Number(v)%2 == 0 ){
//     console.log('es par')
// }else if(Number(v)%2 != 0 ){
//     console.log('es impar')
// }else{
//     console.log('no es numero ')
// }
//18

//Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
//A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
//sólo por minúsculas o por una mezcla de ambas.
// let tx = prompt('Ingresa numero')
// //  toUpperCase = mayuscula
// //  toLowerCase = minuscula
//  for(let i=0; i<x.length ; i++){
//     let mayu= x[i]
//     if(mayu == mayu.toUpperCase()){
//         console.log('tiene Mayuscula REOCHATUMADRE en' )
//     }else if(mayu== mayu.toLowerCase()){
//         console.log('Tiene Minuscula CTMRE')
//     }else{
//         console.log ('MIXTA')
//     }
//  }

// let edad2 = 17

// while(edad2 > 17){
//     console.log('Ingreaste')
// }
// ///////////////////

// do{
//     let edad = prompt('Cual es tu edad')
    
// }while(edad<18)
//  }
// let area = prompt('Ingresa 0 pa triangulo o 1 pa cuadrado :v')


// if(Number(area) == 0){
//     let var1= prompt('Ingresa base')
//     let var2= prompt('ingresa altura')
//     let var4= Number(var1)*Number(var2)/2
//         console.log(`el area es ${var4}`)
//     }else if(Number(area) == 1){
//         let var3= prompt('ingresa lado')
//         let var5= Number(var3)*Number(var3)
//         console.log(`el area es ${var5}`)
//     }else{
//         console.log('no es ninguna de las opciones conchatumadre')
// }


// let animales = ['Gato','Perro','Conejo']
// // animales.push('Ratón')

// //push() = agregar elementos
// //length = ver la cantidad de elementos (desde 1)
// //pop()  = ver el ultimo elemento    
//sort() - ordena de manera ascendente
//include() - busca elementos en un array
// join() - une todos los elementos de un array como string

// // console.log(animales[animales.length-1]);
// console.log(animales.pop());


// let textoc= prompt('Ingrese textiño')
// let list=[]
// for(let i=0; i<textoc.length; i++){
  
//     switch(textoc[i].toLowerCase()){
//         case 'a':
//             list.push(textoc[i])
//             break;
//         case 'e':
//             list.push(textoc[i])
//             break;
//         case 'i':
//             list.push(textoc[i])
//             break;
//         case 'o':
//             list.push(textoc[i])
//             break;
//         case 'u':
//             list.push(textoc[i])
//     }

// }console.log(list.join('-'))

// function suma(a,b){
//     let misuma=a + b
//     return misuma
// }

// let suma = suma(8+7)
// console.log(suma);

//Elegir si es Multiplicacion[0] Suma[1] Resta[2]
//Con una funcion que tenga los parametros(num1,num2,operador)
//Mostrar resultado en console.log()

// console.log(`El resultado de la Multiplicacion es ${multi}`)

// let nume= prompt("Elegir\n[0] si es Multiplicacion\n[1] si es Suma\n[2] si es Resta")
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


