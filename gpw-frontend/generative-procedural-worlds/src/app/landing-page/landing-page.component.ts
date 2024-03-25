import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  imports: [
    MatCardModule,
  ]
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
