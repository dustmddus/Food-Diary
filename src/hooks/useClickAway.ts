import React, { useRef, useEffect } from "react";
import { JsxElement } from "typescript";

const events = ["mousedown", "touchstart"];

const useClickAway = (handler: any) => {
  // any 타입 수정
  const ref = useRef<any>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleEvent = (e: any) => {
      if (!element.contains(e.target)) handler();
    };

    events.forEach((event) => document.addEventListener(event, handleEvent));

    return () => {
      events.forEach((event) =>
        document.removeEventListener(event, handleEvent)
      );
    };
  }, [ref]);

  return ref;
};

export default useClickAway;
