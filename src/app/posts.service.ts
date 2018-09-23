import { Injectable } from '@angular/core';

export interface Post {

  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  owner: string;
  owner_id: number;
  tags: string[];
  skills_required: string[];
  resources_required: string[];

}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  posts: Post[] = [
    {
      id: 1,
      title: 'TeamUp.tech',
      description: 'Looking to make a difference in communities all over the world? Help TeamUp.tech bring people together to enact positive change.',
      location: 'Hamilton, ON, Canada',
      date: '2018/09/22',
      owner: 'Sam Cymbaluk',
      owner_id: 1,
      tags: ['Collaboration', 'Volunteering', 'Social Impact'],
      skills_required: ['Web Design', 'Angular', 'Node.js', 'Postgres', 'Tensorflow'],
      resources_required: ['Funding', 'Work space']
    }
  ];

  getPosts(): Post[] {
    return this.posts;
  }
}
