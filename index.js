const puppeteer = require('puppeteer');

(async () => {
  // 動作が分かりやすいように headless: false と slowMoを設定している
  // const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({ headless: false, slowMo: 300 });
  const page = await browser.newPage();

  // Googleにアクセス
  await page.goto('https://google.com');
  await page.screenshot({ path: 'screenshots/1.png', fullPage: true });

  // typeの第1で要素を特定して、第2引数で入力内容を指定する
  await page.type('input[name="q"]', 'puppeteer');
  await page.screenshot({ path: 'screenshots/2.png', fullPage: true });

  await Promise.all([
    page.click('input[name="btnK"]'),
    // 遷移が完了するまで待つ
    page.waitForNavigation(),
  ]);
  await page.screenshot({ path: 'screenshots/3.png', fullPage: true });
  
  await Promise.all([
    // href属性が https://github.com/puppeteer/puppeteer のaタグをクリック
    page.click('a[href="https://github.com/puppeteer/puppeteer"]'),
    // 遷移が完了するまで待つ
    page.waitForNavigation(),
  ]);
  // スクリーンショットを保存
  await page.screenshot({ path: 'screenshots/4.png', fullPage: true });

  await browser.close();
})();