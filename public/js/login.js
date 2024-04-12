const loginFormHandler = async (event) => {
  event.preventDefault();

  let login = {
    name: document.querySelector('#username-login').value,
    password: document.querySelector('#password-login').value,
  };
  // try {
  const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify(login),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/');
  } else {
    console.log(response)
    document.location.replace('/');
    alert('Failed to log in. Lets try that again, but this time... WITH FEELING!');
  }
  // } catch (error) {
  //   console.error('Error:', error);
  // }
};


const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up. Authorities have been dispatched to your location.');
    }
  }
};

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);

// document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
