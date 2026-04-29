import { test as base } from "@playwright/test";
import { HomePage } from "../pages/homepage/homePage";
import { PokedexPage } from "../pages/pokedex/pokedexPage";

type PageFixture = {
  homePage: HomePage;
  docsPage: PokedexPage;
};

// Define fixtures for loginPage and dashboardPage
export const test = base.extend<PageFixture>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  pokedexPage: async ({ page }, use) => {
    await use(new PokedexPage(page));
  },
});

export { expect } from "@playwright/test";
