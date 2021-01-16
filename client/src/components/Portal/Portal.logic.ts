import React from "react";

export const usePortal = (id: string) => {
  const portalRoot = document.getElementById(id);
  const childrenElement = document.createElement("div");
  const childrenElementRef = React.useRef<HTMLDivElement>(childrenElement);

  React.useEffect(() => {
    if (!childrenElementRef || !portalRoot) return;

    portalRoot.appendChild(childrenElementRef.current);

    return () => {
      // eslint-disable-next-line
      childrenElementRef.current.remove();
    };
    // eslint-disable-next-line
  }, []);

  return { target: childrenElementRef.current };
};
