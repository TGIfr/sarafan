'use strict';
const Mongoose = require('mongoose');
const Utils = require('@utils');
const config = require('@config');

let Company = new Mongoose.Schema({
    address: {
        area: {
            required: true,
            type: String
        },
        city: {
            required: true,
            type: String
        },
        street: {
            required: true,
            type: String
        },
        building: {
            required: true,
            type: Number
        }
    },
    administration: {
        type: [Mongoose.Schema.Types.ObjectId],
        required: true,
        default: []
    },
    staff: {
        type: [Mongoose.Schema.Types.ObjectId],
        required: true,
        default: []
    },
    moderators: {
        type: [Mongoose.Schema.Types.ObjectId],
        required: true,
        default: []
    },
    invites: {
        type: [Mongoose.Schema.Types.ObjectId],
        required: true,
        default: []
    },
    info: {
        type: String,
        default: ``
    }
});

Company.plugin(require("mongoose-paginate"));

let companyModel = Mongoose.model('Company', Company);
module.exports = companyModel;