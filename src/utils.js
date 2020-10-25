import fs from "fs";

export function saveJSON(output, data) {
  fs.writeFileSync(output, JSON.stringify(data));
}
