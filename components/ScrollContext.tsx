import { DataProvider } from "@plasmicapp/react-web/lib/host";
import React, { useEffect } from "react";

export default function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Current scrollY:", window.scrollY);  // Log current scroll position
      setIsScrolled(window.scrollY > 0);
      console.log("isScrolled state:", window.scrollY > 0);  // Log isScrolled state after update
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      console.log("Cleanup called");  // Log when cleanup is being performed
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);  // Ensuring the effect setup/cleanup runs only once

  return (
    <DataProvider name={"isScrolled"} data={isScrolled}>
      {children}
    </DataProvider>
  );
}
