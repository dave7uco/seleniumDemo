const {Builder, By, Key, until} = require ('selenium-webdriver');

(async function example() {
    // Launch the Browser
    let driver = await new Builder().forBrowser('chrome').build();
    // Maximize Browser window
    await driver.manage().window().maximize();
    
    // Navigate to our app
    await driver.get('https://www.newegg.com/');
   
    // Waiting until Black Friday promotion popup appears and then closing it
    await driver.wait(until.elementLocated(By.xpath("//button[@class='close']")), 10000);
    await driver.findElement(By.xpath("//button[@class='close']")).click();

    // Select address
    await driver.findElement(By.xpath("//*[@id='app']/header/div[1]/div[1]/div[1]/div[3]/a")).click();
    await driver.findElement(By.xpath("//input[@placeholder='Enter a US zip code']")).sendKeys('19720');
    await driver.findElement(By.xpath("//button[@class='button button-m bg-lightblue']")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//button[@class='button button-m bg-orange']")).click();

    // Reload page
    await driver.navigate().refresh();

    // Item search
    await driver.wait(until.elementLocated(By.xpath("//input[@type='search']")), 10000);
    let searchField = await driver.findElement(By.xpath("//input[@type='search']"));
    searchField.click();
    searchField.sendKeys('asus zenbook 17 fold', Key.RETURN);

    // Open first item page
    await driver.wait(until.elementLocated(By.className('item-cell')), 10000);
    await driver.findElement(By.className('item-cell')).findElement(By.tagName('a')).click();

    // Check several product images    
    await driver.findElement(By.xpath("(//div[@class='swiper-slide swiper-slide-visible'])[1]")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("(//div[@class='swiper-slide swiper-slide-visible'])[2]")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("(//div[@class='swiper-slide swiper-slide-visible'])[3]")).click();
    await driver.sleep(2000);

    // Scroll to Specs info tab and click on Specs
    let productDetails = driver.findElement(By.xpath("(//div[@id='product-details'])"));
    await driver.executeScript("arguments[0].scrollIntoView(true);", productDetails);
    await driver.findElement(By.xpath("//a[contains(text(),'Specs')]")).click();
    await driver.sleep(3000);

    // Check reviews
    await driver.findElement(By.xpath("//a[contains(text(),'Reviews')]")).click();
    await driver.sleep(3000);

    // Add item to Shopping Cart
    await driver.findElement(By.className('btn btn-primary')).click();
    await driver.sleep(5000);

    // Closing Shopping Cart popup
    await driver.findElement(By.xpath("//button[@class='close']")).click();
    await driver.sleep(2000);

    // Scroll to the top of page
    async function scrollToTop() {
        let scrollingTop = driver.findElement(By.tagName("header"));
        await driver.executeScript("arguments[0].scrollIntoView(true);", scrollingTop);
    }
    scrollToTop();
    await driver.sleep(2000);

    // Choose Today's Best Deals
    await driver.findElement(By.id('trendingBanner_720202')).click();

    // Choose item
    await driver.findElement(By.xpath("(//div[@class='item-cell'])[2]")).findElement(By.tagName('a')).click();

    // Add item to Shopping Cart
    await driver.wait(until.elementLocated(By.className('btn btn-primary btn-wide')), 10000);
    await driver.findElement(By.className('btn btn-primary btn-wide')).click();
    await driver.sleep(3000);

    // Decline protection plan
    await driver.findElement(By.xpath("//button[@data-dismiss='modal']")).click();
    await driver.sleep(2000);

    // Closing Shopping Cart popup
    await driver.findElement(By.xpath("//button[@class='close']")).click();
    await driver.sleep(2000);

    // Back to previous page
    await driver.navigate().back();

    // Choose item
    await driver.findElement(By.xpath("(//div[@class='item-cell'])[4]")).findElement(By.tagName('a')).click();

    // Increase item buy amount
    await driver.sleep(3000);
    await driver.findElement(By.className('qty-box-plus fas fa-plus')).click();

    // Add item to Shopping Cart
    await driver.findElement(By.className('btn btn-primary btn-wide')).click();
    await driver.sleep(3000);

    // Decline protection plan
    await driver.findElement(By.xpath("//button[@data-dismiss='modal']")).click();
    await driver.sleep(2000);

    // Closing Shopping Cart popup
    await driver.findElement(By.xpath("//button[@class='close']")).click();
    await driver.sleep(2000);
    
    // View Shopping Cart
    await driver.findElement(By.xpath("//a[@href='https://secure.newegg.com/shop/cart']")).click();
    
    // Checkout
    await driver.sleep(3000);
    await driver.findElement(By.xpath("//div[@class='summary-content width-100']/div/button")).click();

    // Thanks for Watching
    await driver.sleep(3000);
    await driver.findElement(By.id('labeled-input-signEmail')).sendKeys('Thanks for Watching!');
    await driver.sleep(5000);

    // Close the browser
    await driver.quit();
})();