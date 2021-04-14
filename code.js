const puppeteer = require('puppeteer');
const data = require("./config.json");
let noOfPost = process.argv[2];

(async function () {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/', { waitUntil:"networkidle2"});
  await page.type("input[name='username']",data.user, {delay:100});
  await page.type("input[name='password']",data.pwd, {delay:100});

  await Promise.all([
    page.waitForNavigation({waitUntil:"networkidle2"}),
    page.click("button[type='submit']"),

  ]);
  
    await page.type("input[placeholder='Search']", "cobythecat");
    await page.waitForSelector("a.-qQT3", {visible:true}); 
    await Promise.all([
    page.waitForNavigation({waitUntil:"networkidle2"}),
    page.click("a.-qQT3"),
    ]);

  await page.waitForSelector("._9AhH0", {visible:true}); 
  await Promise.all([
    page.waitForNavigation({waitUntil:"networkidle2"}),
    page.click("._9AhH0"),
  ]);
    
  let i = 0;
  do{  
    await page.waitForSelector(".fr66n button", {visible:true}); 
    page.click(".fr66n button"),
    await Promise.all([
      page.waitForNavigation({waitUntil:"networkidle0"}),
      page.click("._65Bje.coreSpriteRightPaginationArrow", {delay:50}),
    ]);
    i++;
  }while(i < noOfPost){ }
  
})();

