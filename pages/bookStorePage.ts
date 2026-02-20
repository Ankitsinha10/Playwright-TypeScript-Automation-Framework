import {test, expect, Page, Locator} from '@playwright/test';

export class BookStorePage {
    readonly page : Page
    readonly searchBox: Locator
    readonly bookStoreApplicationHeader : Locator
    readonly bookStoreLink : Locator

    constructor(page:Page) {
        this.page = page
        this.searchBox = page.getByRole('textbox', {name: /type to search/i})
        this.bookStoreApplicationHeader = page.getByText('Book Store Application')
        this.bookStoreLink = page.getByText('Book Store', {exact: true})
    }

    async navigateToBookStore () {
        await this.bookStoreApplicationHeader.waitFor({ state: 'visible' });

        // If the menu is collapsed, clicking this expands it
        // We use a check to see if the sub-item is already visible
        if (! await this.bookStoreLink.isVisible()) {
            await this.bookStoreApplicationHeader.click()
        }
        await this.bookStoreLink.waitFor({ state: 'visible' });

        await this.bookStoreLink.click()
        await this.page.waitForLoadState('domcontentloaded')
    }

    async searchBook(bookName: string) {
        await this.searchBox.fill(bookName)
        await this.searchBox.press('Enter')
    }

    async isBookVisble(bookTitle: string){
        const bookLocator = this.page.locator(`text=${bookTitle}`)
        await bookLocator.waitFor({ state: 'visible'});
        return await bookLocator.isVisible()
    }

    async getBookDetailsFromTable(bookTitle: string) {
        // 1. Find the specific row that contains the book title
        const row = this.page.locator('tbody tr', { hasText: bookTitle });
        // We use { hasText: bookTitle } to find the exact row

        const cells = row.locator('td');


         // 3. Extract the text from the specific cells (rt-td)
        // Cell 1: Image, Cell 2: Title, Cell 3: Author, Cell 4: Publisher

        const author = await cells.nth(2).textContent();
        const publisher = await cells.nth(3).textContent();

        return {
            title: bookTitle,
            author: author?.trim() || '',
            publisher: publisher?.trim() || ''
        }
    }


}

