// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Testing standalone elements', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
  test('has title', async ({ page }) => {
    // create a new todo locator
    await expect(page.getByText('Play Connect-4')).toBeVisible()
  })
  test('has player 1', async ({ page }) => {

    // Check if "Player 1" text exists
    const player1Text = page.locator('h2', { hasText: 'Player 1' });
    await expect(player1Text).toBeVisible();

    // Locate the select element and check it is set to yellow piece
    const selectElement = page.locator('.piece-list-1');
    const selectedOptionValue = await selectElement.evaluate(select => select.value);
    expect(selectedOptionValue).toBe('url("css/Images/YellowPiece.png")');
  })

  test('change player 1 option', async ({ page }) => {
    // Change player 1 to red smiley
    const selectElement = page.locator('.piece-list-1');
    await selectElement.selectOption('Red Smiley');

    // Locate the select element and check it is set to yellow piece
    const selectedOptionValue = await selectElement.evaluate(select => select.value);
    expect(selectedOptionValue).toBe('url("css/Images/RedPiece.png")');
  })
  test('has player 2', async ({ page }) => {
    // Check if "Player 2" text exists
    const player2Text = page.locator('h2', { hasText: 'Player 2' });
    await expect(player2Text).toBeVisible();

    // Locate the select element and check it is set to purple die
    const selectElement = page.locator('.piece-list-2');
    const selectedOptionValue = await selectElement.evaluate(select => select.value);
    expect(selectedOptionValue).toBe('url("css/Images/purpleDie.png');   

  })
  test('change player 2 option', async ({ page }) => {
    // Change player 1 to red smiley
    const selectElement = page.locator('.piece-list-2');
    await selectElement.selectOption('Green Die');

    // Locate the select element and check it is set to yellow piece
    const selectedOptionValue = await selectElement.evaluate(select => select.value);
    expect(selectedOptionValue).toBe('url("css/Images/greenDie.png');   
  })
     
});
