import { Model, DataTypes } from 'sequelize';

class Matriculas extends Model {
  static init(sequelize) {
    super.init(
      {
        start_date: DataTypes.DATE,
        end_date: DataTypes.DATE,
        price: DataTypes.INTEGER,
      },
      { sequelize }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Students, { foreignKey: 'student_id' });
    this.belongsTo(models.Planos, { foreignKey: 'plan_id' });
  }
}

export default Matriculas;
