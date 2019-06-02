import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";

import { FormsModule } from "@angular/forms";
import { ListComponent } from "./list/list.component";
import { HttpClientModule } from "@angular/common/http";
import { PaginationComponent } from "./pagination/pagination.component";
import { LoadingComponent } from "./loading/loading.component";
import { HomeComponent } from "./home/home.component";
import { HistoryComponent } from "./history/history.component";
import { EditComponent } from "./edit/edit.component";
import { SigninComponent } from "./signin/signin.component";
import { GoogleSignInComponent } from "angular-google-signin";
import { AuthGuard } from "./auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListComponent,
    PaginationComponent,
    LoadingComponent,
    HomeComponent,
    HistoryComponent,
    EditComponent,
    SigninComponent,
    GoogleSignInComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
