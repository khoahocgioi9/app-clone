import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { Card, Col, Image, List, Row, Typography } from "antd";
import React from "react";

const BannerComponent = ({ bannerItem, chapterItem, authorItem }) => {
  if (!bannerItem) {
    return <div>Cant find banner</div>;
  }
  if (!chapterItem || !chapterItem.chaps) {
    return <div>Cant find data chapter</div>;
  }
  if (!authorItem) {
    return <div>Cant find data author</div>;
  }
  return (
    <>
      <Card>
        <Row>
          <Col xs={12} sm={8} md={6} lg={4}>
            <Image
              key={bannerItem.key}
              src={bannerItem.image}
              className="w-100"
            />
          </Col>
          <Col xs={12} sm={16} md={18} lg={20}>
            <div className="infor" style={{ marginLeft: 20 }}>
              <div
                style={{
                  color: "#212121",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                <div className="title h4 mb-3">{bannerItem.title}</div>
              </div>
              <div>
                Author: <b>{authorItem.name}</b>
                <p>
                  Total chap: <b>{bannerItem.totalChaps}</b>
                </p>
                <p>
                  Category: <b>{bannerItem.type}</b>
                </p>
                <p>Description: {bannerItem.description}</p>
                <div>
                  <PlayCircleFilledWhiteIcon
                    style={{
                      cursor: "pointer",
                      fontSize: 60,
                      color: "#2B2730",
                      backgroundColor: "#FFFFFF",
                      borderRadius: " 100%",
                    }}
                  />
                  <b>Play</b>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
      <Card style={{ marginTop: 20, marginBottom: 40 }}>
        <div className="title h4 mb-3 ">Chapter</div>
        <List
          bordered
          dataSource={chapterItem.chaps.map((chap) => chap.title)}
          renderItem={(item1) => (
            <List.Item>
              <Typography.Text style={{ cursor: "pointer" }}>
                <PlayArrowIcon />
              </Typography.Text>{" "}
              {item1}
            </List.Item>
          )}
        />
      </Card>
    </>
  );
};

export default BannerComponent;
