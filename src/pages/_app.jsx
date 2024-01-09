import '@/styles/globals.css'
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const CleverTapComponent = dynamic(() => import('clevertap-web-sdk/clevertap'), {
  ssr: false, // This ensures CleverTap is not imported during server-side rendering
});

export default function App({ Component, pageProps }) {
  const [clevertapModule, setClevertapModule] = useState(null);

useEffect(() => {
  // Check if the code is running on the client side
  if (typeof window !== 'undefined') {
    clevertapInit();
  }
}, []);

const clevertapInit = async () => {
  // Check if CleverTap module is already initialized
  let clevertap = clevertapModule;
  if (!clevertap) {
    clevertap = await import('clevertap-web-sdk/clevertap');
    clevertap.default.init("xxx-xxx-xxx");
    clevertap.default.privacy.push({ optOut: false });
    clevertap.default.privacy.push({ useIP: false });
    clevertap.default.setLogLevel(3);
    setClevertapModule(clevertap.default);
  }

  if (clevertap) {
    clevertap.event.push('xxx'); // Popup Campaign
    clevertap.event.push('test'); // Banner Campaign
    clevertap.event.push('Internal test'); // Inbox Campaign
  }
};

const profileData = {
  "d": [
    {
      "identity": "345543",
      "type": "profile",
      "profileData": {
          "Name": "John Doe",
          "Email": "john03aug@abc.com"
      }
    }
  ]
};
  return (<>
 
  <Component {...pageProps} />
  </>
  )
}
