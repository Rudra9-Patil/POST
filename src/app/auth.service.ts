import { APP_ID, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  appId = "62907a7cc1fbfb9a270f4060";
  constructor(private http: HttpClient) {

  }

  getData(id: any) {
    return this.http.get('https://dummyapi.io/data/v1/post?limit=10', {
      headers: { 'app-id': this.appId },
    });
  }
  addData(formData: any, id: any) {
    console.log(formData);
    return this.http.post('https://dummyapi.io/data/v1/post/create', formData, { headers: new HttpHeaders({ 'app-id': this.appId }) })
  }

  tagsData(id: any) {
    return this.http.get('https://dummyapi.io/data/v1/tag', {
      headers: { 'app-id': this.appId },
    });
  }

  updatePost(id: any, formData: any) {
    console.log(formData);
    return this.http.put(`https://dummyapi.io/data/v1/post/${id}`, formData, {
      headers: { 'app-id': this.appId },
    })
  }
  deletePost(id: any) {
    return this.http.delete(`https://dummyapi.io/data/v1/post/${id}`, {
      headers: { 'app-id': this.appId },
    })
  }
}
