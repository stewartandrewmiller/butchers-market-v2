'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'butchers-market',
    podModulePrefix: 'butchers-market/pods',
    environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    metricsAdapters: [
      {
        name: 'GoogleAnalytics',
        environments: [/*'development',*/ 'production'],
        config: {
          id: 'UA-59988645-1',
          // Use `analytics_debug.js` in development
          //debug: environment === 'development',
          // Ensure only production env hits are sent to GA
          sendHitTask: environment === 'production',
        },
      },
    ],

    gReCaptcha: {
      siteKey: '6LcrHAITAAAAACvTiT4qS4dvbwL7wgGRXhJtsKim',
    },

    api: '/',
    namespace: 'api',
    showReCaptcha: false,
    uploadsDir: '/uploads/',
    orderOnlineUrl: 'https://thebutchersmarketmeatanddeli.godaddysites.com/order-online',
    showOrderOnline: true,
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV['ember-cli-mirage'] = {
      enabled: true,
    };

    ENV.uploadsDir = '';

    if (ENV['ember-cli-mirage'].enabled === false) {
      ENV.api = 'http://localhost:3000';
      ENV.uploadsDir = '/uploads/';
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.showReCaptcha = true;
    ENV.showOrderOnline = true;
  }

  return ENV;
};
