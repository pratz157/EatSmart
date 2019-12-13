module.exports = (sequelize, Sequelize) => {
    const menuItelm = sequelize.define('employee_details', {

        empId: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        empName: {
            type: Sequelize.STRING
        },
        empMail: {
            type: Sequelize.STRING
        },
        empPassword: {
            type: Sequelize.STRING
        },
        isVendor: {
            type: Sequelize.BOOLEAN
        },
    });
    
    return menuItelm;
  }