import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule, TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  aboutData: any = {};
  currentLang: string = 'en';

  constructor(
    private dataService: DataService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.currentLang = this.translate.currentLang || 'en';
    
    this.dataService.getAboutData().subscribe(data => {
      this.aboutData = data;
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
