define({
  onSelectedItem: function() {
    this.view.onSelectLayer.isVisible = true;
  },
  onUnSelectedItem: function() {
    this.view.onSelectLayer.isVisible = false;
  }
});