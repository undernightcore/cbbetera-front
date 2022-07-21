import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';
import Client from "pocketbase";
import {environment} from "../../environments/environment";
import {Registro} from "../interfaces/registro";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  client: Client;

  constructor() {
     this.client = new PocketBase(environment.backendUrl);
  }

  saveRegistro(data: Registro): Observable<Registro> {
    return new Observable<Registro>(observer => {
      this.client.Records.create('jugadores', data)
        .then(function (record) {
          observer.next(record as unknown as Registro);
          observer.complete();
        }).catch(function (error) {
          observer.error(error);
        });
    })
  }
}
