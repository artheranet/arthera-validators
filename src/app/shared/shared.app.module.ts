import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {GraphQLModule} from "./graphql.module";
import {DialogService, DynamicDialogModule} from "primeng/dynamicdialog";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {StyleClassModule} from "primeng/styleclass";
import {NgForOf, NgIf} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {MessagesModule} from "primeng/messages";
import {FooterComponent} from "./components/footer.component";
import {ClipboardModule} from "ngx-clipboard";
import {DataViewModule} from "primeng/dataview";
import {BannerComponent} from "./components/banner.component";
import {TagModule} from "primeng/tag";

@NgModule({
    imports: [
        GraphQLModule,
        FontAwesomeModule,
        RippleModule,
        DialogModule,
        ButtonModule,
        DynamicDialogModule,
        StyleClassModule,
        InputTextModule,
        ToastModule,
        MessagesModule,
        RippleModule,
        NgForOf,
        NgIf,
        ClipboardModule,
        DataViewModule,
        TagModule,
    ],
  declarations: [
    FooterComponent,
    BannerComponent
  ],
  providers: [
    DialogService,
    MessageService,
  ],
  exports: [
    FontAwesomeModule,
    DialogModule,
    RippleModule,
    ButtonModule,
    DynamicDialogModule,
    StyleClassModule,
    InputTextModule,
    MessagesModule,
    RippleModule,
    ToastModule,
    NgForOf,
    NgIf,
    FooterComponent,
    ClipboardModule,
    BannerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedAppModule {

}
