import { Page } from "@playwright/test";
import { NavigationComponents } from "./navigationComponents";

export class TopBar {
  private _nav: NavigationComponents | undefined;

  constructor(protected page: Page) {}

  get nav(): NavigationComponents {
    if (!this._nav) {
      this._nav = new NavigationComponents(this.page);
    }
    return this._nav;
  }
}
