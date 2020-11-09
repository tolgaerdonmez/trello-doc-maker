import fs from "fs";
import path from "path";

export function saveJSON(output, data) {
  fs.writeFileSync(output, JSON.stringify(data));
}

export function saveFile(filename, data) {
  const outputPath = path.join(__dirname, "..", filename);
  fs.writeFileSync(outputPath, data);
}
