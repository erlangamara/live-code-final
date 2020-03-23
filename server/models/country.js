'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Country extends Model {}
  Country.init(
    {
      name: DataTypes.STRING,
      cases: DataTypes.INTEGER,
      deaths: DataTypes.INTEGER,
      recovered: DataTypes.INTEGER
    },
    {
      sequelize
    }
  );
  Country.associate = function(models) {
    Country.hasMany(models.Report, {foreignKey: 'CountryId'});
  };
  return Country;
};
