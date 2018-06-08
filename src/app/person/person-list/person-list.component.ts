import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonListComponent implements OnInit {


  @Input() people: Person[];
  @Output() addGuest = new EventEmitter<number>();
  @Output() removeGuest = new EventEmitter<number>();
  @Output() removePerson = new EventEmitter<number>();
  @Output() toggleAttending = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
