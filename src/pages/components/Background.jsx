import React from "react";

export default function Background() {
  const cloudComponents = [];

  for (let i = 0; i <= 35; i++) {
    cloudComponents.push(<div key={i} className={`cloud${i}`}></div>);
  }

  return <div className="cloud-background">{cloudComponents}</div>;
}
