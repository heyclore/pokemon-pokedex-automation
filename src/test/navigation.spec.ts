import { test, expect } from "../fixtures/fixture";

test("navigations menu components", async ({
  page,
  homePage,
  pokedexPage,
}) => {
  await homePage.goto;

  await homePage.nav.pokedexButton.click();
  await pokedexPage.searchInput.fill('pika');
  //await pokedexPage.searchButton.click();
  await pokedexPage.pikachuCardButton.click();
  await pokedexPage.exploreMorePokemonButton.scrollIntoViewIfNeeded();
  await pokedexPage.exploreMorePokemonButton.click();
  await pokedexPage.loadMorePokemonButton.scrollIntoViewIfNeeded();
  await pokedexPage.loadMorePokemonButton.click();
  await page.waitForTimeout(5000);
});
