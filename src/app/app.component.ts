import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'to the Retro Barcode Generator app';
  boxArray = [];
  colorTheArray() {
    for(let y = 0; y < 10; y++) {
    const randNum = (Math.floor(Math.random() * 5) +1);
    if (randNum === 1) {
      this.boxArray.push('DeepPink ');
    } else if (randNum === 2) {
      this.boxArray.push('Chartreuse ');
    } else if (randNum === 3) {
      this.boxArray.push('DarkGray ');
    } else if (randNum === 4) {
      this.boxArray.push('PaleGreen ');
    } else if (randNum === 5) {
      this.boxArray.push('DeepSkyBlue ');
    } else if (randNum === 6) {
      this.boxArray.push('Fuchsia ');
    } else if (randNum === 7) {
      this.boxArray.push('GreenYellow ');
    } else if (randNum === 8) {
      this.boxArray.push('Red ');
    } else if (randNum === 9) {
      this.boxArray.push('Green ');
    }
  }
}
ngOnInit() {
  this.colorTheArray();
}
}
