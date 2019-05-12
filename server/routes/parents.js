const express = require("express");
const router = express.Router();

const db = require("../db/parents");

router.get('/ecc', (req, res) => {
    db.getEccList()
    .then(daycares => {
        res.json(daycares)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

router.post('/createchild', (req, res) => {
    console.log('req.body: ', req.body)
    db.createChild(req.body)
    .then()
})

router.delete('/child', (req, res) => {
    console.log(req.body)
    db.deleteChild(req.body.id)
    .then(child => {
        res.json(child)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

router.get('/childwaitlist/:id', (req, res) => {
    console.log(req.params.id)
    db.getChildWaitlists(req.params.id)
    .then(waitlist => {
        res.json(waitlist)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})


module.exports = router