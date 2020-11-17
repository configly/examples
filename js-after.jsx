<body>
<div>
  <p>The suit costs: <span id="#amount"></span>
  <p>The upgrades are: <select id="#upgrades"></select>
</div>
</body>
<script src="https://cdn.jsdelivr.net/npm/configly-js@2.0.4/dist/config.js"></script>
<script>
  var configly = Configly.init('Dem0apiKEY');
  configly.get('iron_man_store').then((value) => {
    if (!value) return;
    document.querySelector('#amount').innerHTML = value['cost'];
    value['options'].forEach((v, i) => {
      let o = document.createElement('option');
      o.value = 1;
      o.text = v;
     document.querySelector('#upgrades').add(o, null);
    })
  });
</script>
