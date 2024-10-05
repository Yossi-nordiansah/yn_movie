import React, { useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from '../store/slice/modalSlice';
import isLoading from '../assets/loading.gif';

const Modal = ({ visible }) => {

    const dispatch = useDispatch();

    const detailDataFilm = useSelector((state) => state.modalDetail.detailDataFilm);
    const loading = useSelector(state => state.modalDetail.isLoading)

    const headerElement = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
            <span className="font-bold white-space-nowrap">{detailDataFilm ? detailDataFilm.Title : "Loading..."}</span>
        </div>
    );

    const footerContent = (
        <div>
            <Button label="Ok" icon="pi pi-check" onClick={() => dispatch(hideModal())} autoFocus />
        </div>
    );

    return (
        <Dialog visible={visible} modal header={headerElement} footer={footerContent} onHide={() => dispatch(hideModal())}>
            {detailDataFilm ? <div className='flex'>
                <div className="flex justify-content-center align-items-center">
                    <img src={detailDataFilm.Poster} alt="Loading..." />
                </div>
                <div>
                    <div>
                        <p className='font-semibold'>Title :</p>
                        <p>{detailDataFilm.Title}</p>
                    </div>
                </div>
            </div> : <img src={isLoading}/>}
        </Dialog>
    );
}

export default Modal;
