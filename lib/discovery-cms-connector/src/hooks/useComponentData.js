import {useContext} from "react";

function useComponentData(id, context) {
    const dataCtx = useContext(context);
    return dataCtx.components.find(element => element._id === id);
}
export default useComponentData;
