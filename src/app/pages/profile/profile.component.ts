import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from '../../components/course-card/course-card.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  ngOnInit(): void {
    console.log('profile loaded');
  }
}
