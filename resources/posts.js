const jagql = require('@jagql/framework')

jagql.define({
  namespace: 'json:api',
  resource: 'posts',
  description: 'All the posts',
  primaryKey: 'autoincrement',
  handlers: new jagql.MemoryHandler(),
  searchParams: {
    query: jagql.Joi.string()
  },
  attributes: {
    title: jagql.Joi.string().required(),
    content: jagql.Joi.string().required(),
    created: jagql.Joi.string().required(),
    author: jagql.Joi.string().required(),
    comments: jagql.Joi.many('comments')
  },
  examples: [{
    id: '1',
    type: 'posts',
    title: 'One Ring to rule them all',
    content: 'This is a story about one ring which get thrown down a volcano at the end.',
    author: 'abhishek97',
    created: '2018-06-6',
    comments: [
      { type: 'comments', id: '1'}
    ]
  }, {
    id: '2',
    type: 'posts',
    title: 'Harry Potter',
    content: 'There was once a boy named.....',
    author: 'abhishek97',
    created: '2018-06-6',
    comments: [
      { type: 'comments', id: '1'}
    ]
  }]
})