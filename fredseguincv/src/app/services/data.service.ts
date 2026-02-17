import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCarouselData(): Observable<any> {
    return this.http.get('assets/data/carousel.json');
  }

  getExperienceData(): Observable<any> {
    return this.http.get('assets/data/experience.json');
  }

  getSkillsData(): Observable<any> {
    return this.http.get('assets/data/skills.json');
  }

  getServicesData(): Observable<any> {
    return this.http.get('assets/data/services.json');
  }

  getAboutData(): Observable<any> {
    return this.http.get('assets/data/about.json');
  }
}
