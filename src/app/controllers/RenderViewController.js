class RenderViewController {
  renderPage(req, res) {
    return res.render("reports");
  }
}

module.exports = new RenderViewController();
