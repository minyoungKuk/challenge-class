import { PropsWithChildren } from "react";

// type VeryUsefulType<T> = T & { children: React.ReactNode }

interface CounterButtonProps {
  onClick: () => void;
}

function CounterButton({
  onClick: handleClick,
  children,
}: PropsWithChildren<CounterButtonProps>) {
  return (
    <button className="py-2 px-4" onClick={handleClick}>
      {children}
    </button>
  );
}

export default CounterButton;
