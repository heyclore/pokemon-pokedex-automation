import { Page } from "@playwright/test";
import { TopBar } from "../components/topBar";

export class PokedexPage extends TopBar {
  constructor(public readonly page: Page) {
    super(page);
  }

  get searchInput() {
    return this.page.locator('#searchInput');
  }

  get searchButton() {
    return this.page.locator('#search');
  }

  get pikachuCardButton() {
    return this.page.locator('li:has(h5:has-text("Pikachu")) a');
  }

  get exploreMorePokemonButton() {
    return this.page.locator('div.content-block > a.button-orange');
  }

  get loadMorePokemonButton() {
    return this.page.locator('#loadMore > span');
  }

  get pokemonTitle() {
    return this.page.locator('div.pokedex-pokemon-pagination-title');
  }
}
