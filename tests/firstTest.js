const {Builder, By, Key} = require ('selenium-webdriver');

async function example() {
    
    // Launch the Browser
    let driver = await new Builder().forBrowser('chrome').build();
    
    // Navigate to our app
    await driver.get('https://lambdatest.github.io/sample-todo-app/');
    await driver.sleep(5000);
    
    // Add a todo
    await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium', Key.RETURN);
    await driver.sleep(5000);
    
    // Close the browser
    await driver.quit();
}
example();