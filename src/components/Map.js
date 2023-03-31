import React from "react";
import MapViewer from "../components/MapViewer";

export default function Map({data, answer}) {
    return (
        <div className="">
            <div className="">
                <MapViewer imageId={data[answer].imageId} />
            </div>
            {/* <div className="flex justify-between">
                <button className="w-1/2 py-1 mx-1 my-2 text-white rounded border bg-slate-800 hover:bg-slate-900"
                    onClick={prevLocation}
                // disabled={index === 0}
                >
                    prev
                </button>
                <button className="w-1/2 py-1 mx-1 my-2 text-white rounded border bg-slate-800 hover:bg-slate-900"
                    onClick={nextLocation}
                // disabled={index === data.length - 1}
                >
                    next
                </button>
            </div> */}
        </div>
    );
}
