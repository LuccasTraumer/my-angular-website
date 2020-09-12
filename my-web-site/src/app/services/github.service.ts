import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { environment } from './../../environments/environment.dev';
import { RepositoryTO } from './../components/utils/repositoryTO';
import { UserTO } from '../components/utils/userTO';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  userData: UserTO;
  repo: RepositoryTO[];

  constructor(private http: HttpClient) {
  }

  OnInit() {
  }

  load(){
  }

  public getUser(): Observable<UserTO> {
    return this.http.get<UserTO>(environment.url_github_user);
  }

  fillUser(): Observable<UserTO> {
    return  this.http.get<UserTO>(environment.url_github_user);
  }

  getRepository(): Observable<RepositoryTO[]> {
    return this.http.get<RepositoryTO[]>(environment.url_github_reps);
  }

}
