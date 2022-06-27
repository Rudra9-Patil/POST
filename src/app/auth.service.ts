import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {}

  getData(id: any) {
    return this.http.get('https://dummyapi.io/data/v1/post?limit=10', {
      headers: { 'app-id': id },
    });
  }
  addData(formData:any,id:any){
    console.log(formData);
    return this.http.post('https://dummyapi.io/data/v1/post/create',formData, { headers: new HttpHeaders({ 'app-id': id}) })
  }

  tagsData(id: any){
    return this.http.get('https://dummyapi.io/data/v1/tag', {
      headers: { 'app-id': id },
    });
  }
  delete(id:any,userid:any){
    return this.http.delete('https://dummyapi.io/data/v1/post',{
      headers: { 'app-id': id } ,
    })
  }
}
