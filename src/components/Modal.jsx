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

    const headerElement = (
        <div>
            <span className="font-bold white-space-nowrap">{detailDataFilm ? detailDataFilm.Title : "Loading..."}</span>
        </div>
    );

    const footerContent = (
        <div>
            <Button label="Ok" icon="pi pi-check" className='bg-blue-400 text-white px-2 py-1' onClick={() => dispatch(hideModal())} autoFocus />
        </div>
    );

    return (
        <Dialog visible={visible} modal header={headerElement} position='center' className='custom-overlay md:w-[680px] w-5/6' footer={footerContent} onHide={() => dispatch(hideModal())}>
            {detailDataFilm ? <div className='flex gap-6 md:justify-between flex-wrap justify-center'>
                <div className="flex justify-content-center align-items-center min-w-32 shadow-lg">
                    <img src={detailDataFilm.Poster} alt={detailDataFilm.Title} className='min-w-32'/>
                </div>
                <div className='md:max-w-72 w-full'>
                    <div className='mb-2'>
                        <p className='font-semibold custom-overlay'>Genre :</p>
                        <p>{detailDataFilm.Genre}</p>
                    </div>
                    <div className='mb-2'>
                        <p className='font-semibold'>Plot :</p>
                        <p>{detailDataFilm.Plot}</p>
                    </div>
                    <div className='mb-2 flex gap-2'>
                        <p className='font-semibold'>Released :</p>
                        <p>{detailDataFilm.Released}</p>
                    </div>
                    <div className='mb-2'>
                        <p className='font-semibold'>Actor :</p>
                        <p>{detailDataFilm.Actors}</p>
                    </div>
                    <div className='mb-2'>
                        <p className='font-semibold'>Rating :</p>
                        <p>{detailDataFilm.imdbRating}</p>
                    </div>
                </div>
            </div> : <img src={isLoading} className='mx-auto'/>}
        </Dialog>
    );
}

export default Modal;
