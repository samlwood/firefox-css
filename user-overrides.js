// UI Settings
user_pref("browser.uidensity", 1);
user_pref("browser.urlbar.trimURLs", false);
user_pref("browser.download.autohideButton", false);
user_pref("browser.tabs.hoverPreview.enabled", false);
user_pref("browser.bookmarks.addedImportButton", true);
user_pref("media.videocontrols.picture-in-picture.enabled", false);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.toolbars.bookmarks.visibility", "always");
user_pref("browser.uiCustomization.state", '{"placements":{"unified-extensions-area":["ublock0_raymondhill_net-browser-action"],"nav-bar":["back-button","forward-button","stop-reload-button","home-button","urlbar-container","search-container","downloads-button"],"TabsToolbar":["tabbrowser-tabs","new-tab-button","alltabs-button"],"PersonalToolbar":["personal-bookmarks"]},"currentVersion":20}');

// Homepage Settings
user_pref("browser.startup.page", 1);
user_pref("browser.startup.homepage", "about:home");
user_pref("browser.newtabpage.enabled", true);
user_pref("browser.newtabpage.activity-stream.showWeather", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

// Search Setings
user_pref("keyword.enabled", false);
user_pref("browser.search.separatePrivateDefault", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);

// Autofill Settings
user_pref("signon.autofillForms", true);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("signon.firefoxRelay.feature", "disabled");
user_pref("signon.generation.enabled", false);
user_pref("signon.management.page.breach-alerts.enabled", false);

// History Settings
user_pref("places.history.enabled", false);
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("privacy.clearOnShutdown.offlineApps", false);
user_pref("privacy.sanitize.sanitizeOnShutdown", false);

// Don't-Nag-Me Settings
user_pref("browser.eme.ui.enabled", false);
user_pref("permissions.default.geo", 2);
user_pref("permissions.default.desktop-notification", 2);
user_pref("browser.startup.couldRestoreSession.count", 2);
user_pref("media.webspeech.synth.dont_notify_on_error", true);

// Do not letterbox websites
user_pref("privacy.resistFingerprinting.letterboxing", false);

// Enable remote debugging
user_pref("devtools.debugger.remote-enabled", true);
