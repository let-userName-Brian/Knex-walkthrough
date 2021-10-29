// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://postgres:docker@localhost/movies'
    // replace USER_NAME, USER_PASSWORD, and DATABASE_NAME with your Docker PostgreSQL container's username, password and an *empty* database
    // that you have created on your Docker PostgreSQL container volume
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'localhost/movies',
      user:     'postgres',
      password: 'docker'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
