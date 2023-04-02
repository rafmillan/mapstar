import React from "react";
import MapViewer from "../components/MapViewer";

export default function Map({data, answer}) {
    return (
        <div className="">
            <div className="">
                <MapViewer imageId={data[answer].imageId} />
            </div>
        </div>
    );
}
