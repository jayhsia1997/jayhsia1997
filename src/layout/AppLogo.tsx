import React from "react";

const AppLogo: React.FC<{ className?: string }> = ({ className = "h-10" }) => (
  <img src="/favicon_io/favicon.ico" alt="AppLogo" className={className} />
);

export default AppLogo;
