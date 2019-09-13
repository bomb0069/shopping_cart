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

  it('should load without error', async done => {
    await page.goto('https://google.com')
    done()
  }, 30000)
}
)
