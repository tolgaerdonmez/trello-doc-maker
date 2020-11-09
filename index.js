import "dotenv/config";
import { TrelloExporter } from "./src/TrelloExporter";
import { render } from "./src/renderer";
import { createPdf } from "./src/createPdf";

import trelloBoard from "./trello.json";
import { saveFile } from "./src/utils";

const DEV = process.env.DEV === "true";

async function main() {
  const exporter = new TrelloExporter(trelloBoard);
  const board = exporter.exportLists();

  const [html, styleTag] = render(board);

  const htmlContent = styleTag + html;

  if (!DEV) await createPdf("output.pdf", htmlContent);
  else saveFile("output.html", htmlContent);
}

main();
