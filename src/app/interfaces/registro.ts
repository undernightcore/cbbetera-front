export interface Registro {
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  direccion: string;
  poblacion: string;
  codigoPostal: string;
  provincia: string;
  telefono1: string;
  telefono2?: string;
  email: string;
  dni: string;
  observaciones?: string;
  temporada: string;
  categoria: categoriaEnum;
  conforme: boolean;
  domiciliacion: boolean;

}

export enum categoriaEnum {
  SENIOR = 'pNBd6PhYZxxL5fg',
  JUNIOR = 'Mk8CDmCud82pqfZ',
  CADETE = 'vcLkYMbvuvxJ1iv',
  INFANTIL = 'V2j6AWgawlz7oXR',
  ALEVIN = 'PDpTn8t6SGShGGG',
  BABY = 'iFJSiaTfT30T22T',
  BENJAMIN = '6SsO7exn7P0hIb9',
  PRE_BENJAMIN = 'lI9DJWRrbBkL168'
}
