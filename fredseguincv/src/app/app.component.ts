import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Fred Seguin - Sous Chef';
  currentYear = new Date().getFullYear();

  constructor(private translate: TranslateService) {
    // Set up available languages
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = this.translate.getBrowserLang();
    
    // Use saved language, or browser language if it's en/fr, otherwise default to en
    const langToUse = savedLang || 
                     (browserLang && ['en', 'fr'].includes(browserLang) ? browserLang : 'en');
    
    this.translate.use(langToUse);
  }
}
