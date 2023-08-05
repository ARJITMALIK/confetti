import { Component } from '@angular/core';
import '../interfaces/status';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss'],
})
export class HealthComponent {
  public resNodes: boolean[] = [true, true, false];

  public hp: number = 7;
  public maxHealth: number = 20;

  public status: StatusInterface = {
    poison: {
      symbol: '生',
      state: true,
    },
    burn: {
      symbol: '炎',
      state: false,
    },
  };

  addHealth(): void {
    if (this.hp < this.maxHealth) {
      this.hp++;
    }
  }

  takeDamage(): void {
    if (this.hp > 0) {
      this.hp--;
    }
  }
}
