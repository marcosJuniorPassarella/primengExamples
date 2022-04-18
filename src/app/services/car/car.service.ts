import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableDatas } from '../../components/table/table.component';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private http: HttpClient) {}

  getCars(): Observable<any> {
    return this.http.get<TableDatas>('https://reqres.in/api/products/3');
  }
}
