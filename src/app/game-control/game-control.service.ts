export class GameControlService {
	private currentNumber: number;
	private generatedNumbers: object[] = [];

	setCurrentNumber(newNumber:number) {
		this.currentNumber = newNumber;
	}

	getCurrentNumber() {
		return this.currentNumber;
	}

	addNumberToHistory(number: object) {
		this.generatedNumbers.push(number);
	}

	getNumberHistory() {
		return this.generatedNumbers;
	}
}