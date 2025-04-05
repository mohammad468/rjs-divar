import React, { useState } from "react";
import Category from "src/components/templates/home/Category";
import Content from "src/components/templates/home/Content";

const containerClass =
  "container mx-auto lg:max-w-screen-2xl grid grid-cols-12 md:grid-rows-[55px_minmax(500px,_1fr)] md:gap-8";

function HomePage() {
  const [active, setActive] = useState("/");

  return (
    <div className={containerClass}>
      <Category active={active} setActive={setActive} />
      <Content active={active} />
    </div>
  );
}

export default HomePage;
