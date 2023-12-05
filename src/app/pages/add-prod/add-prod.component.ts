import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { ProdService } from 'src/app/shared/prod.service';

@Component({
  selector: 'app-add-prod',
  templateUrl: './add-prod.component.html',
  styleUrls: ['./add-prod.component.css']
})
export class AddProdComponent {

  addForm: FormGroup;

  constructor(private fb:FormBuilder, private ProdService:ProdService){ //Aquí me dedico a inicilizar el formulario vacío
    this.addForm = this.fb.group({
      fecha: [''],
      cantidad: [''],
    })
  }

  onSubmit():void{
    const formData = this.addForm.value;
    console.log(formData);
    this.ProdService.addProd(formData).subscribe((data)=>{ //Enviamos los valores del formulario al que renombramos como "formData"
      console.log(data)
    });
    alert("Producción añadida correctamente")
    }
  }

