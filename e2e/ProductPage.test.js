const puppeteer = require('puppeteer')

const launchConfig = {
  headless: process.env.NODE_ENV === 'development',
  slowMo: 100,
  defaultViewport: {
    width: 1280,
    height: 800
  }
}

describe('As a user I can sign in', () => {
  let page
  let browser

  beforeEach(async () => {
    browser = await puppeteer.launch(launchConfig)
    page = await browser.newPage()
    
  }, 30000)

  afterAll(async () => {
    await page.close()
    await browser.close()
  })

  it('filter product by age 3_to_5 expect show product by filter', async done => {
    await page.goto('http://localhost:3001')
    let dropDown ='#root > div > div.MuiPaper-root.MuiPaper-elevation1.Header-root-2.MuiPaper-rounded > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-10 > div > div:nth-child(1) > form > div'
    await page.click(dropDown)
    await page.waitFor(1000)
    
    let selectAge = '#menu-age > div.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation8.MuiPopover-paper.MuiPaper-rounded > ul > li:nth-child(1)'
    await page.click(selectAge)
    await page.waitFor(1000)
    
    await page.click('#button')
    await page.waitFor(2000)
    done()
  }, 30000)
}
)
