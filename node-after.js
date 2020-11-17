const Configly = require('configly-js');

(async (req, res) => {
  const configly = Configly.init('Dem0apiKEY',
  {
  //host: 'http://localhost:3000',
  }
  );
  const { cost, upgrades, tagLine } = await configly.get('iron_man_store');
  const options = upgrades.map((v, i) => `<option value="${i}">${v}</option>`);
  console.log(`
    <div>
        <p>The suit costs: ${cost}</p>
        <p>Here are the upgrades you can select:</p>
        <select>
          ${options.join("\n")}
        </select>
        <p> At Stark Enterprises we say "${tagLine}" </p>
    </div>
  `);


})();
