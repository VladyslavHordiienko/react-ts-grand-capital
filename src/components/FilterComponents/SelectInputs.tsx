import React, {useRef} from 'react';
import classNames from "classnames";
import uniqid from "uniqid";
import {setSelectedArea, setSelectedType} from "../../redux/slices/filterSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";

const SelectInputs: React.FC = () => {
    const typeVariants = [{front:'Квартира', back:'apartment'}, {front:'Дім', back: 'house'}]
    const areaVariants = ["50", "60", "70"]

    const [typeOpen, setTypeOpen] = React.useState<boolean>(false)
    const [areaOpen, setAreaOpen] = React.useState<boolean>(false)

    const refOnFilterSelects = useRef<HTMLDivElement>(null)

    const {selectedType, selectedArea} = useSelector((state: RootState) => state.filter)

    const dispatch = useDispatch()

    React.useEffect(() => {
        document.body.addEventListener('click', (e:MouseEvent) => {
            const composed = e.composedPath()
            if(refOnFilterSelects.current && !composed.includes(refOnFilterSelects.current)){
                setTypeOpen(false)
                setAreaOpen(false)
            }
        })
    }, [])
    return (
        <div ref={refOnFilterSelects} className="banner__selectwrap">
            <div onClick={() => setTypeOpen(!typeOpen)} className={classNames("banner__select", {
                "banner__select--active": typeOpen
            })}>
                <div className="banner__selecthead">
                      <span className="banner__selectcurrent"
                      >{typeof selectedType === 'object' ? selectedType.front : 'Виберіть тип об\'єкта'}</span
                      >
                    <svg className="icon">
                        <use xlinkHref="#arrow-icon"></use>
                    </svg>
                </div>
                <div className="banner__selectbody">
                    {typeVariants.map(type => (
                        <div key={uniqid()} onClick={() => dispatch(setSelectedType(type))}
                             className="banner__selectitem">{type.front}</div>
                    ))}
                </div>
            </div>
            <div onClick={() => setAreaOpen(!areaOpen)} className={classNames("banner__select", {
                "banner__select--active": areaOpen
            })}>
                <div className="banner__selecthead">
                                    <span
                                        className="banner__selectcurrent">{selectedArea ? `Від  ${selectedArea}  м²` : 'Площа'}</span>
                    <svg className="icon">
                        <use xlinkHref="#arrow-icon"></use>
                    </svg>
                </div>
                <div className="banner__selectbody">
                    {areaVariants.map(area => (
                        <div key={uniqid()} onClick={() => dispatch(setSelectedArea(area))}
                             className="banner__selectitem">Від {area} м²</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SelectInputs;