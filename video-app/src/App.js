import React from "react";
import { RenderContainer } from "./Render";
import { useContent } from "./Content";
import { contentFilter } from "./directory";
export default function App() {
  const { movies } = useContent("movies");
  const { series } = useContent("series");
  const slides = selectionFilter({ movies, series });

  return <RenderContainer slides={slides} />;
}
