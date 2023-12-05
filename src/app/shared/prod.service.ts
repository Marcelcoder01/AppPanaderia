import { Injectable } from '@angular/core';
import {Observable } from 'rxjs'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Produccion } from '../models/prod/prod.module';


@Injectable({
  providedIn: 'root'
})
export class ProdService {

  private url = "http://localhost:3000/"

  public prod: Produccion[] = [];

  constructor(private http: HttpClient) {  }

  //Función para obtener todas las producciones
  getProd():Observable<Produccion[]>{
    return this.http.get<Produccion[]>(this.url + "all")
  }

  //Función para obtener las producciones entre las dos fechas introducidas
  getSomeProd(date1:string, date2:string):Observable<Produccion[]>{
    const params = new HttpParams()
    .set('date1', date1)
    .set('date2', date2);

    //enviamos como params date1 y date2, las dos fechas que recibimos desde el componente

  return this.http.get<Produccion[]>(this.url + 'produccion', { params });
  }

  //Función para añadir una nueva producción
  addProd(produccion:Produccion):Observable<any>{
    return this.http.post<any>(this.url + 'produccion', produccion);
  }


}
