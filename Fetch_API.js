
let response = fetch("https://api.restful-api.dev/objects/");
console.log(response);

response.then(function (data) {
    console.log(data);
    return data.json();
}).then(function (myData) {
    console.log(myData);

}).catch(function () {
    console.error('data fetching failed');

})


async function FetchData() {
    let response = await fetch("https://api.restful-api.dev/objects/");
    console.log(response);

    let data = await response.json();
    console.log(data);

}

FetchData();
