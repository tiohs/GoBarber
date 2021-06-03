module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '5432',
  username: 'postgres',
  password: 'password',
  database: 'gostack',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
