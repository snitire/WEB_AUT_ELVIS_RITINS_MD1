import { BasePage } from "../pageObjects/base.page.js";

export class SelectablePage extends BasePage {
    static get url() {
        return "/selectable";
    }

    static get gridTabBtn() {
        return cy.get("#demo-tab-grid");
    }

    static findBtnByText(text) {
        return cy.get("#gridContainer").contains(text);
    }
}