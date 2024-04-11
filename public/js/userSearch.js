//const { response } = require("express");

const searchHandler = async (event) => {
    let search = document.querySelector('#searchBar').value;

    console.log(search);
    if(search) {
        document.location.replace(`/api/search/${search}`);
        // const response = await fetch(`/api/search/${search}`, {
        //     method: 'GET',
        //     //body: JSON.stringify({search}),
        //     headers: {'Content-Type': 'application/json'},
        // });

        // if(response.ok) {
        //     console.log("nice job");
        // }else {
        //     alert("User does not exist");
        //     console.log()
        // }
    }
};

document.querySelector('#search').addEventListener('click', searchHandler);

//<script src="../public/js/userSearch.js"></script>