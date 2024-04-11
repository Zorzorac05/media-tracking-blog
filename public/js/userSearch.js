const { response } = require("express");

const searchHandler = async (event) => {
    let search = document.querySelector('searchBar').ariaValueMax.trim();

    if(search) {
        const response = await fetch('/api/search/:name', {
            method: 'POST',
            body: JSON.stringify({search}),
            headers: {'Content-Type': 'application/json'},
        });

        if(response.ok) {
            console.log("nice job");
        }else {
            alert("User does not exist");
        }
    }
};

document.querySelector('search').addEventListener('submit', searchHandler);

//<script src="../public/js/userSearch.js"></script>