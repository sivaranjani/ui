import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  constructor(private http:HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get(`http://localhost:8080/api/cgi/getItemList`)
  }

  getItemDetails(id: number): Observable<any> {
    return this.http.get("http://localhost:8080/api/cgi/getItemDetails/"+id);
  }


}