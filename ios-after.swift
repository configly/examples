import configly

struct IronManInventory: Decodable {
    var cost: String
    var upgrades: [String]
    var tagLine: String
}

// ...

func populateViewController() {
  let vc = SecondaryViewController(nibName: "IronSuitStoreView", bundle: nil)

  let client = CNGClient.setup(withApiKey: "YOUR_API_KEY")
  client.stringDictionary(forKey: "iron_suit_store") { (error, value) -> () in
    guard let value = value else {
      return
    }
    vc.priceText = "The suit costs \(value["cost"] ?? "a lot")")
    vc.upgradeValues = [ value["upgrade1"], value["upgrade2"], value["upgrade3"] ]
    vc.tagLine ="At Stark Enterprises we say: \(value["tagLine"] ?? "not much")"
  };
}
