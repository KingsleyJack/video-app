import React, { useState, useEffect } from "react";
import {
  Header,
  HeaderLink,
  Card,
  CardTitle,
  CardEntities,
  CardMeta,
  CardItem,
} from "./styles";

export function RenderContainer({ slides }) {
  const [category, setCategory] = useState("movies");
  const [slidesRows, setSlidesRows] = useState([]);

  useEffect(() => {
    setSlidesRows(slides[category]);
  }, [slides, category]);
  return (
    <>
      <Header>
        <HeaderLink
          active={category === "movies" ? "true" : "false"}
          onClick={() => setCategory("movies")}
        >
          Movies
        </HeaderLink>
        <HeaderLink
          active={category === "series" ? "true" : "false"}
          onClick={() => setCategory("series")}
        >
          Series
        </HeaderLink>
      </Header>
      {slidesRows.map((slideItem) => (
        <Card>
          <CardTitle>{slideItem.title}</CardTitle>
          <CardEntities>
            {slideItem.data.map((item) => (
              <CardItem key={item.docId} item={item}>
                <CardMeta>
                  <CardSubTitle>{item.title}</CardSubTitle>
                  <p>{item.description}</p>
                </CardMeta>
              </CardItem>
            ))}
          </CardEntities>
        </Card>
      ))}
    </>
  );
}
