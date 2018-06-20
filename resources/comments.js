const jagql = require('@jagql/framework')

jagql.define({
  namespace: 'json:api',
  resource: 'comments',
  description: 'All the comments',
  primaryKey: 'autoincrement',
  handlers: new jagql.MemoryHandler(),
  searchParams: {
    query: jagql.Joi.number()
  },
  attributes: {
    body: jagql.Joi.string().required(),
    author: jagql.Joi.string().required(),
    created: jagql.Joi.string().required(),
    post: jagql.Joi.belongsToOne({
      resource: 'posts',
      as: 'comments'
    })
  },
  examples: [{
    id: '1',
    type: 'comments',
    body: 'The movie sux',
    author: 'abhishek97',
    created: '2018-06-6'
  }]
})