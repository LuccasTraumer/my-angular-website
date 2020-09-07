import { RepositoryTO } from './../utils/repositoryTO';
import { GithubService } from './../../services/github.service';
import { UserTO } from './../utils/userTO';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-border-data',
  templateUrl: './border-data.component.html',
  styleUrls: ['../../styles/styles.scss', './border-data.component.css']
})
export class BorderDataComponent implements OnInit {

  public user: UserTO;

  constructor(private service: GithubService) {

   }

  ngOnInit(): void {
    this.service.getUser().subscribe((user) => {
      this.user = user;
    });
    this.service.getRepository().subscribe((repo: RepositoryTO[]) => {
      this.user.repository = repo;
    });
  }

}
