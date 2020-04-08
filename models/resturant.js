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
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Resturant.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Resturant;
};
