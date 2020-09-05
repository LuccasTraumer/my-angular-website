import { GithubService } from './../../services/github.service';
import { Component, OnInit } from '@angular/core';
import { UserTO } from '../utils/userTO';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css', '../../styles/styles.scss']
})
export class PostComponent implements OnInit {

  private user: UserTO;

  constructor(private service: GithubService) {

  }

  ngOnInit(): void {
    this.service.getUser().subscribe((user) => {
      this.user = user;
    });
  }

}
