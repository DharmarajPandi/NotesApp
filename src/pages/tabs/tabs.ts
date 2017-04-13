import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { AddNotesPage } from '../addnotes/addnotes';
import { NotesPage } from '../notes/notes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NotesPage;
  tab2Root = AddNotesPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
