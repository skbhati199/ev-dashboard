import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'app.module';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MaterialModule,
    TranslateModule,
    NgxDaterangepickerMd,
  ],
  declarations: [

  ],
  exports: [

  ],
})

export class FiltersModule {
}
