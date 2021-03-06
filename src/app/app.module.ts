import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { AddNotesPage } from '../pages/addnotes/addnotes';
import { NotesPage } from '../pages/notes/notes';
import { TabsPage } from '../pages/tabs/tabs';
import {HttpModule} from '@angular/http'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NotesService } from './Services/Notes.service';
import {NotesDetailsPage} from '../pages/notesdetail/notesdetail';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AddNotesPage,
    NotesPage,
    NotesDetailsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
   AddNotesPage,
    NotesPage,
    NotesDetailsPage,
    TabsPage
  ],
  providers: [
    NotesService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
