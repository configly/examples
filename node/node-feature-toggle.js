const express = require('express');
const Configly = require('configly-js').Configly;

const configly = Configly.init('Dem0apiKEY');
const getContent = async (text) => {
  const featureIsEnabled = await configly.get('feature_html_decorate_is_enabled');
  if (featureIsEnabled) {
    return htmlDecorate(text);
  }
  return text;
}

const htmlDecorate = (content) => {
  return `<b style="color: red">${content}</b>`;
};

const app = express();
app.get('/', (async (req, res) => {
  try {
    const content = await getContent('Welcome to my website');
    res.send(content);
  } catch (error) {
    console.log(error);
    return;
  }
}));
app.listen(5000);
