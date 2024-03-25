import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Generative Procedural Worlds';
  navTitle = '';

  ngOnInit(): void {

  }

  setHeader() {
    let path = window.location.pathname;
    path = path.replace('/', '');


    this.navTitle = (path.length) > 0 ? path : 'landing-page';
  }

}
