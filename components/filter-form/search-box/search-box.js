import React, { useEffect } from 'react';
import cl from './search-box.module.css';
import { SuperPlaceholder } from '@/helpers/placeHolderEffect';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/store';
import { changeValue, submitValue } from '@/redux/features/filter_box/search_filter_box';

const searchPlaceholders = [
    'Phòng trọ giá rẻ',
    'Phòng trọ cao cấp',
    'Phòng trọ sinh viên',
    'Phòng trọ quận 1',
]

export default function SearchBox() {
    const dispatch = useDispatch();

    const searchFilter = useAppSelector(function(state){
        return state.searchFilterReducer.searchFilterBox;
    });

    useEffect(function(){
        // var sp = new SuperPlaceholder({
        //     placeholders: searchPlaceholders,
        //     preText: "VD: ",
        //     stay: 1000,
        //     speed: 50,
        //     element: '#dynamic-placeholder'
        // });
        // sp.init();
    }, []);

    function handleRemoveSearch(payload) {
        dispatch(changeValue(payload));
    }

    function handleInputValue(payload) {
        dispatch(changeValue(payload));
    }

    function renderRemoveInputedButton () {
        if (searchFilter.value != '') {
            return (
                <buton
                    className={cl.button_remove}
                    onClick={()=>{
                        handleRemoveSearch('');
                    }}
                >
                    <i className="far fa-times-circle"></i>
                </buton>
            )
        }    
    }

    return (
        <div className={cl.search_box_filter}>
            <input
                id='dynamic-placeholder'
                className={cl.input_search}
                value={searchFilter.value}
                onInput={(e)=>{
                    handleInputValue(e.target.value);
                }}
            />
            <div className={cl.button_list}>
                {renderRemoveInputedButton()}
                <buton
                    className={cl.button_search}
                    onClick={()=>{
                        dispatch(submitValue());
                    }}
                >
                    <i className="fal fa-search"></i>
                </buton>
            </div>
        </div>
    )
}
