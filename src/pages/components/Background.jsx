import React from "react";

export default function Background() {
  const cloudComponents = [];

  for (let i = 0; i <= 29; ++i) {
    cloudComponents.push(
      <div key={i} className={`cloud initial-cloud${i} small-cloud`}></div>
    );
  }

  for (let i = 0; i <= 29; i++) {
    cloudComponents.push(
      <div key={i} className={`cloud cloud${i} small-cloud`}></div>
    );
  }

  for (let i = 30; i <= 33; i++) {
    cloudComponents.push(
      <div key={i} className={`cloud cloud${i} medium-cloud`}></div>
    );
  }

  return <div className="cloud-background">{cloudComponents}</div>;
}
