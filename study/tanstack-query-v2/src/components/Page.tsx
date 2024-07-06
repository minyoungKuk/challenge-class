import { PropsWithChildren } from "react";

const Page = ({ children }: PropsWithChildren) => {
  return <main className="px-5 py-10">{children}</main>;
};

export default Page;
