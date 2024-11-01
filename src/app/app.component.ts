import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FakeLimbusApiService } from './services/fake-limbus-api/fake-limbus-api.service';
import { SinnerQueryResponse } from './services/fake-limbus-api/fake-limbus-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  public sinners: SinnerQueryResponse = { sinner_list: [] };
  public filteredSinners: SinnerQueryResponse = { sinner_list: [] };
  public displayedSinners: SinnerQueryResponse = { sinner_list: [] };


  constructor(private fakeLimbusAPI: FakeLimbusApiService) {}

  ngOnInit(): void {
    this.fakeLimbusAPI.getClients().subscribe((sinners: SinnerQueryResponse) => {
      this.sinners = sinners;
      this.filteredSinners = sinners;
      this.displayedSinners = sinners;
    })
  }

  public updateDisplayedSinners(event: SinnerQueryResponse) {
    this.displayedSinners = event;
  }
}
