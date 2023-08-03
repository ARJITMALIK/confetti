import { Component, AfterViewInit } from '@angular/core';

interface SenseSymbolsInterface {
  danger: NestSenseSymbol;
  heal: NestSenseSymbol;
  poison: NestSenseSymbol;
  burn: NestSenseSymbol;
  death: NestSenseSymbol;
}

interface NestSenseSymbol {
  symbol: string;
  color: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'confetti';

  public sense_symbols: SenseSymbolsInterface = {
    danger: {
      symbol: '危',
      color: '#dc3542',
    },
    heal: {
      symbol: '治',
      color: '#9df5c6',
    },
    poison: {
      symbol: '毒',
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

  public senseSymbol: NestSenseSymbol = { symbol: '', color: 'transparent' };
  public displaySense: boolean = false;

  public selectSoundEffect = new Audio();
  public clickSoundEffect = new Audio();

  ngAfterViewInit(): void {
    this.selectSoundEffect.src = '../assets/sounds/select.mp3';
    this.clickSoundEffect.src = '../assets/sounds/click.mp3';
    this.selectSoundEffect.load();
    this.clickSoundEffect.load();
  }

  onMouseHover(): void {
    this.selectSoundEffect.currentTime = 0;
    this.selectSoundEffect.play();
  }

  onClick(): void {
    this.clickSoundEffect.currentTime = 0;
    this.clickSoundEffect.play();
  }

  showSense(currentSense: NestSenseSymbol): void {
    this.displaySense = true;
    this.senseSymbol = currentSense;
    setTimeout(() => {
      this.displaySense = false;
      this.senseSymbol = { symbol: '', color: 'transparent' };
    }, 2000);
  }

  setSenseStyle() {
    return {
      color: 'white',
      textShadow: `${this.senseSymbol.color} 0 5px 10px, ${this.senseSymbol.color} 0 5px 20px, ${this.senseSymbol.color} 0 5px 50px`,
      transition: 'all 0.2s linear 0s',
      transform: 'scale(1.5)',
    };
  }
}
