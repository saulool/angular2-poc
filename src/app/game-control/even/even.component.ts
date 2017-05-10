import { Component, DoCheck } from '@angular/core';
import { GameControlService } from '../game-control.service';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent {

  constructor(private gameControlService: GameControlService) { }

  number: number;

  ngDoCheck() {
  	this.number = this.gameControlService.getCurrentNumber();
  }

}
