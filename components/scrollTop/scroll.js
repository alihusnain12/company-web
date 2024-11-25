"use client";
import { useEffect } from "react";

const ScrollRefesh = () => {
  useEffect(() => {
    if (window.location.hash) {
      window.location.href = window.location.href.split('#')[0] + '#top';
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
};

export default ScrollRefesh;
