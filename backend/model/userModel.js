const { Schema, model } = require('mongoose');

const userTableData = Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});

module.exports = model('user-data', userTableData);
