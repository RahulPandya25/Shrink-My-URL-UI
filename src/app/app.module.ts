import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./Components/main/main.component";
import { HomeComponent } from "./Components/home/home.component";
import { PageNotFoundComponent } from "./Components/page-not-found/page-not-found.component";
import { LoaderComponent } from "./Components/loader/loader.component";
import { AccessURLComponent } from "./Components/access-url/access-url.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { CreateShortUrlComponent } from "./Components/create-short-url/create-short-url.component";
import { FindStatsComponent } from "./Components/find-stats/find-stats.component";
import { StatsComponent } from "./Components/stats/stats.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoaderComponent,
    AccessURLComponent,
    FooterComponent,
    CreateShortUrlComponent,
    FindStatsComponent,
    StatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
