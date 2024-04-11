import { Queue } from "./Queue.js";
export class Contactos{
    constructor() {
       this.objetocola = new Queue;
        
    }
    agregarcontactos(nombre,numero){
        this.objetocola.enqueue(nombre,numero)
        console.log("Agregando contacto:" +nombre + numero);
    }   
}