module.exports = {
  ci: {
    collect: {
      url: [
        'https://web.dev/',
        'https://www.accenture.com/',
        'https://example.com/',
      ],
      numberOfRuns: 1,
      settings: {
        preset: 'desktop',
        chromeFlags: '--no-sandbox --disable-dev-shm-usage',
      },
    },
    assert: {
      assertions: {
        'categories:performance':    ['warn', { minScore: 0.5 }],
        'categories:accessibility':  ['warn', { minScore: 0.5 }],
        'categories:best-practices': ['warn', { minScore: 0.5 }],
        'categories:seo':            ['warn', { minScore: 0.5 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};