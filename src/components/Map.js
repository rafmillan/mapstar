import React from "react";
import MapViewer from "../components/MapViewer";
import { CSV } from "../locations.js"

function parseCsv(csvData) {
    const rows = csvData.split('\n');
    const headers = rows[0].split(',');
    return rows.slice(1).map(row => {
        const values = row.split(',');
        const obj = {};
        headers.forEach((header, i) => {
            obj[header] = values[i];
        });
        return obj;
    });
}
const data = parseCsv(CSV);

export default function Map() {
  return (
    <>
      <MapViewer data={data}/>
    </>
  );
}
