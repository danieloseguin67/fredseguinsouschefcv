import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  services: any[] = [];
  currentLang: string = 'en';

  constructor(
    private dataService: DataService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.currentLang = this.translate.currentLang || 'en';
    
    this.dataService.getServicesData().subscribe(data => {
      this.services = data;
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
