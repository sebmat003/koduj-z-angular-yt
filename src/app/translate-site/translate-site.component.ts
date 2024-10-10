import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate-site',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './translate-site.component.html',
  styleUrl: './translate-site.component.scss',
})
export class TranslateSiteComponent {
  readonly LANGUAGES = ['pl', 'en', 'de'];
  translateService = inject(TranslateService);

  changeLanguage(language: string) {
    this.translateService.use(language);
  }
}
