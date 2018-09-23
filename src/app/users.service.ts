import { Injectable } from '@angular/core';

export interface User {

  id: number;
  name: string;
  location: string;
  interests: string[];
  skills: string[];
  posts: number[];

}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
}
