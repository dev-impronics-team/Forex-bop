const express = require("express");
const { db } = require("../models");
const router = express.Router();

router.post("/add/static-record", async (req, res) => {
    try {
        const addedRecord = await db.forex_static_data_new.create(req.body);
        res.status(200).json({ message: "Data added successfully", data: addedRecord });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
