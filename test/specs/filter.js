describe('Filtering', function () {
  it('should work!', function () {
    browser.url('https://www.kirupa.com/html5/examples/filtering_list_items.htm')

    const listItems = $$('#itemsToFilter .showItem')
    let listItemsText = listItems.map(e => e.getText())
    console.log(listItemsText)

    $('input[name="foodCheckBox"]').click()

    listItemsText = $$('#itemsToFilter .showItem').map(e => e.getText())
    console.log(listItemsText)

    console.log($('#itemsToFilter').getText().split('\n'))
  })
})