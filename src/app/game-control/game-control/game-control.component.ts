import { Component, OnInit } from '@angular/core';
import { GameControlService } from '../game-control.service';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  constructor(private gameControlService: GameControlService) { }

  generatedNumber: number;
  timer;

  ngOnInit() {
  	this.generateNewNumber(); 
  }

  startGenerator() {
  	if(!this.timer) this.timer = setInterval(() => { this.generateNewNumber() }, 1000);
  }

  stopGenerator() {
  	clearInterval(this.timer);
  	this.timer = null;
  }

  generateNewNumber() {
  	this.generatedNumber = Math.floor((Math.random() * 100) + 1);
  	this.gameControlService.setCurrentNumber(this.generatedNumber);
  	this.gameControlService.addNumberToHistory({number: this.generatedNumber, evenOdd: this.isOdd(this.generatedNumber) ? 'Odd' : 'Even'}); 
  }

  isOdd(number: number){
  	return number % 2;
  }

}
