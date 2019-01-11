import { Component, OnInit } from '@angular/core';
import { FightService } from '../fight/fight.service';

@Component({
  selector: 'app-birdman',
  templateUrl: './birdman.component.html',
  styleUrls: ['./birdman.component.css']
})
export class BirdmanComponent implements OnInit {

  name = 'Birdman';

  constructor(private fightService: FightService) { }

  ngOnInit(): void {
  }
}
