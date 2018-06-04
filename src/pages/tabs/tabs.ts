import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';
import { FavoritesPage } from '../favorites/favorites';
import { LibraryPage } from '../library/library';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FavoritesPage;
  tab2Root = LibraryPage;

  constructor() {

  }
}
