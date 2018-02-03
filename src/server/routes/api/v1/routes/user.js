"use strict";
const express = require('express');
const router = express.Router();
const Utils = require('@utils');
const passport = require('passport');

const UserDB = require('@DBfolder/users');
const CompanyDB = require('@DBfolder/company');

router.get('/:id', async (req, res, next) => {
    let user = await UserDB.get.byID(req.params.id);

    if (user) {
        return res.json({
            success: true,
            item: user.info()
        });
    } else {
        return Utils.sendError(res, 404, 'Not found');
    }
});

router.get('/:id/companies', async (req, res, next) => {
    let user = await UserDB.get.byID(req.params.id);

    if (user) {
        return res.json({
            success: true,
            item: await CompanyDB.find.byAdmin(user.id)
        });
    } else {
        return Utils.sendError(res, 404, 'Not found');
    }
});

module.exports = router;