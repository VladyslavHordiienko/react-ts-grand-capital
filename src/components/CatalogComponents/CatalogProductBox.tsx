import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {fetchApartments, setCurrentPage} from "../../redux/slices/apartmentSlice";
import uniqid from "uniqid";
import CatalogItem from "./CatalogItem";
import Pagination from "../Pagination";


const CatalogProductBox: React.FC = () => {
    const [apartmentPerPage] = React.useState(3)
    const {currentPage} = useSelector((state: RootState) => state.apartment)
    const filter = useSelector((state: RootState) => state.filter)
    const refCatalog = React.useRef<HTMLDivElement>(null)
    const dispatch = useDispatch<AppDispatch>()
    let {apartments} = useSelector((state: RootState) => state.apartment)
    const {selectedType, selectedArea, priceFrom, priceTo, search} = useSelector((state: RootState) => state.filter)

    let filteredApartment = apartments

    React.useEffect(() => {
        dispatch(fetchApartments())
        dispatch(setCurrentPage(1))
    }, [filter])

    if (typeof selectedType === 'object') {
        filteredApartment = apartments.filter(apartment => apartment.type === selectedType.back)
    }
    if (selectedArea.length) {
        filteredApartment = apartments.filter(apartment => +apartment.area >= +selectedArea)
    }
    if (priceFrom.length || priceTo.length) {
        filteredApartment = apartments.filter(apartment => {
            if (priceFrom.length && !priceTo.length) return +apartment.price >= +priceFrom
            if (priceTo.length && !priceFrom.length) return +apartment.price <= +priceTo
            if (priceFrom.length && priceTo.length) return +apartment.price >= +priceFrom && +apartment.price <= +priceTo
        })
    }
    if (search.length) {
        filteredApartment = apartments.filter(apartment => apartment.title.toLowerCase().includes(search.toLowerCase()))
    }

    const indexOfLast = currentPage * apartmentPerPage
    const indexOfFirst = indexOfLast - apartmentPerPage
    const current = filteredApartment?.slice(indexOfFirst, indexOfLast)
    const pageNumbers = []
    const lastPage = Math.ceil(filteredApartment.length / apartmentPerPage)
    if (filteredApartment.length && apartmentPerPage) {
        for (let i = 1; i <= lastPage; i++) {
            pageNumbers.push(i)
        }
    }
    const paginate = (pageNumber: number) => {
        if(refCatalog.current){
            const catalogPos = refCatalog.current.getBoundingClientRect().top + window.scrollY - 60

            window.scrollTo({
                top: catalogPos, behavior: 'smooth'
            })
        }
        dispatch(setCurrentPage(pageNumber))
    }
    return (
        <>
            <div ref={refCatalog} className="catalog__product">
                {
                    current && current.map(apartment => (
                        <CatalogItem key={uniqid()} apartment={apartment}/>
                    ))
                }
            </div>
            {pageNumbers.length>1 && <Pagination pageNumbers={pageNumbers} lastPage={lastPage} currentPage={currentPage} paginate={paginate}/>}
        </>
    );
};

export default CatalogProductBox;