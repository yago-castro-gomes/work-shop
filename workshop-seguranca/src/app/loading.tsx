import React from "react";

const Loader = () => (
  <div className="fixed top-0 left-0 w-screen h-screen z-[99999999999999] flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
  </div>
);

export default function RouteLoader() {
  return <Loader />;
}