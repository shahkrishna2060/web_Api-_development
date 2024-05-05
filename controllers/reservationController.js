const Reservation = require ("../models/reservationModel")

const addReservation = async (req, res) => {
    const {userId,eventDate, numberOfGuests} = req.body

    if (!userId || !eventDate || !numberOfGuests) {
        return res.status(400).json({
            success: false,
            message: "Enter all the required fields!"
        })
    }

    const newEventDate = new Date(eventDate)

    function isFutureDate(idate) {
        var today = new Date().getTime(),
        idate=idate.split("/")

        idate = new Date (idate[2], idate[1]-1, idat[0]).getTime()
        return today - idate <0 ? true : false
        
    }
    if (!isFutureDate(eventDate)) {
        return res.status(400).json({
            success:false,
            message: "Please enter future date"
        })
    }
    if (numberOfGuests < 1) {
        return res.status(400).json({
            success:false,
            message: "Number of guests must be in positive"
        })
    }

    try {
        const newReservation = await Reservation.create({
            userId,
            eventDate,
            numberOfGuests,
        })
        return res.status(200).json({
            success: true,
            message : "Reservation created successfully",
            reservation : newReservation
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message : `Server problem ${error}`

        })
        console.log(error)
        
    }
}
module.exports = {addReservation}