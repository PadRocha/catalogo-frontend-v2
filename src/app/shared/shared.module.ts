import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent, ScrollToTopComponent, TagInputComponent, PaginationComponent } from './components';
import { WebviewDirective, DebounceClickDirective } from './directives';
import { CapitalizePipe, TimeAgoPipe, TitleRoutPipe } from './pipes';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    WebviewDirective,
    ScrollToTopComponent,
    TagInputComponent,
    PaginationComponent,
    DebounceClickDirective,
    CapitalizePipe,
    TimeAgoPipe,
    TitleRoutPipe,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
  ],
  exports: [
    TranslateModule,
    WebviewDirective,
    FormsModule,
    ScrollToTopComponent,
    TagInputComponent,
    PaginationComponent,
    DebounceClickDirective,
    CapitalizePipe,
    TimeAgoPipe,
    TitleRoutPipe,
  ]
})
export class SharedModule { }
