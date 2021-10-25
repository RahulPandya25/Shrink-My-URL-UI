import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ConstantsService } from "./constants.service";

@Injectable({
  providedIn: "root",
})
export class UrlMapService {
  private url = ConstantsService.BASE_API_URL + "/url";

  accessThisUrl(shortUrlKey: String) {
    return this.http.get(this.url + "/" + shortUrlKey + "/false");
  }

  fetchStatsForThisUrl(shortUrlKey: String) {
    return this.http.get(this.url + "/" + shortUrlKey + "/true");
  }

  fetchStatsForThisUrlUsingMapKey(urlKey: String, isShortUrlKey: boolean) {
    return this.http.post(
      this.url + "/fetch",
      {
        urlKey: urlKey,
        isShortUrlKey: isShortUrlKey,
      },
      { observe: "response" }
    );
  }

  shrinkThisUrl(longUrl: String, timeToLive: number) {
    return this.http.post(
      this.url + "/shrink",
      {
        longUrl: longUrl,
        timeToLive: timeToLive,
      },
      { observe: "response" }
    );
  }

  //////////////////
  getAllMaps() {
    return this.http.get(this.url + "/all");
  }

  constructor(private http: HttpClient) {}
}
