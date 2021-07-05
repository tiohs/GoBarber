import { Model, DataTypes } from 'sequelize';
import { compare } from 'bcryptjs';
class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
  checkPassword(password) {
    return compare(password, this.password_hash);
  }
}

export default User;
