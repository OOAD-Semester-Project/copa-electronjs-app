import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

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
import { DesktopClipboardCardComponent } from './desktop-clipboard-card/desktop-clipboard-card.component';
import { MobileClipboardCardComponent } from './mobile-clipboard-card/mobile-clipboard-card.component';
import { MatButtonModule } from '@angular/material/button';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { initializer } from './app.initializer'
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DesktopClipboardCardComponent,
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
    ClipboardModule,
    SocketIoModule.forRoot(config),
    KeycloakAngularModule
  ],
  providers: [{ 
    provide: APP_INITIALIZER, 
    useFactory: initializer, 
    deps: [ KeycloakService ], 
    multi: true
  }],
  bootstrap: [AppComponent],
  exports: [ClipboardModule]
})
export class AppModule { }
