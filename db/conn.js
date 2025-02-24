require("dotenv").config();
const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(
    `mongodb+srv://roberto:b8F4jvwt0KEGxa8w@cluster0.retqg.mongodb.net/todolist?retryWrites=true&w=majority&appName=Cluster0`
  );
  console.log("Conectamos ao MongoDB Atlas!");
}

main().catch((err) => console.log(err));

module.exports = mongoose;
