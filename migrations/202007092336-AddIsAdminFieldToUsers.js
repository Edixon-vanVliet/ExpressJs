"use strict";

const columnAndTypes = [
    {
        name: "is_admin",
        type: (Sequelize) => {
            return {
                type: Sequelize.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            };
        },
    },
];

module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all(
            columnAndTypes.map((column) => {
                return queryInterface.addColumn(
                    "Users",
                    column.name,
                    column.type(Sequelize)
                );
            })
        );
    },
    down: (queryInterface, Sequelize) => {
        return Promise.all(
            columnAndTypes.map((column) => {
                return queryInterface.removeColumn("Users", column.name);
            })
        );
    },
};
