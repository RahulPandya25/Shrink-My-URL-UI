import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UrlMap } from "src/app/Entity/url-map";
import { UrlMapService } from "src/app/Services/url-map.service";

@Component({
  selector: "app-create-short-url",
  templateUrl: "./create-short-url.component.html",
  styleUrls: ["./create-short-url.component.scss"],
})
export class CreateShortUrlComponent implements OnInit {
  hasError = false;
  errorMessage =
    "Oops! looks like you have't entered the URL yet! Please enter that first ;)";
  longUrl = "";
  timeToLive = 3;

  shrinkThisUrl = () => {
    if (this.longUrl !== "") {
      this.urlMapService
        .shrinkThisUrl(this.longUrl, this.timeToLive)
        .subscribe((res) => {
          if (res.ok) {
            let data: UrlMap = res.body as any;
            this.router.navigateByUrl("/stats/" + data.shortUrlKey);
          } else {
            // Todo: something went wrong please try again
            this.router.navigateByUrl("/");
          }
        });
    } else {
      this.hasError = true;
      setTimeout(() => {
        this.hasError = false;
      }, 5000);
    }
  };

  constructor(
    private route: ActivatedRoute,
    private urlMapService: UrlMapService,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
