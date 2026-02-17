import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, TranslateModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  experiences: any[] = [];
  currentLang: string = 'en';

  constructor(
    private dataService: DataService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.currentLang = this.translate.currentLang || 'en';
    
    this.dataService.getExperienceData().subscribe(data => {
      this.experiences = data;
    });

    this.translate.onLangChange.subscribe(() => {
      this.currentLang = this.translate.currentLang;
    });
  }

  getText(field: any): string {
    if (typeof field === 'string') return field;
    return field[this.currentLang] || field.en;
  }
}
