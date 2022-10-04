const dotenv = require("dotenv");
const {app} = require("./app");

dotenv.config({
    path: "./config.env",
});


app.listen(process.env.RUNNING_PORT, (error)=>{
    if(!error){
        console.log('Server is running on:', process.env.RUNNING_PORT);
    }
})