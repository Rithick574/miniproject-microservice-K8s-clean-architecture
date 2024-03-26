import mongoose from "mongoose";

export default async () => {
  require("dotenv").config();
  console.log(process.env.MONGO_URI, "-----");
  try {
    await mongoose.connect(String(process.env.MONGO_URI));
    console.log("🍃🍃🍃🍃🍃🍃 Admin database connect 🍃🍃🍃🍃🍃🍃");
    console.log(`
  _____      _        _______ _     _             
 |  __ \\    | |      |__   __| |   (_)            
 | |__) |_ _| |_ _ __   | |  | |__  _ _ __   __ _ 
 |  ___/ _\` | __| '__|  | |  | '_ \\| | '_ \\ / _\` |
 | |  | (_| | |_| |     | |  | | | | | | | | (_| |
 |_|   \\__,_|\\__|_|     |_|  |_| |_|_|_| |_|\\__, |
                                            __/ |
                                           |___/ 
        `);
  } catch (error: any) {
    console.error(`🍁🍁🍁🍁🍁 Database Connection failed 🍁🍁🍁🍁🍁`);
    console.error(error.message);
    process.exit(1);
  }
};
