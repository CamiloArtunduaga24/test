import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  private RUTA_API_UBICACION = "https://api.openweathermap.org/data/2.5/forecast?id=5095808&appid=06241581c003e168e0afcfc3a352c393";
  constructor() { }

  async obtenerDatosUbicacion() {
    const response = await fetch(this.RUTA_API_UBICACION);
    return await response.json();
  }
  async obtenerDatosDeClima(longitude: string, latitude: string) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=40.876209&lon=-74.029861&appid=06241581c003e168e0afcfc3a352c393`);
    return await response.json();
  }

  parsearFecha(value) {
    value = "" + value;
    if (!value) {
      return "";
    }
    let anio = value.substring(0, 4);
    let mes = value.substring(4, 6);
    let dia = value.substring(6, 8);
    return anio + "-" + mes + "-" + dia;
  }

  setClima() {
    
  }
}
