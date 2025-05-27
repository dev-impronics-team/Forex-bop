
module.exports = (sequelize, DataTypes) => {
  const ForexStaticDataNew = sequelize.define(
    "forex_static_data_new",
    {
      key1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      key2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      value1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      value2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country_code: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      tableName: "forex_static_data_new",
      timestamps: false,
      freezeTableName: true
    }
  );

  return ForexStaticDataNew;
};
