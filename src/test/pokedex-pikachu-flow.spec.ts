import { test, expect } from "../fixtures/fixture";

test("navigations menu components", async ({
  page,
  homePage,
  pokedexPage,
}) => {
  await homePage.goto;
  await page.waitForLoadState('networkidle');

  await homePage.nav.pokedexButton.click();
  await page.waitForLoadState('networkidle');

  await pokedexPage.searchInput.fill('pika');
  await pokedexPage.searchButton.click();
  await page.waitForLoadState('networkidle');

  await pokedexPage.pikachuCardButton.click();
  await page.waitForLoadState('networkidle');
  await expect(pokedexPage.pokemonTitle).toContainText('Pikachu');

  await pokedexPage.exploreMorePokemonButton.scrollIntoViewIfNeeded();
  await pokedexPage.exploreMorePokemonButton.click();
  await page.waitForLoadState('networkidle');

  await pokedexPage.loadMorePokemonButton.scrollIntoViewIfNeeded();
  await expect(pokedexPage.loadMorePokemonButton).toBeVisible();
});
