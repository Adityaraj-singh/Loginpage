import { useState, useLayoutEffect } from "react";
const useDeviceType = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  const updateSize = () => {
    setSize([window.innerWidth, window.innerHeight]);
  };

  const maxWidthForMobileLayout = 650;

  useLayoutEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return [size[0] < maxWidthForMobileLayout, size[0], size[1]];
};

export default useDeviceType;
