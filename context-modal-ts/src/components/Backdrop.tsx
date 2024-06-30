import { PropsWithChildren } from "react";

const Backdrop = ({ children }: PropsWithChildren) => {
  return <div className="backdrop"> {children} </div>;
};

export default Backdrop;
