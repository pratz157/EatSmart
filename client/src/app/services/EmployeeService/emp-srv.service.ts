import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee, IEmp, Auth } from './employee';
import { Observable } from 'rxjs';
import {appUrls} from '../service.config';

@Injectable({
  providedIn: 'root'
})
export class EmpSrvService {

  // private _urlString = '../assets/data/employees.json';
  private _urlString = '/api/customers/';

  constructor(private http: HttpClient) { }

  getEmployees():Observable<IEmployee[]>{
   return this.http.get<IEmployee[]>(this._urlString)
  }

  addEmployee(emp:IEmployee){
    return this.http.post<IEmployee>(appUrls.emp.newUser,emp)
   }

  validateEmployee(emp:IEmp){
    return this.http.post<Auth>(appUrls.emp.validate,emp)
  }
}
