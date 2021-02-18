// iOS / Swift "Mobile Copy" example
func setMarketingTagLine(callback: (String, String, String) -> ()) {
  CNGClient.setup(withApiKey: "Dem0apiKEY")
  CNGClient.shared().stringArray(forKey: "marketing_tag_line") { (error, value) in
    if (error != nil) {
      print("Failed with error \(error!.status): \(error!.message)")
      return
    }
    guard let copy = value else {
      print("Could not find this key. Are you using the right API Key?")
      return /
    }

    // In the real world, we would likely pass these variables for rendering.
    // callback(copy[0], copy[1], copy[2])

    // But, to demonstrate the idea, lets simply print them
    print(copy)
  }
}
