module.exports = (sequelize, Sequelize) => {
    const menuItelm = sequelize.define('menu_details', {

        // menu_id: {
        //     type: Sequelize.INTEGER
        // },
        name: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        },
        isToday: {
            type: Sequelize.INTEGER
        },
        isAvailable: {
            type: Sequelize.INTEGER
        },
    });
    
    return menuItelm;
  }