import { Component, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { SinnerQueryResponse } from '../../services/fake-limbus-api/fake-limbus-api.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.css'
})
export class SearchFilterComponent implements OnInit {
  @Input() sinners: SinnerQueryResponse = { sinner_list: [] };
  @Input() baseSinners: SinnerQueryResponse = { sinner_list: [] };
  @Output() onFilterChange = new EventEmitter<SinnerQueryResponse>();
  filteredSinners: SinnerQueryResponse = { sinner_list: [] };

  public inputPlaceholder: string = "Search by name";
  public searchFilter: string = "name";
  public inputText: string = '';

  constructor() {}

  ngOnInit(): void {
    this.filteredSinners = this.baseSinners;
  }

  public updateFilter(newFilter: string) {
    this.inputText = '';
    this.searchFilter = newFilter;
    this.inputPlaceholder = "Search by " + newFilter;
  }

  public filterSinners() {
    switch (this.searchFilter) {
      case "name":
        this.filteredSinners.sinner_list = this.sinners.sinner_list.filter(sinner => sinner.name.toLowerCase().includes(this.inputText.toLowerCase()));
        break;
      case "keyword":
        this.filteredSinners.sinner_list = this.sinners.sinner_list.filter(sinner => sinner.base_identity.keywords.some(keyword => keyword.includes(this.inputText.toLowerCase())));
        break;
    }
    console.log('filteredSinners : ');
    console.log(this.filteredSinners);
    console.log('this.sinners : ');
    console.log(this.sinners);
    this.onFilterChange.emit(this.filteredSinners);
  }
}
