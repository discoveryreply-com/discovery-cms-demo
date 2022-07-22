import React from 'react';
import UndefinedComponent from './UndefinedComponent';
import Sample from '../Dynamic/Sample';
import Cta from '../Dynamic/Cta';
import EditorChoice from '../Dynamic/EditorChoice';
import TopDownload from '../Dynamic/TopDownloads';
import Trending from '../Dynamic/Trending';
import HorizontalGrid from '../Dynamic/HorizontalGrid';

const Components = {
    CTA: Cta,
    Sample: Sample,
    EditorChoice: EditorChoice,
    TopDownloads: TopDownload,
    Trending: Trending,
    HorizontalGrid: HorizontalGrid,
};

export default function DiscoveryComponent(component) {
    if (component._parent) {
        return;
    }

    if (Components[component._type] === undefined) {
        return <UndefinedComponent key={component._id} discoveryId={component._type} />;
    }

    return React.createElement(Components[component._type], {
        key: component._id,
        componentId: component._id,
    });
}
