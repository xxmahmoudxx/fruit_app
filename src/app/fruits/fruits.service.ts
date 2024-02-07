import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruits } from './fruits';
import { CategorysModule } from '../categorys/categorys.module';
import { Categorys } from '../categorys/categorys';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor(private http:HttpClient) { }

get() {
  return this.http.get<Fruits[]>('http://localhost:8080/article');
}
create(payload: Fruits) {
  return this.http.post<Fruits>('http://localhost:8080/article', payload);
}
getById(id: number) {
  return this.http.get<Fruits>(`http://localhost:8080/article/${id}`);
 }
  
 update(payload:Fruits){
  return this.http.put(`http://localhost:8080/article`,payload);
 }
 delete(id:number){
  return this.http.delete<Fruits>(`http://8080/article/${id}`);
}
getAllcategorys(){
return this.http.get<Categorys>('http://localhost:8080/category');
}

}