import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UrlMap } from "src/app/Entity/url-map";
import { UrlMapService } from "src/app/Services/url-map.service";

@Component({
  selector: "app-find-stats",
  templateUrl: "./find-stats.component.html",
  styleUrls: ["./find-stats.component.scss"],
})
export class FindStatsComponent implements OnInit {
  hasError = false;
  errorMessage: String = "";
  shortUrl = "";
  longUrl = "";

  showError = (message: String) => {
    this.hasError = true;
    this.errorMessage = message;
    setTimeout(() => {
      this.hasError = false;
    }, 5000);
  };

  fetchStats = () => {
    if (this.longUrl !== "" || this.shortUrl !== "") {
      let isShortUrlKey = this.longUrl === "";
      this.urlMapService
        .fetchStatsForThisUrlUsingMapKey(this.longUrl, isShortUrlKey)
        .subscribe(
          (res: any) => {
            if (res.ok) {
              let data: UrlMap = res.body;
              this.router.navigateByUrl("/stats/" + data.shortUrlKey);
            }
          },
          (error: any) => {
            // Todo: something went wrong please try again
            this.showError(
              "Okiess! I couldn't find anything related to what you entered! how about trying that again!!"
            );
          }
        );
    } else {
      this.showError(
        "Hmm! looks like you didn't enter either one of above fields! Please enter them first :)"
      );
    }
  };

  constructor(
    private route: ActivatedRoute,
    private urlMapService: UrlMapService,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
