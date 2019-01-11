import { Component, OnInit } from '@angular/core';
import { FightService } from './fight/fight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';
  win: boolean;
  constructor(public fightService: FightService) {
  }

  ngOnInit(): void {
    console.log(this.fightService.isWinner);
  //  this.win = this.fightService.health === 0 ? true : false;
  //  console.log(this.win);
  }
}
