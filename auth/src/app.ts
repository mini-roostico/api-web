import ExpressConfig from "./configs/express.config";

const app = ExpressConfig();
const PORT = process.env.PORT || 8180;

function printInformation() {
  console.log(`    
           _     _      _    _                 _   _     
 ___ _   _| |__ (_) ___| | _| |_    __ _ _   _| |_| |__  
/ __| | | | '_ \\| |/ _ \\ |/ / __|  / _\` | | | | __| '_ \\ 
\\__ \\ |_| | |_) | |  __/   <| |_  | (_| | |_| | |_| | | |
|___/\\__,_|_.__// |\\___|_|\\_\\\\__|  \\__,_|\\__,_|\\__|_| |_|
              |__/                                       
 `);
  console.log("SPE Project - 2024/2025");
  console.log("Authors: Francesco Magnani, Luca Rubboli");
  console.log("Server Running on Port " + PORT);
}
app.listen(PORT, printInformation);
