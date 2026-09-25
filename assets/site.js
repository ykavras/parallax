// Parallax legal site — small progressive enhancements.
// Every page is complete without this file (no content depends on it).
(function () {
  'use strict';

  var LANG_KEY = 'parallax-lang';

  function readSavedLanguage() {
    try { return localStorage.getItem(LANG_KEY); } catch (_) { return null; }
  }

  // An explicit EN/TR tap is remembered, so the landing page never argues with it.
  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('.lang a[data-lang]');
    if (!link) return;
    try { localStorage.setItem(LANG_KEY, link.getAttribute('data-lang')); } catch (_) {}
  });

  /**
   * Decides which language a visitor who lands on the English home page (the
   * bare site URL) should see. Legal pages never redirect: App Store reviewers
   * must land exactly on the page that was linked.
   *
   * @param {string|null} saved      'en' | 'tr' if the visitor tapped a pill before, else null
   * @param {string[]}    languages  browser preferences, most preferred first, e.g. ['tr-TR', 'en-US']
   * @returns {'en'|'tr'|null}       'tr' sends them to /tr/, anything else keeps them here
   */
  function preferredLanguage(saved, languages) {
    // TODO(Ömer): choose the policy. Returning null = no automatic redirect.
    return null;
  }

  var body = document.body;
  if (body.classList.contains('page-home') && document.documentElement.lang === 'en') {
    var languages = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
    if (preferredLanguage(readSavedLanguage(), languages) === 'tr') {
      location.replace('tr/');
      return;
    }
  }

  // Table of contents: mark the section currently being read (wide screens).
  var tocLinks = document.querySelectorAll('.toc a[href^="#"]');
  if (!tocLinks.length || !('IntersectionObserver' in window)) return;

  var byId = {};
  tocLinks.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });

  var visible = {};
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) { visible[entry.target.id] = entry.isIntersecting; });
    var current = null;
    document.querySelectorAll('.prose > section[id]').forEach(function (section) {
      if (!current && visible[section.id]) current = section.id;
    });
    if (!current) return;
    tocLinks.forEach(function (a) { a.classList.remove('is-active'); });
    if (byId[current]) byId[current].classList.add('is-active');
  }, { rootMargin: '-15% 0px -55% 0px' });

  document.querySelectorAll('.prose > section[id]').forEach(function (section) {
    observer.observe(section);
  });
})();
