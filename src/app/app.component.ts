import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ClimaService } from 'src/service/clima.service';
import { ClimaComponent } from 'src/app/clima/clima.component'
import { Forecast } from './forecast'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  parisData: any;
  weatherData: any;
  dataClima :any;
  constructor(){

  }

  async ngOnInit()  {
    this.getWeatherData();
    console.log(this.dataClima);
    this.getFranciaData();
    console.log(this.weatherData);
    this.getParisData();
    console.log(this.parisData);
    
    

    
  }

  getWeatherData(){
    let data = JSON.parse('{"coord":{"lon":-74.0299,"lat":40.8762},"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],"base":"stations","main":{"temp":283.7,"feels_like":282.79,"temp_min":282.04,"temp_max":285.15,"pressure":1011,"humidity":76},"visibility":10000,"wind":{"speed":4.12,"deg":90},"clouds":{"all":90},"dt":1620487735,"sys":{"type":1,"id":6015,"country":"US","sunrise":1620467139,"sunset":1620518373},"timezone":-14400,"id":5095808,"name":"Bogota","cod":200}');
    this.setWeatherData(data);
  }

  setWeatherData(data) {
    this.dataClima = data;
    this.dataClima.name;
    this.dataClima.sys.sunrise;
    let sunsetTime = new Date(this.dataClima.sys.sunset * 1000);
    this.dataClima.sunset_time = sunsetTime.toLocaleDateString();
    let currentDate = new Date();
    this.dataClima.isDay = (currentDate.getTime() <sunsetTime.getTime() );
    this.dataClima.isDay = (currentDate.getTime() < sunsetTime.getTime() );
    this.dataClima.temp_celcius = (this.dataClima.main.temp - 273.15).toFixed(0);
    this.dataClima.temp_min = (this.dataClima.main.temp_min - 273.15).toFixed(0);
    this.dataClima.temp_max = (this.dataClima.main.temp_max - 273.15).toFixed(0);
    this.dataClima.pressure = (this.dataClima.main.pressure - 273.15).toFixed(0);
    this.dataClima.humidity = (this.dataClima.main.humidity - 273.15).toFixed(0);
    this.dataClima.temp_feels_like = (this.dataClima.main.temp_feels_like - 273.15).toFixed(0);


  }

  getFranciaData() {
    let dato = JSON.parse('{"coord":{"lon":-76.0747,"lat":41.1751},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":282.79,"feels_like":281.43,"temp_min":282.04,"temp_max":283.15,"pressure":1012,"humidity":67},"visibility":10000,"wind":{"speed":2.68,"deg":358,"gust":3.13},"clouds":{"all":100},"dt":1620506828,"sys":{"type":3,"id":2033998,"country":"US","sunrise":1620467587,"sunset":1620518906},"timezone":-14400,"id":5191279,"name":"Glen Lyon","cod":200}');
    this.setFranciaData(dato);
  }

  setFranciaData(dato) {
    this.weatherData = dato;
    this.weatherData.name;
    this.weatherData.sys.sunrise;
    let sunsetTime = new Date(this.weatherData.sys.sunset * 1000);
    this.weatherData.sunset_time = sunsetTime.toLocaleDateString();
    let currentDate = new Date();
    this.weatherData.isDay = (currentDate.getTime() <sunsetTime.getTime() );
    this.weatherData.isDay = (currentDate.getTime() < sunsetTime.getTime() );
    this.weatherData.temp_celcius = (this.weatherData.main.temp - 273.15).toFixed(0);
    this.weatherData.temp_min = (this.weatherData.main.temp_min - 273.15).toFixed(0);
    this.weatherData.temp_max = (this.weatherData.main.temp_max - 273.15).toFixed(0);
    this.weatherData.pressure = (this.weatherData.main.pressure - 273.15).toFixed(0);
    this.weatherData.humidity = (this.weatherData.main.humidity - 273.15).toFixed(0);
    this.weatherData.temp_feels_like = (this.weatherData.main.temp_feels_like - 273.15).toFixed(0);

    
  }
  getParisData(){
    let dato = JSON.parse('{"coord":{"lon":-111.401,"lat":42.2272},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":280.49,"feels_like":278.11,"temp_min":279.82,"temp_max":280.93,"pressure":1016,"humidity":34},"visibility":10000,"wind":{"speed":3.58,"deg":210,"gust":8.05},"clouds":{"all":3},"dt":1620507702,"sys":{"type":3,"id":2004052,"country":"US","sunrise":1620475907,"sunset":1620527542},"timezone":-21600,"id":5603240,"name":"Paris","cod":200}');
    this.setParisData(dato);
  }

  setParisData(dato) {
    this.parisData = dato;
    this.parisData.name;
    this.parisData.sys.sunrise;
    let sunsetTime = new Date(this.weatherData.sys.sunset * 1000);
    this.parisData.sunset_time = sunsetTime.toLocaleDateString();
    let currentDate = new Date();
    this.parisData.isDay = (currentDate.getTime() <sunsetTime.getTime() );
    this.parisData.isDay = (currentDate.getTime() < sunsetTime.getTime() );
    this.parisData.temp_celcius = (this.parisData.main.temp - 273.15).toFixed(0);
    this.parisData.temp_min = (this.parisData.main.temp_min - 273.15).toFixed(0);
    this.parisData.temp_max = (this.parisData.main.temp_max - 273.15).toFixed(0);
    this.parisData.pressure = (this.parisData.main.pressure - 273.15).toFixed(0);
    this.parisData.humidity = (this.parisData.main.humidity - 273.15).toFixed(0);
    this.parisData.temp_feels_like = (this.parisData.main.temp_feels_like - 273.15).toFixed(0);
  }












  title = 'test';
}
