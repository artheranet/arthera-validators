import {Component} from "@angular/core";
import {ARTHERA_NETWORK_DETAILS, CHAIN_ID} from "../constants";

@Component({
  selector: 'app-banner',
  template: `
    <div class="w-full flex align-items-center justify-content-center h-3rem bg-primary-700">
      <span class="text-white uppercase">
      Connected to
      <a class="no-underline text-white font-bold" [href]="network.blockExplorerUrls?.length > 0 ? network.blockExplorerUrls[0] : ''"
         target="_blank" rel='noopener noreferrer'>{{network.chainName}}</a>
      </span>
    </div>
  `
})
export class BannerComponent {
  public network = ARTHERA_NETWORK_DETAILS[CHAIN_ID];
}
