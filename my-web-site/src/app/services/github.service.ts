import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { UserTO } from '../components/utils/userTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  static userData: UserTO;

  constructor(private http: HttpClient) {
    this.http.get<UserTO>(environment.url_github_user);
    console.log(this.http + ' Constructor');
  }

  OnInit() {
    this.http.get<UserTO>(environment.url_github_user);
    console.log(this.http + ' On Init');
  }

  load(){
    this.http.get<UserTO>(environment.url_github_user);
    console.log(this.http + ' Load');
  }

  public getUser(): Observable<UserTO> {
    return this.http.get<UserTO>(environment.url_github_user);
  }
}
