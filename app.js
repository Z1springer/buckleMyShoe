const express = require("express");
const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Called Correctly");

  res.render("home", { message: null });
});

function buckleConverter(number) {
  // let message = req.body;
  let message = { message: `You entered: ${number}` };
  if (number == 1 || number == 2) {
    message = { message: "BUCKLE MY SHOE" };
  } else if (number == 3 || number == 4) {
    message = { message: "SHUT THE DOOR" };
  } else if (number == 5 || number == 6) {
    message = { message: "PICK UP STICKS" };
  } else if (number == 7 || number == 8) {
    message = { message: "LAY THEM STRAIGHT" };
  } else if (number == 9 || number == 10) {
    message = { message: "A BIG FAT HEN!" };
  }
  return message;
}

app.post("/", (req, res) => {
  if (req.body.num) {
    let number = req.body.num;
    let message = buckleConverter(number);
    res.render("home", message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:$(PORT)`);
});
