import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    private page: Page;
    private exploreAssetsText: Locator;
    private exploreCreateAccountText: Locator;
    private learnText: Locator;
    private latestNewsText: Locator;
    private latestTradeText: Locator;
    private placeFirstTradeText: Locator;

    private createAccountButton: Locator;
    private searchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.exploreAssetsText = this.page.getByText('Explore asset', { exact: true });
        this.exploreCreateAccountText = this.page.getByText(/^Create account \(\d\/2\)$/, { exact: true});
        this.learnText = this.page.getByText('Learn', { exact: false });
        this.latestNewsText = this.page.getByText('Latest news', { exact: true });
        this.latestTradeText = this.page.getByText('Latest trade', { exact: true });
        this.placeFirstTradeText = this.page.getByText('Place your first trade to see it here!', { exact: true });

        this.createAccountButton = this.page.getByRole('button', { name: 'Create acount' });
        this.searchButton = this.page.getByRole('button', { name: 'Search' });
    }

    async getExploreAssetsTextt(): Promise<void> {
        expect(this.exploreAssetsText).toBeVisible();
    }

    async getExploreCreateAccountText(): Promise<void> {
        await expect(this.exploreCreateAccountText).toBeHidden();
    }

    async getLearnText(): Promise<void> {
        await expect(this.learnText).toBeVisible(); 
    }

    async getLatestNewsText(): Promise<void> {
        await expect(this.latestNewsText).toHaveText('Latest news update');
    }

    async getLatestTradeText(): Promise<void> {
        await expect(this.latestTradeText).toBeVisible();
    }

    async getPlaceFirstTradeText(): Promise<void> {
        await expect(this.placeFirstTradeText).toBeVisible();
    }

    async isCreateAccountButtonVisible(): Promise<void> {
        await expect(this.createAccountButton).toBeVisible();
    }

    async isSearchButtonVisible(): Promise<void> {
        await expect(this.searchButton).toBeVisible();
    }

    async checkLearnTextWithMethod(): Promise<void> {
        await expect(this.learnText).toHaveText(this.getExpectedLearnText());
    }

    private getExpectedLearnText(): string {
        return 'Learn more';
    }
} 