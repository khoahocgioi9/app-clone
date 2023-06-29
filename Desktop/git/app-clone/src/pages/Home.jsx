/** @format */

import React, { useEffect, useState } from "react";
import { audios } from "../datas/poster";
import CategoryComponent from "../components/CategoryComponent";

export const Home = () => {
  const [topListenAudios, setTopListenAudios] = useState([]);

  useEffect(() => {
    getTopListensAudios();
  }, []);

  const getTopListensAudios = () => {
    const newAudios = [...audios];
    newAudios.sort((a, b) => b.listens - a.listens);

    const items = [];

    newAudios.forEach((item) => items.length < 4 && items.push(item));

    setTopListenAudios(items);
  };

  // console.log(topListenAudios);

  return (
    <div className="italic" style={{ marginBottom: 100 }}>
      <CategoryComponent
        url="/top-listens"
        title={"Top Listen"}
        data={topListenAudios}
      />
      <CategoryComponent
        url="/top-listens"
        title={"Top Listen"}
        data={topListenAudios}
      />
      <CategoryComponent
        url="/top-listens"
        title={"Top Listen"}
        data={topListenAudios}
      />
      <CategoryComponent
        url="/top-listens"
        title={"Top Listen"}
        data={topListenAudios}
      />
    </div>
  );
};
