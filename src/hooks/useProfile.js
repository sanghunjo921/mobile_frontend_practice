import { useEffect, useState } from "react";

export const useProfile = () => {
  const [user, setUser] = useState("Anonymouse");

  useEffect(() => {
    setTimeout(() => {
      setUser("Tony");
    }, 5000);
  }, []);

  return [user, setUser];
};
