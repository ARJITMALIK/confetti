import { Injectable } from '@angular/core';
import '../interfaces/sense';

@Injectable({
  providedIn: 'root',
})
export class SenseService {
  public currentSense: SensePropertyInterface = {
    symbol: '',
    color: 'transparent',
  };

  public senseSymbols: SenseInterface = {
    danger: {
      symbol: '危',
      color: '#dc3542',
    },
    heal: {
      symbol: '治',
      color: '#9df5c6',
    },
    poison: {
      symbol: '生',
      color: 'green',
    },
    burn: {
      symbol: '炎',
      color: 'orange',
    },
    death: {
      symbol: '死',
      color: '#df4650',
    },
  };

  public displaySense: boolean = false;

  constructor() {}

  showSense(sense: SensePropertyInterface): void {
    this.displaySense = true;
    this.currentSense = sense;
    setTimeout(() => {
      this.displaySense = false;
      this.currentSense = { symbol: '', color: 'transparent' };
    }, 3000);
  }

  setSenseStyle() {
    return {
      color: 'white',
      textShadow: `${this.currentSense.color} 0 5px 10px, ${this.currentSense.color} 0 5px 20px, ${this.currentSense.color} 0 5px 50px`,
      transition: 'all 0.2s linear 0s',
      transform: 'scale(1.5)',
    };
  }
}
