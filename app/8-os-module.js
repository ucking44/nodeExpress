const os = require('os')

// INFO ABOUT CURRENT USER
const user = os.userInfo()

console.log(user)

//  METHOD RETURNS THE SYSTEM UPTIME IN SECONDS
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)
