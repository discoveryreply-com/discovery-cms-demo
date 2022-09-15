import React from 'react';
import UndefinedComponent from './UndefinedComponent';
import { getDiscoveryCms } from '../setup';

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
    const propertyNameForComponents = getDiscoveryCms().getPropertyNameForComponents();

    let componentType = component._type;

    if (componentType.startsWith(propertyNameForComponents)) {
        componentType = componentType.substring(propertyNameForComponents.length);
    }

    if (Components[componentType]) {
        if (typeof document !== 'undefined') {
            document.dispatchEvent(new Event('create-discovery-component'));
        }

        return React.createElement(Components[componentType], {
            key: component._id,
            componentId: component._id,
        });
    }

    return <UndefinedComponent key={component._id} componentType={componentType} />;
}
