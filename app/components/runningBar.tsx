"use client";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [showNotification, setShowNotification] = useState(true);
  // Check localStorage to see if the notification should be hidden
  useEffect(() => {
    const localStorageValue = localStorage.getItem('hideNotification');
    if (localStorageValue === 'true') {
      setShowNotification(false);
    }
  }, []);

  // Function to hide the notification and update localStorage
  const hideNotification = () => {
    console.log('Hiding notification');
    setShowNotification(false);
    localStorage.setItem('hideNotification', 'true');
  };
  return (
    <div>
      {showNotification && (
        <div className="flex relative pl-8 pt-2 pb-2 border border-gray-400 bg-gray-400">
          <div className="overflow-hidden whitespace-nowrap w-full flex">
            <div
              className="inline-block animate-marquee w-auto"
              style={{
                animation: "marquee 45s linear infinite", // Adjust the duration for speed
                whiteSpace: "nowrap",
              }}
            >
              <span>
                We recommend that you use the latest version of Google Chrome or
                Microsoft Edge to interact within Osmosis Learn [Supported for
                PC, Mac, Android, iOS and Linux].{" "}
                <span>
                  {" "}
                  For a better experience, please allow pop ups and cookies
                  required by your browser and 3rd party sites
                </span>
              </span>
            </div>
          </div>
          <button className="w-10 pt-1/2" onClick={() => hideNotification()}>
            {" "}
            X{" "}
          </button>
        </div>
      )}
      <button className="mt-12 ml-12 w-16 h-8 text-white text-sm bg-red-400 rounded-md" onClick={()=> { localStorage.clear(); } }>Refresh</button>
    </div>
  );
};

export default NavBar;
