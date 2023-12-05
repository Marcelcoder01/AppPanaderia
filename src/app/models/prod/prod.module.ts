//Lo hago de esta manera porque estoy usando un parámetro tipo Date y después me da problemas
//para la inicialización en el servicio, de esta forma lo puedo inicializar "vacío"


export class Produccion {
  id?: number;
  fecha?: Date;
  cantidad?: number;

  constructor(id?: number, fecha?: Date, cantidad?: number) {
    this.id = id || undefined;
    this.fecha = fecha || undefined;
    this.cantidad = cantidad || undefined;
  }
}




