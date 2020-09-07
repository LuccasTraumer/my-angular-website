import { environment } from './../../../environments/environment';
import { RepositoryTO } from './../utils/repositoryTO';
import { GithubService } from './../../services/github.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserTO } from '../utils/userTO';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css', '../../styles/styles.scss']
})
export class PostComponent implements OnInit, OnChanges {

  private user: UserTO;
  description = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.';
  nameProject = 'Nome Projeto';
  techs = 'Angular 8, Spring Boot';

  @Input()
  project: string = undefined;

  constructor(private service: GithubService) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }

  setImage(): string {
    switch (this.project){
      case 'AirCnC':
        return environment.photo_repo_aircnc;
      case 'twitter_data_covid-19':
        return environment.photo_repo_covid;
      case 'Post_Blog':
        return environment.photo_repo_postblog;
      case 'remade_random_websites':
        return environment.photo_repo_random;
      case 'Download-Youtube_videos':
        return environment.photo_501_NotImpl;
        case 'ConversorEscrita':
          return environment.photo_501_NotImpl;

    }
  }

  ngOnInit(): void {
    this.service.getRepository().subscribe((repo: RepositoryTO[]) => {
      if (this.project !== undefined) {
        repo.forEach(element => {
          if (element.name === this.project) {
            this.description = element.description;
            this.nameProject = element.name;
            this.techs = element.language;
          }
        });
        this.setImage();
      }
    });

  }

}
