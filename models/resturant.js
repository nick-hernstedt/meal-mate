module.exports = function(sequelize, DataTypes) {
  var Resturant = sequelize.define("Resturant", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1],
    },
  });

  Resturant.associate = function(models) {
    
    
    Resturant.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Resturant;
};
