import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <div className="grid place-content-center w-screen h-screen">{children}</div>;
};

export default AuthLayout;
