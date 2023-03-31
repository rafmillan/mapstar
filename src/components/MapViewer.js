import React from "react";
import { Viewer } from "mapillary-js";
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
                component: {cover: false},
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

    return (
        <div className="rounded-md">
            <ViewerComponent
                accessToken="MLY|6051789021569153|d33d8687e4ea07348dedf043ab9e3ccb"
                imageId={props.imageId}
                style={{ position:"relative", width: "100%", height: "55vh" }}
            />
        </div>
    );
}
// id,city,country,imageId
MapViewer.propTypes = {
    imageId: PropTypes.string.isRequired,
};