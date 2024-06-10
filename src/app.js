// app.js

const axios = require('axios');

// getData fonksiyonunu modül olarak dışa aktar
async function getData(userid) {
    const getUsers = () => {
        return new Promise(async (resolve,reject)=>{
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/" + userid);
            resolve(data);
        });
    };
    const getPost = () => {
        return new Promise(async (resolve,reject)=>{
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts?userId="+ userid);
            resolve(data)
        })
    }
    try {
        let userResponse = await getUsers();
        let post= await getPost();
        userResponse["posts"] = post;
      
        return userResponse;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}


module.exports = getData; // getData fonksiyonunu modül olarak dışa aktar
