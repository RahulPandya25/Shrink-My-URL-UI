import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccessURLComponent } from "./Components/access-url/access-url.component";
import { CreateShortUrlComponent } from "./Components/create-short-url/create-short-url.component";
import { FindStatsComponent } from "./Components/find-stats/find-stats.component";
import { HomeComponent } from "./Components/home/home.component";
import { MainComponent } from "./Components/main/main.component";
import { PageNotFoundComponent } from "./Components/page-not-found/page-not-found.component";
import { StatsComponent } from "./Components/stats/stats.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "create", component: CreateShortUrlComponent },
  { path: "find-stats", component: FindStatsComponent },
  { path: "stats/:sKey", component: StatsComponent },

  { path: "main", component: MainComponent },

  // access the url
  { path: ":sKey", component: AccessURLComponent },

  // page not found route ALWAYS at last
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
