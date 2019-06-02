import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { HomeComponent } from "./home/home.component";
import { HistoryComponent } from "./history/history.component";
import { EditComponent } from "./edit/edit.component";
import { SigninComponent } from "./signin/signin.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  { path: "login", component: SigninComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "search", component: ListComponent, canActivate: [AuthGuard] },
  { path: "history", component: HistoryComponent, canActivate: [AuthGuard] },
  { path: "edit/:id", component: EditComponent, canActivate: [AuthGuard] },
  { path: "**", component: SigninComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
