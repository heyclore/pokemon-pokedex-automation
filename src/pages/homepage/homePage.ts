import { Page } from "@playwright/test";
import { TopBar } from "../components/topBar";

export class HomePage extends TopBar {
  constructor(public readonly page: Page) {
    super(page);
  }

  get goto() {
    return this.page.goto("https://www.pokemon.com/us");
    //return this.page.goto("http://localhost:8000/");
  }
}
