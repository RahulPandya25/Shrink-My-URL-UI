import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ConstantsService } from "src/app/Services/constants.service";
import { UrlMapService } from "src/app/Services/url-map.service";

@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"],
})
export class StatsComponent implements OnInit {
  shortUrlKey: String | undefined;
  shortUrl: String | undefined;
  map: any;

  redirectToHome = () => {
    // TODO: pass info to home that valid short url not found
    this.router.navigateByUrl("/");
  };

  visitUrl = () => {
    window.location.replace(this.map.longUrl);
  };

  copyToClipboard = () => {
    navigator.clipboard.writeText(
      ConstantsService.SHORT_KEY_URL_PREFIX + this.shortUrlKey
    );
  };

  constructor(
    private route: ActivatedRoute,
    private urlMapService: UrlMapService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.shortUrlKey = params["sKey"];
    });

    if (this.shortUrlKey) {
      // if key found
      this.urlMapService.accessThisUrl(this.shortUrlKey).subscribe(
        (data: any) => {
          this.map = data;
          this.shortUrl =
            ConstantsService.SHORT_KEY_URL_PREFIX + this.shortUrlKey;
        },
        (error: any) => {
          // valid key not found redirect to home page
          this.redirectToHome();
        }
      );
    } else {
      // valid key not found redirect to home page
      this.redirectToHome();
    }
  }
}
