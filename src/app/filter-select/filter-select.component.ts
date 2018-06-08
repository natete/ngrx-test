import { Component, EventEmitter, Output } from '@angular/core';
import { PartyFilterActionType } from './party-filter.action-type';

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.css']
})
export class FilterSelectComponent {

  filters = [
    { friendly: 'All', action: PartyFilterActionType.SHOW_ALL },
    { friendly: 'Attending', action: PartyFilterActionType.SHOW_ATTENDING },
    { friendly: 'Attending w/ Guests', action: PartyFilterActionType.SHOW_WITH_GUESTS }
  ];

  @Output() updateFilter = new EventEmitter<string>();
}
