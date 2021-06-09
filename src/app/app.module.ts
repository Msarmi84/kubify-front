import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/UI/header/header.component';
import { BandsComponent } from './bands/bands.component';
import { BandSingleComponent } from './bands/band-single/band-single.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './shared/UI/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoComponent } from './shared/UI/info/info.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BandsGridComponent } from './bands/bands-grid/bands-grid.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { SearcherComponent } from './bands/bands-grid/searcher/searcher.component';
import { LoginComponent } from './login/login.component';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BandsFormComponent } from './bands/bands-form/bands-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BandsComponent,
    BandSingleComponent,
    ButtonComponent,
    InfoComponent,
    BandsGridComponent,
    BandsGridComponent,
    LoginComponent,
    SearcherComponent,
    BandsFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
