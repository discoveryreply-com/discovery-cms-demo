import { useContext } from 'react';
import { getDiscoveryCms } from '../DiscoveryCms';

function useComponentData(id) {
    const dataCtx = useContext(getDiscoveryCms().getContext());
    const components = dataCtx.components ?? [];

    return components.find((component) => component._id === id);
}
export default useComponentData;
