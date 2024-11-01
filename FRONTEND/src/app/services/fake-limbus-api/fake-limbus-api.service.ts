import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Sinner } from '../../models/sinner';

export interface SinnerQueryResponse {
  sinner_list: Sinner[];
}

@Injectable({
  providedIn: 'root'
})
export class FakeLimbusApiService {
  constructor(private httpService:HttpClient) { }

  public getClients () : Observable<SinnerQueryResponse> {
    return this.httpService.get<SinnerQueryResponse>(environment.backendClient);
  }
}
