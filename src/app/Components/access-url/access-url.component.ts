import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UrlMapService } from "src/app/Services/url-map.service";

@Component({
  selector: "app-access-url",
  templateUrl: "./access-url.component.html",
  styleUrls: ["./access-url.component.scss"],
})
export class AccessURLComponent implements OnInit {
  shortUrlKey: String | undefined;

  redirectToHome = () => {
    // TODO: pass info to home that valid short url not found
    this.router.navigateByUrl("/home");
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
          console.log(data);
          // found in map -> redirect to final location
          window.location.replace(data.longUrl);
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
