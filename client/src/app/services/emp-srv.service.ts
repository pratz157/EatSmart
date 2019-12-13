import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpSrvService {

  // private _urlString = '../assets/data/employees.json';
  private _urlString = 'http://localhost:2400/api/customers/';

  constructor(private http: HttpClient) { }

  getEmployees():Observable<IEmployee[]>{
   return this.http.get<IEmployee[]>(this._urlString)
  }
}
