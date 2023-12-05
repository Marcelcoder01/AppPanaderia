import { Component } from '@angular/core';
import { Produccion } from 'src/app/models/prod/prod.module';
import { ProdService } from 'src/app/shared/prod.service';


@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent {

 production: Produccion[]  = []

 date1:Date = new Date();
 date2:Date = new Date();


constructor(private ProdService: ProdService){
  this.ProdService.getProd().subscribe((data)=>{
    this.production = data;
  });
}
//Aquí enviamoslas al servicio dos fechas que hemos recogido en el html,
//primero convirtiendolas a cadenas de string en el formato ISO, usando el split('T')[0]
//para usar solo el parámetro de la fecha y no el de la hora
Search(date1:Date, date2:Date){
  const isoDate1 = new Date(this.date1).toISOString().split('T')[0];
  const isoDate2 = new Date(this.date2).toISOString().split('T')[0];

  this.ProdService.getSomeProd(isoDate1, isoDate2).subscribe((data)=>{
    this.production = data
  })
}

}
