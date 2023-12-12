import { useContext } from "react";
import { getDiscoveryCms } from '@discoverycms/connector';

function useLayoutPalette() {
    const dataCtx = useContext(getDiscoveryCms().getContext());
    const components = dataCtx.layout.components;

    return components[0];
}

export default useLayoutPalette;