const Configly = require('configly-js');

(async (req, res) => {
  //const apiKey = 'Dem0apiKEY';
  //const apiKey = '40bf8414-2795-4cff-972e-27f7b32e9751';
  //const apiKey = 'aeea42b7-1f9a-4027-89f3-6a30337c5925';
  const apiKey = 'bbd74a40-afdf-4739-b88c-a7315700087d'; //orderpronto prod
  const configly = Configly.init(apiKey,
  {
  //host: 'http://localhost:3000',
  //host: 'https://configly.herokuapp.com',
  }
  );
  try {
    const t0 = Date.now();
    console.log(await configly.get('a_new_key'));
    console.log('Done. Time: ' + (Date.now() - t0));
    return;
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
  } catch (error) {
    console.log('error');
    console.log(error);
    return;
  }


})();
