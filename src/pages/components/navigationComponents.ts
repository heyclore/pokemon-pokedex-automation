import { Page } from "@playwright/test";

export class NavigationComponents {
  constructor(protected page: Page) {}

  get homeButton() {
    return this.page.locator("li.home");
  }

  get pokedexButton() {
    return this.page.locator("li.explore");
  }

  get videoGamesAppsButton() {
    return this.page.locator("li.watch");
  }

  get tradingCardButton() {
    return this.page.locator("li.attend");
  }

  get animationButton() {
    return this.page.locator("li.game");
  }
}
