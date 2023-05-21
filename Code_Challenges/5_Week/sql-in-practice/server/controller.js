require('dotenv').config();

//destructure connection string from process .env
const {CONNECTION_STRING} = process.env ;
// Require the sequelize package & Save it to variable Sequelize
const Sequelize = require('sequelize') ;

// Initialize a new Seuelize instance "sequelize", passing in connection string & object
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});


let nextEmp = 5

module.exports = {
    getUpcomingAppointments: (req, res) => {
        sequelize.query(`SELECT a.appt_id, a.date, a.service_type, a.approved, a.completed, u.first_name, u.last_name 
            from cc_appointments a
            JOIN cc_emp_appts ea on a.appt_id = ea.appt_id
            JOIN cc_employees e on e.emp_id = ea.emp_id
            JOIN cc_users u on e.user_id = u.user_id
            WHERE a.approved = true and a.completed = false
            ORDER BY a.date desc;`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    approveAppointment: (req, res) => {
        let {apptId} = req.body
    
        sequelize.query(`
            UPDATE cc_appointments
            SET approved = true
            WHERE appt_id = ${apptId};
            INSERT INTO cc_emp_appts (emp_id, appt_id)
            VALUES (${nextEmp}, ${apptId}),
            (${nextEmp + 1}, ${apptId});
        `)
        .then(dbRes => {
            res.status(200).send(dbRes[0])
            nextEmp += 2
        })
        .catch(err => console.log(err))
    },

    getAllClients: (req, res) => {
        sequelize.query(`
            SELECT *
            FROM cc_clients AS c
            JOIN cc_users AS u
            ON c.user_id = u.user_id;
            `
        ).then (dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    getPendingAppointments: (req, res) => {
        sequelize.query(
            `SELECT *
            FROM cc_appointments
            WHERE approved = false
            ORDER BY date DESC;
            `
        ).then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    getPastAppointments: (req, res) => {
        sequelize.query(`
            SELECT a.appt_id, a.date, a.service_type, a.notes, u.first_name, u.last_name    
            FROM cc_appointments a
            JOIN cc_emp_appts ea on a.appt_id = ea.appt_id
            join cc_employees e on e.emp_id = ea.emp_id
            join cc_users u on e.user_id = u.user_id
            where a.approved = true and a.completed = true
            order by a.date desc;
            `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    completeAppointment: (req,res) => {
        sequelize.query(`
            UPDATE cc_appointments
            SET completed = true
            WHERE appt_id = ${req.body.apptId} ;
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    }
}

