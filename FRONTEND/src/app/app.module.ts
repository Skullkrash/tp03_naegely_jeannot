import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListeComponent } from './liste/liste.component';
import { FakeLimbusApiService } from './services/fake-limbus-api/fake-limbus-api.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterComponent } from './search-filter/search-filter/search-filter.component';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent, 
    ListeComponent,
    SearchFilterComponent,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    FakeLimbusApiService
  ],
})
export class AppModule {}