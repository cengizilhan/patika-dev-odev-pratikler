//const axios = require('axios');
import axios from 'axios';


export async function getData(number) {
    console.warn("get data function is working");
    const userId = parseInt(number);

    const endPointUser = 'https://jsonplaceholder.typicode.com/users/' + userId.toString();
    const endPointPost = 'https://jsonplaceholder.typicode.com/posts?userId=' + userId.toString();


    let { data: user } = await axios.get(endPointUser); //wait response end send to variable
    let { data: post } = await axios.get(endPointPost)

    user.posts = [{ ...post }];
    console.log(user);


}
