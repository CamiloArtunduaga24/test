import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent implements OnInit {
  @Input() detalles: any
  constructor() { }

  resolverImagen() {
    return `assets/${this.detalles.weather}.png`;
    console.log(this.detalles);
    
  }

  ngOnInit(): void {
  }

}
