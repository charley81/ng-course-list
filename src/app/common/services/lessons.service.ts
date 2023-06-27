import { Injectable } from '@angular/core';
import { Lesson } from '../models/lesson';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseRouteReuseStrategy } from '@angular/router';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  model = 'lessons';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get(this.getUrl());
  }

  getUrl(): string {
    return `${BASE_URL}/${this.model}`;
  }
}
