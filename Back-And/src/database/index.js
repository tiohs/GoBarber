import Sequelize from 'sequelize';
import mongoose from 'mongoose';
import User from '../app/models/User';
import File from '../app/models/File';
import Appointments from '../app/models/Appointments';

import databaseConfig from '../config/databases';

const models = [User, File, Appointments];

class Database {
  constructor() {
    this.init();
    this.mongoose();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
  mongoose() {
    //
  }
}

export default new Database();
