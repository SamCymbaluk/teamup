import { Injectable } from '@angular/core';

export interface Post {

  id: number;
  image: string;
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
      image: 'assets/img/background.png',
      title: 'TeamUp.tech',
      description: 'Looking to make a difference in communities all over the world? Help TeamUp.tech bring people together to enact positive change.',
      location: 'Hamilton, ON, Canada',
      date: '2018/09/22',
      owner: 'Sam Cymbaluk',
      owner_id: 1,
      tags: ['Collaboration', 'Volunteering', 'Social Impact'],
      skills_required: ['Web Design', 'Angular', 'Node.js', 'Postgres', 'Tensorflow'],
      resources_required: ['Funding', 'Work space']
    },
    {
      id: 2,
      image: 'assets/img/pole.jpg',
      title: 'Safety Pole',
      description: 'Focused on the distribution of safety emergency poles in both urban and remote areas to enhance customer service and support during emergencies.',
      location: 'Hamilton, ON, Canada',
      date: '2018/09/20',
      owner: 'Brian Kibazohi',
      owner_id: 2,
      tags: ['Health and Safety', 'Security', 'Emergency Assistance'],
      skills_required: ['Project Management', 'Data Science', 'Experience in settlement planning', 'Electrical Engineering', 'Civil Engineering'],
      resources_required: ['Funding', 'Emergency pole donations']
    },
    {
      id: 4,
      image: 'assets/img/power.jpg',
      title: 'Power to Change',
      description: 'We are looking forward to providing basic needs to rural areas in 3rd world coutries. Several children suffer from malnutrition and starvation every day, so we are working towards our goal in changing societies for the better',
      location: 'London, United Kingdom',
      date: '2018/09/19',
      owner: 'Michael Scott',
      owner_id: 12,
      tags: ['Social Impact', 'Poverty', 'Philanthropy', 'Sustainable Development'],
      skills_required: ['Engineering', 'Management', 'Educators', 'Problem Solving'],
      resources_required: ['Funding', 'Transport']
    },
    {
      id: 5,
      image: 'assets/img/food.jpg',
      title: 'Food Collector',
      description: 'Pickup of leftover food from events and drop off at a local stash for distribution to unprivileged neighbourhoods',
      location: 'Chennai, India',
      date: '2018/09/23',
      owner: 'Kelly Kapoor',
      owner_id: 17,
      tags: ['World Hunger', 'Volunteer', 'Community'],
      skills_required: ['Availability', 'Commitment', 'Eagerness to cause'],
      resources_required: ['Transport', 'Funding']
    },
    {
      id: 6,
      image: 'assets/img/recycle.jpg',
      title: 'ReSytecle',
      description: 'Investing in research for plastic eating fungi as an new alternative to clear plastics on land and in water bodies.',
      location: 'Vancouver, BC, Canada',
      date: '2018/09/23',
      owner: 'Shooka Ahmadi',
      owner_id: 10,
      tags: ['Social Impact', 'Recycle', 'Research', 'Innovate'],
      skills_required: ['Research', 'Biologists', 'Educators', 'Problem Solving'],
      resources_required: ['Funding', 'Lab space', 'Research Equipment']
    },
  ];

  getPosts(): Post[] {
    return this.posts;
  }
}
