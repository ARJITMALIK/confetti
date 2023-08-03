import { Component, AfterViewInit } from '@angular/core';
import { SenseService } from './services/sense.service';

import './interfaces/sense';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'confetti';

  public selectSoundEffect = new Audio();
  public clickSoundEffect = new Audio();

  constructor(public senses: SenseService) {}

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

  onClick(sense: SensePropertyInterface): void {
    this.senses.showSense(sense);
    this.clickSoundEffect.currentTime = 0;
    this.clickSoundEffect.play();
  }
}
