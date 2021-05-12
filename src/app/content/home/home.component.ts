import { Component, OnInit } from '@angular/core';

import { IteratorExerciseService } from 'app/shared/services/iterator-exercise.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _iteratorExerciseService: IteratorExerciseService
  ) { }

  ngOnInit(): void {
  }

  teste1() {
    console.log('1-->: ', this._iteratorExerciseService.getRandomNumberList());
  }

  teste2() {
    const list = this._iteratorExerciseService.getRandomNumberList();

    const listOfBiggerThanAHundred = list.filter( item => item > 100 );

    console.log('2-->: ', this._iteratorExerciseService.checkBiggerThanAHundred( listOfBiggerThanAHundred ));
  }

  teste3() {
    const list = this._iteratorExerciseService.getRandomNumberList();

    const listOfDividibleByTwo = list.filter( item => {
      const restOfDivideByTwo = item % 2;
      return (restOfDivideByTwo == 0);
    })

    console.log('3-->: ', this._iteratorExerciseService.checkDivisibleByTwo(listOfDividibleByTwo));

  }
}
