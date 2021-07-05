import { Model, DataTypes } from 'sequelize';

class Students extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        idade: DataTypes.INTEGER,
        peso: DataTypes.INTEGER,
        altura: DataTypes.INTEGER,
      },
      { sequelize }
    );

    return this;
  }
}

export default Students;
