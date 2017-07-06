function language_change(language) {

  let options = {
    fallbackLng: language,
    lng: language,
    backend: {
      loadPath: './locales/{{lng}}.json'
    }
  };

  i18next
  .use(i18nextXHRBackend)
  .init(options, function (err, t) {
    // for options see
    // https://github.com/i18next/jquery-i18next#initialize-the-plugin
    jqueryI18next.init(i18next, $);

    // start localizing, details:
    // https://github.com/i18next/jquery-i18next#usage-of-selector-function
    $('.nav').localize();
    $('.content').localize();
  });
}