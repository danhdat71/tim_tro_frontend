import React, { useEffect, useRef, useState } from 'react';
import cl from './input-files.module.css';

const InputFiles = (props) => {

    let {
        onChange,
    } = props;

    let [files, setFiles] = useState([]);
    const fileInputRef = useRef(null);

    useEffect( function() {
        return () => {
            const removedFiles = files.filter(function(file){
                return !files.includes(file);
            });
            removedFiles.forEach(file => URL.revokeObjectURL(file.preview));
        };
    }, [files]);

    function handleSetFiles(files)
    {
        let newFiles = Array.from(files, function(file) {
            file.preview = URL.createObjectURL(file);
            return file;
        }).filter(function(file) {
            return (
                file.type.includes(['image/jpeg']) ||
                file.type.includes(['image/jpg']) ||
                file.type.includes(['image/png']) &&
                file.size <= 10 * 1024 * 1024
            );
        });
        setFiles(function(prevFiles) {
            let newFilesPush = [...prevFiles, ...newFiles];
            onChange(newFilesPush);
            return newFilesPush
        })
        fileInputRef.current.value = null;
        
    }

    function handleRemoveSelectedFile(index) {
        let updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
        onChange(updatedFiles);
    }

    function renderPreviewFiles() {
        return files.map(function(value, index) {
            return (
                <div key={index} className={cl.preview_item}>
                    <div className={cl.preview_item_backdrop}>
                        <img loading="lazy" src={value.preview} />
                    </div>
                    <img loading="lazy" src={value.preview} />
                    <div
                        className={cl.btn_remove}
                        onClick={()=>{
                            handleRemoveSelectedFile(index);
                        }}
                    >
                        <i className="far fa-times"></i>
                    </div>
                    {
                        index == 0
                        ? <div className={cl.avatar_tag}>Ảnh đại diện</div>
                        : null
                    }
                </div>
            );
        });
    }

    return (
        <div>
            <div className={cl.input_box}>
                <input
                    type='file'
                    multiple
                    className={cl.input_file}
                    ref={fileInputRef}
                    onChange={(e)=>{
                        handleSetFiles(e.target.files);
                    }}
                    accept='image/*'
                ></input>
                <div className={cl.input_box_icon}>
                    <i className="fal fa-folder-upload"></i>
                </div>
                <div className={cl.input_box_text_1}>Click vào đây để chọn ảnh</div>
                <div className={cl.input_box_text_2}>Hoặc kéo thả file vào vị trí này</div>
            </div>
            <div className={cl.wrap_preview}>
                {renderPreviewFiles()}
            </div>
            <div className={cl.helper}>
                <div className={cl.helper_item}>
                    <span className={cl.icon}><i className="fas fa-circle"></i></span>
                    <span>Bạn có thể chọn nhiều ảnh (tối đa 10 ảnh) cùng lúc</span>
                </div>
                <div className={cl.helper_item}>
                    <span className={cl.icon}><i className="fas fa-circle"></i></span>
                    <span>Bạn nên chọn các ảnh khác nhau</span>
                </div>
                <div className={cl.helper_item}>
                    <span className={cl.icon}><i className="fas fa-circle"></i></span>
                    <span>Mỗi bức ảnh nên chọn dưới 10MB để xử lý nhanh hơn</span>
                </div>
                <div className={cl.helper_item}>
                    <span className={cl.icon}><i className="fas fa-circle"></i></span>
                    <span>Ảnh có định dạng JPG, JPEG, PNG</span>
                </div>
            </div>
        </div>
    );
}

export default InputFiles;
