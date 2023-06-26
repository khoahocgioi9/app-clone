import { Card, List } from "antd";
import React from "react";

const data = [
  {
    image: "../../assets/img.jpg",
    title: "Title 1",
    des: "a sad playlist",
  },
  {
    image: "../../assets/img.jpg",
    title: "Title 2",
    des: "a sad playlist",
  },
  {
    image: "../../assets/img.jpg",
    title: "Title 3",
    des: "a sad playlist",
  },
  {
    image: "../../assets/img.jpg",
    title: "Title 4",
    des: "a sad playlist",
  },
];

const ListComponent = () => {
  return (
    <List
      bordered={false}
      grid={{
        gutter: 16,
        column: 4,
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card bordered={false}>
            <a href="#">
              <img
                src="https://iiif.wellcomecollection.org/image/V0040328/full/full/0/default.jpg"
                alt={item.title}
                style={{
                  borderRadius: 5,
                  border: "1px solid #000000",
                  width: "100%",
                  height: "auto",
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                  objectFit: "cover",
                  filter: "brightness(70%)",
                }}
              ></img>
              <h1>{item.title}</h1>
              {item.des}
            </a>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default ListComponent;
