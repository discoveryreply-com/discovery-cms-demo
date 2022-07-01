import {useContext} from "react";
import {DiscoveryContext} from '@discovery-frontend/cms-connector'
import DiscoveryComponent from "./DiscoveryComponent";

export default function DiscoveryComponents() {
    const dataCtx = useContext(DiscoveryContext);

    return (
        <>
            {dataCtx.components.map(componentData => DiscoveryComponent(componentData))}
        </>
    );
}
