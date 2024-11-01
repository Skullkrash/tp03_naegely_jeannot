import { Component, Input } from '@angular/core';
import { SinnerQueryResponse } from '../services/fake-limbus-api/fake-limbus-api.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent {
  constructor() {}

  @Input() sinners: SinnerQueryResponse = { sinner_list: [] };
}
