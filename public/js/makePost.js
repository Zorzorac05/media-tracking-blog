document.getElementById('submitForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log("you are here")
    let post = {
        title: document.querySelector('#postTitle').value,
        content: document.querySelector('#content').value,
        user_id: 1,
    };
    console.log(JSON.stringify(post));
    const response = await fetch('/post', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {'Content-Type': 'application/json'},
   });

   let seenMovie = document.querySelector('#seen-movie-checkbox').checked;

    if(seenMovie) {
        
        // let seen = {
        //     title: document.querySelector('#movieTitle').value,
        //     review: document.querySelector('#rating-review-field').value,
        //     user_id: 1,
        // };

        // const response = await fetch('/post/seen', {
        //     method: 'POST',
        //     body: JSON.stringify({seen}),
        //     headers: {'Content-Type': 'application/json'},
        // });

    }else{

        // let wish = {
        //     title: document.querySelector('#movieTitle').value,
        //     user_id: 1,
        // };

        // const response = await fetch('/post/wish', {
        //     method: 'POST',
        //     body: JSON.stringify({wish}),
        //     headers: {'Content-Type': 'application/json'},
        // });

    }
});