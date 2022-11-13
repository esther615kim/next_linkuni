import puppeteer from 'puppeteer';

export const startScraping = async(address:string)=>{

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(address);

    // GET PAGE TITLE
    const urlTitle = page.evaluate(()=> document.title)
    console.log("url page title",urlTitle)

    // GET PAGE IMAGE
    // await page.screenshot({path:`bgImage+${urlTitle}.png`}) 
    await browser.close()

}

// TO USE:startScraping(address here)