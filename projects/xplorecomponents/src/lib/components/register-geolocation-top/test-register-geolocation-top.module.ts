import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { provideConfig } from "@spartacus/core";
import { translationChunksConfig } from '@spartacus/assets';
import {
  I18nModule,
} from '@spartacus/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TestRegisterGeolocationTopComponent } from "./test-register-geolocation-top.component";

@NgModule({
    declarations: [TestRegisterGeolocationTopComponent],
    exports: [TestRegisterGeolocationTopComponent],
    entryComponents: [TestRegisterGeolocationTopComponent],
    imports: [
        CommonModule,
        NgbModule,
        I18nModule,
    ],
    providers: [
      provideConfig({
        i18n: {
          backend: {
            loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
          },
          chunks: translationChunksConfig,
          fallbackLang: 'en',
        },
      }),
    ],
})

export class TestRegisterGeolocationTopModule { }