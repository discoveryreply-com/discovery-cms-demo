import React from 'react';
import UndefinedComponent from './UndefinedComponent';
import { getDiscoveryCms } from '@discovery-frontend/cms-connector';

/**
 * @param component         The component data retrieved from the api
 * @param component._id     The id of the component
 * @param component._type   The type of the component
 * @param component._parent The id of the parent component
 */
export default function DiscoveryComponent(component) {
    if (component._parent) {
        return;
    }

    const Components = getDiscoveryCms().getComponents();

    if (Components[component._type]) {
        return React.createElement(Components[component._type], {
            key: component._id,
            componentId: component._id,
        });
    }

    return <UndefinedComponent key={component._id} componentType={component._type} />;
}
