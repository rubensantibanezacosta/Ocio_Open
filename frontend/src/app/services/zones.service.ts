import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VariablesService } from 'src/config/config';


@Injectable({
  providedIn: 'root'
})
export class ZonesService {
  variables= this.variablesService.getVariables();
  endpoint = this.variablesService.variables.host + '/api/zone';
  bearerToken = localStorage.getItem("ocioToken");
  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.bearerToken}` }
    )
  };
  constructor(private httpClient:HttpClient, private variablesService:VariablesService) { }

  getAllZones():Observable<Zone[]>{
    return this.httpClient.get<Zone[]>(this.endpoint, this.httpOptions)
  }

  
}
