let creds = {
  user: 'georgeburdell',
  password: 'gt1927'
}

if (process.env.USE_PROD === 'true') {
  creds = {
    user: 'tomsmith',
    password: 'SuperSecretPassword!'
  }
}

module.exports = creds