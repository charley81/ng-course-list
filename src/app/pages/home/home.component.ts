import { Component } from '@angular/core';
import { Lesson } from 'src/app/common/models/lesson';
import { LessonsService } from 'src/app/common/services/lessons.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  selectedLesson!: Lesson | null;
  lessons: Lesson[] = [];
  lessons$: any;

  constructor(private lessonsService: LessonsService) {
    this.fetchLessons();
  }

  fetchLessons() {
    this.lessons$ = this.lessonsService.all();
  }

  selectLesson(lesson: Lesson) {
    this.selectedLesson = lesson;
  }
}
