import {Component} from '@angular/core';
import { HomesComponent } from "./homes/homes.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <header class="brand-name">
      <img src="/assets/logo.svg" alt="logo" aria-hidden="true" class="brand-log">
    </header>
    <section class="content">
      <app-homes></app-homes>
    </section>
  `,
    styleUrls: ['./app.component.css'],
    imports: [HomesComponent]
})
export class AppComponent {
  title = 'default';
}
