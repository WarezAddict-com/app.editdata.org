var config = {
  development: {
    slug: 'editdata-development',
    client_id: 'c8ad659e602436645622',
    redirect_uri: 'http://localhost:9966',
    gatekeeper: 'http://localhost:9999'
  },
  staging: {
    slug: 'editdata-staging',
    client_id: '679ec0937be0b9b24e66',
    redirect_uri: 'http://editdata.surge.sh',
    gatekeeper: 'https://editdata-staging.herokuapp.com'
  },
  production: {
    slug: 'editdata-production',
    client_id: '65dda308caf01e56f912',
    redirect_uri: 'http://app.editdata.org',
    gatekeeper: 'http://192.241.225.150:9999'
  }
}

module.exports = config[process.env.NODE_ENV]
