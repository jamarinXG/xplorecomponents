import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CmsConfig, LanguageService, provideConfig } from "@spartacus/core";
import { TestGeolocationBlockingComponent } from "./test-geolocation-blocking";
import { translationChunksConfig } from '@spartacus/assets';
import {
  I18nModule,
} from '@spartacus/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [TestGeolocationBlockingComponent],
    exports: [TestGeolocationBlockingComponent],
    entryComponents: [TestGeolocationBlockingComponent],
    imports: [
        CommonModule,
        NgbModule,
        I18nModule
    ],
    providers: [
      LanguageService,
      provideConfig({
        cmsComponents: {
          GeolocationBlockingComponent: {
            component: TestGeolocationBlockingComponent
          }
        },
        i18n: {
          backend: {
            loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
          },
          chunks: translationChunksConfig,
          fallbackLang: 'en',
        },
      } as CmsConfig),
    ],
})

export class TestGeolocationBlockingModule { }