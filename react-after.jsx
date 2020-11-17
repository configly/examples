<ConfiglyContext.Provider value={{apiKey: 'Dem0apiKEY'}}>
  <div>
    <p> The suit costs: <ConfiglyText prop="suit_cost" /> </p>
    <p> Pick an upgrade! </p>
    <ConfiglyDropdown prop="suit_upgrades" />
    <p> At Stark Enterprises we say <ConfiglyText prop="suit_marketing_copy" /> </p>
  </div>
</ConfiglyContext.Provider>
