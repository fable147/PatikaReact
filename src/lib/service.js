// main.js

const getData = require('../app.js');

async function main() {
    console.log("girdi");
    try {
        const data = await getData(1);
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
