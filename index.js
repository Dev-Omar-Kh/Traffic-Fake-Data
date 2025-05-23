const express = require("express");
const app = express();
const { LPATData } = require("./db");

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
    res.send("LPAT fake data is running 🎉");
});

app.get("/home", (req, res) => {
    res.json(LPATData.home);
});

app.get("/officers", (req, res) => {
    res.json(LPATData.officers);
});

app.get("/admins", (req, res) => {
    res.json(LPATData.admins);
});

app.get("/vehiclesData", (req, res) => {
    res.json(LPATData.vehiclesData);
});

app.get("/ownersData", (req, res) => {
    res.json(LPATData.ownersData);
});

app.get("/reports", (req, res) => {
    res.json(LPATData.reports);
});

app.get("/logsData", (req, res) => {
    res.json(LPATData.logsData);
});

// ====== another app data ======

app.get("/eCommerceData", (req, res) => {
    res.json(LPATData.eCommerceData);
});

app.get("/reduxAppData", (req, res) => {
    res.json(LPATData.reduxAppData);
});

module.exports = app;