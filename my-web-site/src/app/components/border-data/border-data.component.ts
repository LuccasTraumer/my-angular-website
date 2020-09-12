import { environment } from './../../../environments/environment.dev';
import { RepositoryTO } from './../utils/repositoryTO';
import { GithubService } from './../../services/github.service';
import { UserTO } from './../utils/userTO';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-border-data',
  templateUrl: './border-data.component.html',
  styleUrls: ['../../styles/styles.scss', './border-data.component.css']
})
export class BorderDataComponent implements OnInit, OnChanges {

  public user: UserTO;
  descriptionMySelf = 'Talk about my self';

  constructor(private service: GithubService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.service.getUser().subscribe((user) => {
      this.user = user;
      this.descriptionMySelf = user.bio;

    });
    this.service.getRepository().subscribe((repo: RepositoryTO[]) => {
      this.user.repository = repo;
    });
  }

  getFacebookIcon(): string {
    return environment.iconFacebook;
  }

  getInstagramIcon(): string {
    return environment.iconInstagram;
  }

  getTwitterIcon(): string {
    return environment.iconTwitter;
  }

  getLinkedinIcon(): string {
    return environment.iconLinkedin;
  }

  getGithubIcon(): string {
    return environment.iconGithub;
  }
}
