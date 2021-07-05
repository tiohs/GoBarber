import { Model, DataTypes } from 'sequelize';

class Help_orders extends Model {
  static init(sequelize) {
    super.init(
      {
        question: DataTypes.STRING,
        answer: DataTypes.STRING,
        answer_at: DataTypes.DATE,
      },
      { sequelize }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Students, { foreignKey: 'student_id' });
  }
}

export default Help_orders;
