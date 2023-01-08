import React from 'react';
import {setSearch, setSearchInner} from "../../redux/slices/filterSlice";
import {useDispatch, useSelector} from "react-redux";
import debounce from "lodash.debounce";
import {RootState} from "../../redux/store";

const SearchInput:React.FC = () => {
    const {searchInner} = useSelector((state:RootState) => state.filter)

    const dispatch = useDispatch()

    const onSearchDebounced = React.useCallback(debounce((value) => {
        dispatch(setSearch(value))
    }, 500), [])

    const onSearch = (e:React.ChangeEvent<HTMLInputElement>) =>{
        dispatch(setSearchInner(e.target.value))
        onSearchDebounced(e.target.value)
    }

    return (
        <>
            <input
                type="text"
                className="banner__inputaddress"
                placeholder="Пошук..."
                value={searchInner}
                onChange={onSearch}
            />
        </>
    );
};

export default SearchInput;