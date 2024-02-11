import {NgModule} from "@angular/core";
import {publicRoutes} from "./public.route";
import {RouterModule} from "@angular/router";
import {PublicLayoutComponent} from "./components/public-layout.component";
import {LoginPage} from "./pages/login.page";
import {CardModule} from "primeng/card";
import {ImageModule} from "primeng/image";
import {SharedAppModule} from "../shared/shared.app.module";
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {DividerModule} from "primeng/divider";
import {NgClass} from "@angular/common";
import {ToolbarModule} from "primeng/toolbar";
import {MessageModule} from "primeng/message";
import {TableModule} from "primeng/table";
import {TagModule} from "primeng/tag";

@NgModule({
  imports: [
    RouterModule.forRoot(publicRoutes),
    SharedAppModule,
    CardModule,
    ImageModule,
    CheckboxModule,
    FormsModule,
    PasswordModule,
    DividerModule,
    NgClass,
    ToolbarModule,
    MessageModule,
    TableModule,
    TagModule
  ],
  declarations: [
    PublicLayoutComponent,
    LoginPage,
  ]
})
export class PublicModule {

}
