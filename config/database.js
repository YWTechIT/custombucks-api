module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'custombucksapi'),
        username: env('DATABASE_USERNAME', 'yw_tech'),
        password: env('DATABASE_PASSWORD', '0216'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
