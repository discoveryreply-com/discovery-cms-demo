import React from 'react';
import UndefinedComponent from './UndefinedComponent';
import Sample from '../Dynamic/Sample';
import Cta from '../Dynamic/Cta';
import EditorChoice from '../Dynamic/EditorChoice';
import TopDownload from '../Dynamic/TopDownloads';
import Trending from '../Dynamic/Trending';

const Components = {
    CTA: Cta,
    Sample: Sample,
    EditorChoice: EditorChoice,
    TopDownloads: TopDownload,
    Trending: Trending,
};

export default function DiscoveryComponent(component) {
    if (Components[component._type] === undefined) {
        return <UndefinedComponent key={component._id} discoveryId={component._type} />;
    }

    return React.createElement(Components[component._type], {
        key: component._id,
        componentId: component._id,
    });
}
