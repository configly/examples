const Configly = require('configly-js');

(async (req, res) => {
  const configly = Configly.init('20026b5f-6f2e-4435-889c-ee1e20eff94a');
  const test = await configly.get('test');
  console.log(test);


})();
