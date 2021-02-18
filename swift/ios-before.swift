func populateViewController() {
  let vc = SecondaryViewController(nibName: "IronSuitStoreView", bundle: nil)
  vc.priceText = "The suit costs $1,000,000"
  vc.upgradeValues = ["5G", "AC", "Hot rod paint"]
  vc.tagLine = "At Stark Enterprises we say \"Sometimes you gotta run before you walk\""
}
