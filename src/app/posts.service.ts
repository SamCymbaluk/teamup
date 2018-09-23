import { Injectable } from '@angular/core';

export interface Post {

  id: number;
  title: string;
  description: string;
  location: string;
  date: number;
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

  getPosts(): Post[] {
    return [];
  }
}
