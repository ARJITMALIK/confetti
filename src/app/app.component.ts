import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'confetti';

  public selectSoundEffect = new Audio();

  ngAfterViewInit(): void {
    this.selectSoundEffect.src = '../assets/sounds/select.mp3';
    this.selectSoundEffect.load();
    this.selectSoundEffect.currentTime = 0;
  }

  onMouseHover(): void {
    this.selectSoundEffect.currentTime = 0.1;

    this.selectSoundEffect.play();
  }
}
