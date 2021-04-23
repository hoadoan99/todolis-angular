import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations:[
    trigger('fade',[
        // state(),
        transition('void => *',[
          style({
            opacity: 0
          }),
          animate(2000)
        ]),
        transition('* => void',[
          animate(2000, style({opacity: 0}))
        ])
    ])
  ]
})
export class ListComponent implements OnInit {

  jobLists =[
    {
      name: "To do",
      job:[
        'Get to work',
        'Pick up groceries',
        'Go home',
        'Fall asleep'
      ],
      newJob: ''
    },
    {
      name: "Doing",
      job: [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog'
      ],
      newJob: ''
    },
  ];
  // todo = [
  //   'Get to work',
  //   'Pick up groceries',
  //   'Go home',
  //   'Fall asleep'
  // ];

  // done = [
  //   'Get up',
  //   'Brush teeth',
  //   'Take a shower',
  //   'Check e-mail',
  //   'Walk dog'
  // ];

  // deadline = [
  //   'Monday',
  //   'Tuesday',
  //   'Friday',
  //   'Sunday'
  // ];

  constructor() { }

  ngOnInit(): void {
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  addNewJob(index: number, value: string){
        // alert(index +'.'+value);
        this.jobLists[index].job.push(value);
    }
}
