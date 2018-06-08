import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonInputComponent } from './person/person-input/person-input.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { peopleReducer } from './person/people.reducer';
import { partyFilterReducer } from './filter-select/party-filter.reducer';
import { FilterSelectComponent } from './filter-select/filter-select.component';
import { PartyStatsComponent } from './party/party-stats/party-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonInputComponent,
    PersonListComponent,
    FilterSelectComponent,
    PartyStatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ people: peopleReducer, filter: partyFilterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
