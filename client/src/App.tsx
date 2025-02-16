// src/App.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from your server running on port 5000 at /api/v1
    axios.get('http://localhost:5000/api/v1')
      .then(response => {
        setMessage(response.data); // Setting the response data
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h1>React Client</h1>
      <h2>Message from Server:</h2>
      {message ? (
        <pre>{message}</pre> // Display the message from the server
      ) : (
        <p>Loading...</p> // Loading message while waiting for data
      )}
    </div>
  );
};

export default App;
