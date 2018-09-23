import { Component, OnInit } from '@angular/core';
import {Post, PostsService} from '../posts.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  projects: Post[];

  ngOnInit() {
    this.projects = this.postsService.getPosts();
  }

}
