import { Component } from '@angular/core';
import { HeroComponent } from '../layout/hero/hero';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent],
  template: '<app-hero></app-hero>'
})
export class HomeComponent {}
