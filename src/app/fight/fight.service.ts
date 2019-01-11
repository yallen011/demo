import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FightService {

  health = 10;
  isWinner = false;
  constructor() { }

  attack() {
    this.health -= 5;
    if ( this.health === 0) {
      this.isWinner = true;
    }
    console.log(this.health);
  }
}
