import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {DemoMaterialModule} from './materials-module';
import { HeaderComponent } from './header/header.component';
import { ClipboardCardComponent } from './clipboard-card/clipboard-card.component';
import { MobileClipboardCardComponent } from './mobile-clipboard-card/mobile-clipboard-card.component';
import { MatButtonModule } from '@angular/material/button';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import { ClipboardModule } from '@angular/cdk/clipboard';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClipboardCardComponent,
    MobileClipboardCardComponent,
    DialogOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot([
    //   { },
    // ]),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatButtonModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ClipboardModule]
})
export class AppModule { }
