import {Component, OnInit} from '@angular/core';
import {ARTHERA_NETWORK_DETAILS, CHAIN_ID} from "./shared/constants";

@Component({
  selector: 'app-root',
  template: `
    <app-banner></app-banner>
    <router-outlet></router-outlet>
    <app-footer class="mt-auto"></app-footer>

    <p-toast position="bottom-center">
      <ng-template let-message pTemplate="message">
        <div class="flex flex-column grow">
          <div [innerHTML]="message.detail"></div>
        </div>
      </ng-template>
    </p-toast>
  `,
})
export class AppComponent implements OnInit {
  network = ARTHERA_NETWORK_DETAILS[CHAIN_ID];

  constructor(
  ) {
  }

  ngOnInit() {
  }
}
