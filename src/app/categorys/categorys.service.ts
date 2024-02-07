import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorys } from './categorys';

@Injectable({
  providedIn: 'root'
})
export class CategorysService {

  constructor(private http:HttpClient) { }
  get() {
    return this.http.get<Categorys[]>('http://localhost:8080/category');
  }
  create(payload: Categorys) {
    return this.http.post<Categorys>('http://localhost:8080/category',payload);
  }
  getById(id: number) {
    return this.http.get<Categorys>(`http://localhost:8080/category/${id}`);
   }
    
   update(payload:Categorys){
    return this.http.put(`http://localhost:8080/category`,payload);
   }
   delete(id:number){
    return this.http.delete<Categorys>(`http://localhost:8080/category/${id}`);
 }
}
