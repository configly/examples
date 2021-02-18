const Configly = require('configly-js');

const getLocale = () => 'en-US';
(async (req, res) => {
  const configly = Configly.init(API_KEY);
  try {
    const language = getLocale();
    const text = await configly.get(`banner_text:${locale}`);
    res.render('template.html', {
      banner_text: text,
    })
  } catch (error) {
    handleError(error);
  }
})();
