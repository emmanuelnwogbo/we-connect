module.exports = {
  development: {
    url: 'postgres://uyoqfkhs:-TDBsrZLBdvWw8fS-atkbgEbY5qh2sKf@stampy.db.elephantsql.com:5432/uyoqfkhs'
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};