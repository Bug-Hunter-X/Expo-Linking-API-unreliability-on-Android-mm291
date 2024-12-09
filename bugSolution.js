import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [initialUrl, setInitialUrl] = useState(null);
  const [deepLink, setDeepLink] = useState(null);

  useEffect(() => {
    const getInitialLink = async () => {
      const url = await Linking.getInitialURL();
      setInitialUrl(url);
    };

    const handleDeepLink = ({ url }) => {
      setDeepLink(url);
    };

    getInitialLink();

    const subscription = Linking.addEventListener('url', handleDeepLink);

    return () => subscription.remove();
  }, []);

  return (
    <View>
      {initialUrl && <Text>Initial URL: {initialUrl}</Text>}
      {deepLink && <Text>Deep Link: {deepLink}</Text>}
    </View>
  );
};

export default App;