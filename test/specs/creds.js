const { user, password } = require('../config/credentials')

describe('Login', function () {
  it('should use the right credentials', function () {
    browser.url('./login')

    $('#username').setValue(user)
    $('#password').setValue(password)

    $('button*=Login').click()

    console.log(browser.getUrl())
  })
})