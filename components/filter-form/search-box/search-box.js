import React, { useEffect, useState } from 'react';
import cl from './search-box.module.css';
import { useRouter } from 'next/router';

export default function SearchBox(props) {
    let {
        onSubmit
    } = props;
    
    const router = useRouter();
    const [inputed, setInputed] = useState(router?.query?.keyword);

    useEffect(function(){
        setInputed(router.query?.keyword || "");
    }, [router.query]);

    function renderRemoveInputedButton () {
        if (inputed != '') {
            return (
                <buton
                    className={cl.button_remove}
                    onClick={()=>{
                        setInputed('');
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
                className={cl.input_search}
                value={inputed}
                onInput={(e)=>{
                    setInputed(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key == 'Enter') {
                        e.target.blur();
                        onSubmit(inputed);
                    }
                }}
                placeholder='Từ khóa, địa chỉ, quận huyện, loại sử dụng,...'
            />
            <div className={cl.button_list}>
                {renderRemoveInputedButton()}
                <buton
                    className={cl.button_search}
                    onClick={()=>{
                        onSubmit(inputed); 
                    }}
                >
                    <i className="fal fa-search"></i>
                </buton>
            </div>
        </div>
    )
}
