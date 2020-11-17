const loadStore = (req, res) => {
  res.send(`
    <div>
        <p>The suit costs: $1,000,000</p>
        <p>Here are the upgrades you can select:</p>
        <select>
           <option value="0">5G</option>
           <option value="1">AC</option>
           <option value="2">Hot rod paint</option>
        </select>
        <p> At Stark Enterprises we say "Sometimes you gotta run before you walk" </p>
    </div>
  `);
}
