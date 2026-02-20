import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { BookStorePage } from '../../pages/bookStorePage';
import { FileWriter } from '../../utils/fileWriter';


const USERNAME = process.env.USERNAME ; 
const PASSWORD = process.env.PASSWORD ;  

if (!USERNAME) {
    throw new Error('Please check .env file for username')
}

if (!PASSWORD) {
    throw new Error('Please check .env file for password')
}

test.describe('DemoQA Book Store Tests', () => {
  
  test('Complete book store flow - login, search, extract details, logout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const bookStorePage = new BookStorePage(page);

    // Step 1: Navigate to login page
    await loginPage.navigateToLogin();

    // Step 2: Login with created user
    await loginPage.completeLogin(USERNAME, PASSWORD);

    // Step 3: Validate username and logout button are visible
    await expect(loginPage.loggedInUsername).toHaveText(USERNAME);
    await expect(loginPage.logoutButton).toBeVisible();
    console.log('Login validated successfully with username and logout button');

    // Step 4: Navigate to Book Store
    await bookStorePage.navigateToBookStore();
    console.log('Navigated to Book Store');

    // Step 5: Search for the book
    const bookTitle = 'Learning JavaScript Design Patterns';
    await bookStorePage.searchBook(bookTitle);
    console.log(`Searched for: ${bookTitle}`);

    // Step 6: Validate book is visible in search results
    const isBookVisible = await bookStorePage.isBookVisble(bookTitle);
    expect(isBookVisible).toBeTruthy();
    console.log('Book found in search results');

    // Step 7: Extract book details and write to file
    const bookDetails = await bookStorePage.getBookDetailsFromTable(bookTitle);
    
    expect(bookDetails.title).toBe(bookTitle);
    expect(bookDetails.author).toBeTruthy();
    expect(bookDetails.publisher).toBeTruthy();
    
    console.log('Book Details Extracted:');
    console.log(`  Title: ${bookDetails.title}`);
    console.log(`  Author: ${bookDetails.author}`);
    console.log(`  Publisher: ${bookDetails.publisher}`);

    // Write to file
    FileWriter.writeBookDetails(bookDetails);
    console.log('Book details written to file');

    // Step 8: Logout
    await loginPage.clickLogoutButton();
    console.log('Logged out successfully');
  });

});