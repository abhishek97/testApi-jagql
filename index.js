const jagql = require('@jagql/framework')


jagql.setConfig({
  protocol: 'http',
  hostname: 'localhost',
  port: 3001,
  base: 'api',
  meta: {
    description: 'This'
  }
})

require('./resources/posts')
require('./resources/comments')

jagql.start(() => console.log('Server running on 3001'))

