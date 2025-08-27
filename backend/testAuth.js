const http = require('http');
const https = require('https');
const fetch = require('node-fetch');

(async () => {
  try {
  const signupResp = await fetch('http://127.0.0.1:3002/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'verifytest4@example.com', username: 'verifytest4', password: 'pass1234' })
    });
  const signupText = await signupResp.text();
  console.log('Signup status:', signupResp.status);
  console.log('Signup raw body:', signupText.substring(0, 1000));
  let signup;
  try { signup = JSON.parse(signupText); } catch(e) { signup = null; }
  console.log('Parsed signup JSON:', signup);
    if (!signup.token) return;
    const token = signup.token;
  const verifyResp = await fetch('http://127.0.0.1:3002/api/verify-user', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + token }
    });
    const verify = await verifyResp.json();
    console.log('Verify:', verify);
  } catch (err) {
    console.error(err);
  }
})();
