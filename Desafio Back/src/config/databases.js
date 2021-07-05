module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '5432',
  username: 'postgres',
  password: 'password',
  database: 'gimpoit',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
