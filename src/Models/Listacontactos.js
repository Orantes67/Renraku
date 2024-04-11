import { Contactos } from "./Contactos.js";
export class Listacontactos {
  constructor() {
    this.objetocontacto = new Contactos();
  }
  mostrarContactos() {
    let agendaString = "";
    if (this.objetocontacto.objetocola.isEmpty()) {
      console.log("vacio");
    }
    let currentContact = this.objetocontacto.objetocola.front;
    while (currentContact != null) {
      agendaString =
        agendaString +
        "Nombre :     " +
        currentContact.data.nombre +
        " Numero:    " +
        currentContact.data.numero +
        ", ";
      currentContact = currentContact.next;
    }
    return agendaString;
  }
  eliminarContactos() {
    let i = 0;
    let currentContact = this.objetocontacto.objetocola.dequeue();
    console.log("Primer contacto a eliminar:", currentContact);
    while (currentContact != null && i < 10000) {
      currentContact = this.objetocontacto.objetocola.dequeue();
      if (currentContact != null) {
        console.log("Siguiente contacto a eliminar:", currentContact);
      }
      i++;
    }
  }
}
