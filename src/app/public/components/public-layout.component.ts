import {Component} from "@angular/core";

@Component({
  template: `
    <div class="layout-container layout-light layout-colorscheme-menu">
      <div class="layout-content-wrapper">
        <div class="layout-content">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `
})
export class PublicLayoutComponent {

}
