import { Component, OnInit } from '@angular/core';
import { GameControlService } from '../game-control.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

	generatedNumbers: object[] = [];

  constructor(private gameControlService: GameControlService) { }

  ngOnInit() {
  	this.generatedNumbers = this.gameControlService.getNumberHistory();
  }

}
