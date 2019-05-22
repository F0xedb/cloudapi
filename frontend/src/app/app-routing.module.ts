import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { HomeComponent } from "./home/home.component";
import { HistoryComponent } from "./history/history.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "search", component: ListComponent },
  { path: "history", component: HistoryComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
