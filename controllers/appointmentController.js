const Appointment = require("../models/appointmentModel");

const addAppointment = async (req, res) => {
  const { date, time } = req.body;

  if (!date && !time) {
    return res.status(400).json({
      success: false,
      message: "Enter all the required fields!",
    });
  }

  function isFutureDateTime(idate, itime) {
    var today = new Date().getTime(),
      parts = idate.split("/");
    timeParts = itime.split(":");

    var futureDate = new Date(
      parts[2],
      parts[1] - 1,
      parts[0],
      timeParts[0],
      // timeParts[1].getTime()
    );
    return today - futureDate < 0;
  }
  if (!isFutureDateTime(date, time)) {
    return res
      .status(400)
      .json({ success: false, message: "Please enter a future date and time" });
  }

  if (time == "15:00") {
    return res
      .status(400)
      .json({
        success: false,
        message: "Please enter another timelot this timelot is unavailable",
      });
  }
  try {
    const newAppointment = await Appointment.create({ date, time });
    return res.status(200).json({
      success: true,
      message: "Appointment created Successfully",
      appointment: newAppointment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Server problem ${error}`,
    });
    console.log(error);
  }
};

module.exports = { addAppointment };
