import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-party-stats',
  templateUrl: './party-stats.component.html',
  styleUrls: ['./party-stats.component.css']
})
export class PartyStatsComponent {

  @Input() invited: number;
  @Input() attending: number;
  @Input() guests: number;
}
