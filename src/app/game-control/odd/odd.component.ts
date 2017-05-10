import { Component, DoCheck } from '@angular/core';
import { GameControlService } from '../game-control.service';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent {

  constructor(private gameControlService: GameControlService) { }

  number: number;

  ngDoCheck() {
  	this.number = this.gameControlService.getCurrentNumber();
  }

}
