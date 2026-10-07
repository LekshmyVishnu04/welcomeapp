import { useEffect } from 'react';

function App() {
  const message = 'Hello, user! Welcome to our site.';
  useEffect(() => {
    console.log('Welcome message displayed');
  }, []);
  return (
    <div className="App">
      <h1> Welcome App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
