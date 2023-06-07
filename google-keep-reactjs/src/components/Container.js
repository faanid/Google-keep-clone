import React from "react";

const Container = (props) => {
  const { children } = props;
  return (
    <div className="flex item-center justify-center p-12">
      <div className="w-full max-w-xs mx-auto">{children}</div>
    </div>
  );
};

export default Container;
