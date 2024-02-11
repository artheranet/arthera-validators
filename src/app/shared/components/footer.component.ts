import {Component} from "@angular/core";

@Component({
  selector: 'app-footer',
  template: `
    <div class="px-4 md:px-4 py-4 text-white w-full flex flex-column gap-3 justify-content-center md:flex-row md:justify-content-between md:h-2rem h-full bg-primary-700">
      <div class="flex flex-column text-center md:flex md:mb-0 md:flex-row justify-content-center md:justify-content-start">
        <img style="width: 68px" class="align-self-center mr-4 mb-2" src="../../../assets/layout/images/logo-arthera-white.png" alt="arthera logo">
        <p class="align-self-center">© {{ currentYear }} Arthera Network</p>
      </div>
      <div class="text-center md:flex flex-row justify-content-center align-items-center">
        <p class="text-white">
          <a href="https://arthera.net" class="underline text-white" target="_blank">A different future for Web3</a>
        </p>
      </div>
      <div class="text-center md:flex flex-row justify-content-center md:justify-content-end align-items-center">
        <p class="text-white">
          Need help?
          <a href="https://t.me/artherachain" class="underline text-white" target="_blank">Contact us</a>
        </p>
      </div>
    </div>
  `,
  styles: [`
    .wallet-footer {
      background: #511E87;
    }
  `]
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}
