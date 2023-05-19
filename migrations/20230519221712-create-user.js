"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id: {
        type: Sequelize.UUID,
      },
      deleted: {
        type: Sequelize.BOOLEAN,
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
      name: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      zip: {
        type: Sequelize.STRING,
      },
      neighborhood: {
        type: Sequelize.STRING,
      },
      street: {
        type: Sequelize.STRING,
      },
      streetNumber: {
        type: Sequelize.STRING,
      },
      streetComplement: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
