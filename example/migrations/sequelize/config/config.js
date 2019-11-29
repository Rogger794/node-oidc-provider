module.exports = {
  development: {
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.NAME,
    host: process.env.HOST,
    port: 5432,
    dialect: 'postgres',
    migrationStorageTableName: 'SequelizeMeta',
  },
  test: {
    username: '',
    password: '',
    database: '',
    host: '',
    dialect: 'postgres',
  },
  production: {
    username: '',
    password: '',
    database: '',
    host: '',
    dialect: 'postgres',
  },
};
