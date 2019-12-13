module.exports = (sequelize, Sequelize) => {
    const menuItelm = sequelize.define('employee_details', {

        empId: {
            type: Sequelize.INTEGER
        },
        empName: {
            type: Sequelize.STRING
        },
        emp_mail: {
            type: Sequelize.STRING
        },
        emp_password: {
            type: Sequelize.STRING
        },
        isAvailable: {
            type: Sequelize.INTEGER
        },
    });
    
    return menuItelm;
  }