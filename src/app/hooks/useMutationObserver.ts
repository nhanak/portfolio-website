"use client";

import { useEffect } from "react";

export function useMutationObserver(onMutationObserved: (args: any) => void) {
  useEffect(() => {
    const targetNode = document.documentElement;

    const config = {
      attributes: true,
      attributeFilter: ["class"],
      attributeOldValue: true,
    };

    // Callback function to execute when mutations are observed
    const callback: MutationCallback = (mutationList, observer) => {
      for (const mutation of mutationList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          const currentClassList = (mutation.target as HTMLElement).classList;
          //const oldClassList = mutation.oldValue;

          onMutationObserved(currentClassList);
        }
      }
    };

    const observer = new MutationObserver(callback);

    observer.observe(targetNode, config);

    return () => {
      observer.disconnect();
    };
  }, []);
}
