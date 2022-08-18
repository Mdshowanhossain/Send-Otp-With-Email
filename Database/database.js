const mongoose = require("mongoose");

const connectData = async () => {
  await mongoose
    .connect(process.env.MONO_URL, {})
    .then(() => console.log("Database connection established"))
    .catch((err) => console.log(err.message));
};

module.exports = connectData;
