module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cerhu9ha6gdlh2ubl2l0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_iepb'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'tx1KCT05PL6swzg1EuMe3rxbt5YooOEn'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
