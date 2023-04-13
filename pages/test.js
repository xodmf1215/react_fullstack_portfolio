import { useState } from 'react';

function MyForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const handlePasswordCheckChange = (event) => {
    setPasswordCheck(event.target.value);
    if (event.target.value !== password) {
      console.log('Passwords do not match!');
    } else {
      console.log('Passwords match!');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with values:', id, password, passwordCheck);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="id">ID:</label>
      <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <label htmlFor="passwordCheck">Password Check:</label>
      <input type="password" id="passwordCheck" value={passwordCheck} onChange={handlePasswordCheckChange} />

      {passwordCheck !== password && <p>Passwords do not match!</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;