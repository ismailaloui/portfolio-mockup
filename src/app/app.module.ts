import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import {HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { MatRadioModule } from '@angular/material/radio';
import { TranslateService } from '@ngx-translate/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatRadioModule,
    TranslateModule,
    TranslateModule.forRoot(),
    FormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
