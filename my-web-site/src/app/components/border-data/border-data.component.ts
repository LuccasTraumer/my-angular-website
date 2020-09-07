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

  iconFacebook = 'https://raw.githubusercontent.com/LuccasTraumer/my-angular-website/dev/my-web-site/src/assets/facebook-icon.png';
  iconInstagram = 'https://raw.githubusercontent.com/LuccasTraumer/my-angular-website/dev/my-web-site/src/assets/instagram-icon.png';
  iconGithub = 'https://raw.githubusercontent.com/LuccasTraumer/my-angular-website/dev/my-web-site/src/assets/github-icon.png';
  iconLinkedin = 'https://raw.githubusercontent.com/LuccasTraumer/my-angular-website/dev/my-web-site/src/assets/linkedin-icon.png';
  iconTwitter = 'https://raw.githubusercontent.com/LuccasTraumer/my-angular-website/dev/my-web-site/src/assets/twitter-icon.png';

  constructor(private service: GithubService) {

   }
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

}
