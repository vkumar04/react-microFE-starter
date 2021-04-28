import { useState } from 'react';

const App: React.FC = () => {
  const name = 'vick';
  const [age, setAge] = useState(null);
  return (
    <>
      <h1>{`Hello ${name}!`}</h1>
      <p>{age}</p>
      <button type="button" onClick={() => setAge(32)}>inc</button>
    </>
  );
};

export default App;
