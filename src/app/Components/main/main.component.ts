import { Component, OnInit } from "@angular/core";
import { UrlMapService } from "src/app/Services/url-map.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  allMaps: any;

  constructor(private urlMapService: UrlMapService) {}

  ngOnInit(): void {
    this.urlMapService.getAllMaps().subscribe((response) => {
      this.allMaps = response;
    });
  }
}
