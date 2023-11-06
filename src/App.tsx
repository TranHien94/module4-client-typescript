import RouteSetup from "./routes/RouteSetup";
import api from './services/api';
import { categoryAction } from './stores/slices/category.slice';
import { useEffect, createContext } from 'react';
import { useDispatch } from 'react-redux';


export const RootContext = createContext(0);

function App () {
    const dispatch = useDispatch();

    useEffect(() => {
        api.categoryApi.findMany()
            .then(res => {
                // console.log("res", res)
                if (res.status == 200) {
                    dispatch(categoryAction.setCategoryData(res.data.data))
                } else {
                }
            })
            .catch(err => {

            })
    }, []);
    return (
        <RootContext.Provider value={1}>
            <RouteSetup />
        </RootContext.Provider>
    )
}

export default App