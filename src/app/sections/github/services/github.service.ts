import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const BASE_PATH = `https://api.github.com`;
const GITHUB_USERNAME = `dhiasaadlaui`;

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getRepositories(): Observable<any[]> {
    return this.http.get<any>(`${BASE_PATH}/users/${GITHUB_USERNAME}/repos`);
  }
}
