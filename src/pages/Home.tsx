import React from 'react';
import Banner from "../components/Banner";
import HomeCatalog from "../components/HomeComponents/HomeCatalog";
import HomeContact from "../components/HomeComponents/HomeContact";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../redux/store";
import {fetchApartments} from "../redux/slices/apartmentSlice";
import {useNavigate} from 'react-router-dom'
import {setInitialFilters} from "../redux/slices/filterSlice";


const Home = () => {
    const dispatch = useDispatch<AppDispatch>()
    const filter = useSelector((state: RootState) => state.filter)
    const [mounted, setMounted] = React.useState<boolean>(false)
    const [filtering, setFiltering] = React.useState<boolean>(false)

    const navigate = useNavigate()


    React.useEffect(() => {
        if (mounted) setFiltering(true)
    }, [filter])

    React.useEffect(() => {
        dispatch(setInitialFilters())
        dispatch(fetchApartments())
        setMounted(true)
    }, [])

    return (
        <>
            {
                !filtering
                    ?
                    <>
                        <Banner/>
                        <HomeCatalog/>
                        <HomeContact/>
                    </>
                    : navigate('/catalog')
            }
        </>
    );
};

export default Home;