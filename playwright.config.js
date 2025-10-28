const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  reporter: [['html', { open: 'never' }]],
  use: {
    headless: true, 
},
  workers: 4, // Increase workers (your machine will decide optimal)
  testDir: './tests'
});

module.exports = {
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },
    {
        name: 'Edge',
        use: {browserName: 'chromium', channel: 'msedge'},
    }
  ],
  reporter: [['html']]
};