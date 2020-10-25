import { saveJSON } from "./src/utils";
import trelloBoard from "./trello.json";
import path from "path";
import { TrelloExporter } from "./src/TrelloExporter";

async function main() {
  const exporter = new TrelloExporter(trelloBoard);
  saveJSON(
    path.join(__dirname, trelloBoard.name + ".json"),
    exporter.exportLists()
  );
}

main();
