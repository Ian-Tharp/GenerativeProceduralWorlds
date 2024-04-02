import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Generative Procedural Worlds';
  navTitle = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      let path = event.urlAfterRedirects.replace('/', '');
      this.navTitle = (path.length) > 0 ? path : 'landing-page';
    }
    )
  }

  setHeader() {
    let path = window.location.pathname;
    path = path.replace('/', '');


    this.navTitle = (path.length) > 0 ? path : 'landing-page';
  }

}
