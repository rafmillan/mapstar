import React from "react";
import { Viewer } from "mapillary-js";
import { useState } from "react";
import PropTypes from 'prop-types';

export default function MapViewer(props) {
    // Create the Viewer Component
    class ViewerComponent extends React.Component {
        constructor(props) {
            super(props);
            this.containerRef = React.createRef();
        }

        componentDidMount() {
            this.viewer = new Viewer({
                accessToken: this.props.accessToken,
                container: this.containerRef.current,
                imageId: this.props.imageId,
            });
        }

        componentWillUnmount() {
            if (this.viewer) {
                this.viewer.remove();
            }
        }

        render() {
            return <div ref={this.containerRef} style={this.props.style} />;
        }
    }

    // logic to select location
    const [index, setIndex] = useState(0);
    const nextLocation = () => {
        if (index < props.data.length-1) {
            setIndex(index + 1);
        }
    }

    const  prevLocation = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    }
    console.log(index)

    return (
        <div>
            <ViewerComponent
                accessToken="MLY|6051789021569153|d33d8687e4ea07348dedf043ab9e3ccb"
                imageId={props.data[index].imageId}
                style={{ width: "100vw", height: "55vh" }}
            />
            <div className="flex justify-between">
                <button className="w-1/2 px-3 mx-1 my-2 text-white rounded border bg-slate-800 hover:bg-slate-900" 
                    onClick={prevLocation} 
                    disabled={index === 0}
                >
                    prev
                </button>
                <button className="w-1/2 py-3 mx-1 my-2 text-white rounded border bg-slate-800 hover:bg-slate-900" 
                    onClick={nextLocation} 
                    disabled={index === props.data.length-1}
                >
                    next
                </button>
            </div>
        </div>
    );
}
// id,city,country,imageId
MapViewer.propTypes = {
    maxValue: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        imageId: PropTypes.number.isRequired
      })
    ).isRequired,
};