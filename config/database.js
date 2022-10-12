module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ccqd0fpa6gdj00lf4vbg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_qod3'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'NuMBA43WXMdjr5K5ZchM1L8x8yo9Recl'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
