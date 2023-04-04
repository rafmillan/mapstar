import React, { Component } from "react";
import { Viewer } from "mapillary-js";
import PropTypes from 'prop-types';

class ViewerComponent extends Component {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
    }

    componentDidMount() {
        if (this.containerRef.current) {
            this.viewer = new Viewer({
                accessToken: this.props.accessToken,
                container: this.containerRef.current,
                imageId: this.props.imageId,
                component: { cover: false },
            });
        }
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

export default function MapViewer(props) {
    const { imageId } = props;

    if (!imageId) {
        return <div>Error: No image ID provided</div>;
    }

    return (
        <div className="rounded-md">
            <ViewerComponent
                key={imageId}
                accessToken={process.env.REACT_APP_MAPILLARY_ACCESS_TOKEN}
                imageId={imageId}
                style={{ position: "relative", width: "100%", height: "50vh" }}
            />
        </div>
    );
}

MapViewer.propTypes = {
    imageId: PropTypes.string.isRequired,
};
