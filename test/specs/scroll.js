describe('Scrolling in Elements', function () {
  it('should work', function () {
    browser.url('http://uitestingplayground.com/scrollbars')

    browser.saveScreenshot('button-hidden.png')

    // scroll to element
    const el = $('#hidingButton')
    browser.scrollIntoView(el.selector)

    browser.saveScreenshot('button-shown.png')
  })
})