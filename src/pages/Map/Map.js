import './Map.css';

import '@arcgis/core/assets/esri/themes/light/main.css';
import React, {useEffect, useRef} from "react";
import WebMap from "@arcgis/core/WebMap";
import SceneView from "@arcgis/core/views/SceneView";
import Search from "@arcgis/core/widgets/Search";
const defaultOnChange = () => {};
function Map({portalItem, onChange = defaultOnChange}) {

    const mapDiv = useRef(null);

    useEffect(() => {
        let view = null;
        if (mapDiv.current) {
            const webMap = new WebMap({
                portalItem: {
                    id: '41281c51f9de45edaf1c8ed44bb10e30', // Example ArcGIS Web Map ID
                },
            });

             view = new SceneView({
                container: mapDiv.current,
                map: webMap,
                center: [-117.254331, 34.162575],
                zoom: 13,
            });

            view.when(() => {
                const searchWidget = new Search({
                    view: view,
                });

                view.ui.add(searchWidget, 'top-right'); // Add the search widget to top-right
            })
        }

        return () => {
            if (view) {
                view.destroy();
            }
        }
    }, [mapDiv]);

    return (
            <div ref={mapDiv} className='map-container'></div>
    )
}

export default Map;
