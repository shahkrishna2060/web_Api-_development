const express = require ("express")
const contactController =require ('../controllers/contactControllers')
const appointmentController = require ("../controllers/appointmentController")
const reservationController = require ( "../controllers/reservationController")


const router = express.Router()

router.route("/addContact").post(contactController.addContact)
router.route("/appointments").post(appointmentController.addAppointment)
router.route("/reservation").post(reservationController.addReservation)

module.exports = router
