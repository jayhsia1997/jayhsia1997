import React from "react";

const AppLogo: React.FC<{ className?: string }> = ({ className = "h-10" }) => (
  <img src="/vite.svg" alt="AppLogo" className={className} />
);

export default AppLogo;
