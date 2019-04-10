// The data we are going to send in our request
let data = {
        name: "Nature"
    }
    // Create our request constructor with all the parameters we need
const url = `https://api.pexels.com/v1/search?query=people`;

let params = {
    method: 'GET',
    headers: {
        'Authorization': '563492ad6f917000010000010036213f92234cfa9bfcfc9fc2833aca',
        'Content-Type': 'application/json'
    },
    mode: 'no-cors'
};

fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        headers: {
            "Content-Type": "application/json",
            'Authorization': '563492ad6f917000010000010036213f92234cfa9bfcfc9fc2833aca',
        },
    })
    .then(function(result) {
        console.log(result)
    }).
catch(function(e) {
    console.log(e);
});
