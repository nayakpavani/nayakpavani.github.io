import { useEffect, useState } from 'react';
import GitProfile from './components/GitProfile';
import axios from 'axios';

function App() {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const getConfig = async () => {
      try {
        const res = await axios.get(
          'https://portfolio-e3de5-default-rtdb.asia-southeast1.firebasedatabase.app/gitprofile.json'
        );
        setConfig(res.data);
      } catch (err) {
        console.error('Profile config could not be fetched');
      }
    };
    getConfig();
  }, []);

  if (!config) return <></>;

  return <GitProfile config={config} />;
}

export default App;
