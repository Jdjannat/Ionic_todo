import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddusersService {
  private apiUrl = `http://localhost:3000`

  constructor(private http: HttpClient) { }
  ngOnit() {

  }

  addUser(userData: any): Observable<any> {
    const addUsersUrl = `${this.apiUrl}/users`;
    return this.http.post(addUsersUrl, userData);
  }

  getUsers() {
    const addUsersUrl = `${this.apiUrl}/users`;
    return this.http.get(addUsersUrl);
  }

  getUserById(id: number): Observable<any> {
    // Implement your method to get a user by ID
    return this.http.get<any>(`${this.apiUrl}/users/${id}`);
  }

  updateUser(id: number, updatedUser: any): Observable<any> {
    // Implement your method to update a user
    return this.http.put<any>(`${this.apiUrl}/users/${id}`, updatedUser);
  }

  deleteUser(id: number): Observable<any> {
    const url = `${this.apiUrl}/users/${id}`;
    return this.http.delete(url);
  }
}
