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
  }

  teste2() {
  }

}
