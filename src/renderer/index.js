import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import Template from "./components/Template";

export function render(board) {
  const css = new ServerStyleSheet();

  // rendering html to string & creating styles
  const html = renderToString(css.collectStyles(<Template board={board} />));

  // rendering styles to <style> tag
  const styleTag = css.getStyleTags();
  css.seal();

  return [html, styleTag];
}
