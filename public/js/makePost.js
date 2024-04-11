const { response } = require("express");

const postHandler = async (event) => {

    let post = {
        title: document.querySelector('postTitle'),
        content: document.querySelector('content'),
        user_id: 1,
    };

    const response = await fetch('/post', {
        method: 'POST',
        body: JSON.stringify({post}),
        headers: {'Content-Type': 'application/json'},
   });

   let seenMovie = document.querySelector('check').checked;

    if(seenMovie) {
        let seen = {
            title: document.querySelector('movieTitle'),
            review: document.querySelector('review'),
            user_id: 1,
        };

        const response = await fetch('/post/seen', {
            method: 'POST',
            body: JSON.stringify({seen}),
            headers: {'Content-Type': 'application/json'},
        });

    }else{

        let wish = {
            title: document.querySelector('movieTitle'),
            user_id: 1,
        };

        const response = await fetch('/post/wish', {
            method: 'POST',
            body: JSON.stringify({wish}),
            headers: {'Content-Type': 'application/json'},
        });

    }

};

