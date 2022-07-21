import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Registro} from "../../interfaces/registro";
import {RegistroService} from "../../services/registro.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  registroForm = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    fechaNacimiento: new FormControl(''),
    direccion: new FormControl(''),
    poblacion: new FormControl(''),
    codigoPostal: new FormControl(''),
    provincia: new FormControl(''),
    telefono1: new FormControl(''),
    telefono2: new FormControl(''),
    email: new FormControl(''),
    dni: new FormControl(''),
    observaciones: new FormControl(''),
    temporada: new FormControl(''),
    categoria: new FormControl(''),
    conforme: new FormControl(false),
    domiciliacion: new FormControl(false)
  });

  constructor(private registroService: RegistroService) { }

  submitForm() {
    this.registroService.saveRegistro(this.registroForm.value as Registro)
      .subscribe({
        next: (registroGuardado) => {
          console.log('Se ha guardado correctamente')
        },
        error: (error) => {
          console.log('Ha habido un error')
        }
      })
  }

}
