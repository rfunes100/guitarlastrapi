module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ces67tcgqg4dp7p1skqg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_tt88'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'w8P0S8uOdArH6QaHCqSOmfNE45ySg3BW'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
