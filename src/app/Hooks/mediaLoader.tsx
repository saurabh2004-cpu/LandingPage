import { useState, useEffect } from "react";

const useMediaLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const mediaElements = document.querySelectorAll("img, video");

    let loadedCount = 0;
    const totalCount = mediaElements.length;

    const checkIfLoaded = () => {
      loadedCount++;
      if (loadedCount === totalCount) {
        setIsLoading(false);
      }
    };

    mediaElements.forEach((element:any) => {
      if (element.complete) {
        checkIfLoaded();
      } else {
        element.addEventListener("load", checkIfLoaded);
        element.addEventListener("error", checkIfLoaded);
      }
    });

    return () => {
      mediaElements.forEach((element) => {
        element.removeEventListener("load", checkIfLoaded);
        element.removeEventListener("error", checkIfLoaded);
      });
    };
  }, []);

  return isLoading;
};

export default useMediaLoader;
