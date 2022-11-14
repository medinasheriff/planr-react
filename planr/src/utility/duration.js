
const monthArray = [
  "apple",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const duration = (startDuration, endDuration) => {
  let status;

  let startDateFormat = startDuration.split("-");
  let endDateFormat = endDuration.split("-");

  // Destructure the above array.
  let [startYear, startMonth, startDay] = startDateFormat;
  let [endYear, endMonth, endDay] = endDateFormat;

  startMonth =
    monthArray[Number(startMonth) < 10 ? startMonth.slice(1) : startMonth];
  endMonth = monthArray[Number(endMonth) < 10 ? endMonth.slice(1) : endMonth];

  // convert date into milliseconds for math; new Date("year month, day")
  let startDate = new Date(`${startYear} ${startMonth},${startDay}`).getTime();
  let endDate = new Date(`${endYear} ${endMonth},${endDay}`).getTime();

  // new Date() returns present date
  let currentDate = new Date().getTime();

  // status logic
  if (startDate <= currentDate && endDate <= currentDate) {
    // setStatus("completed");
    status = "completed";
    // setFormdata({
    //   ...formData,
    //   status,
    // });
  } else if (startDate < currentDate && endDate > currentDate) {
    // setStatus("Ongoing");
    status = "Ongoing";
    // setFormdata({
    //   ...formData,
    //   status,
    // });
  } else if (startDate > currentDate && endDate > currentDate) {
    // setStatus("Pending");
    status = "Pending";
    // setFormdata({
    //   ...formData,
    //   status,
    // });
  } else {
    // setStatus("Failed");
    status = "failed";
    // setFormdata({
    //   ...formData,
    //   status,
    // });
  }

  return status;
};