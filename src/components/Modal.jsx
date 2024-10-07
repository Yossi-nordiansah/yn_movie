// import React, { useEffect } from 'react';
// import { Dialog } from 'primereact/dialog';
// import { Button } from 'primereact/button';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { hideModal } from '../store/slice/modalSlice';
// import isLoading from '../assets/loading.gif';

// const Modal = ({ visible }) => {

//     const dispatch = useDispatch();

//     const detailDataFilm = useSelector((state) => state.modalDetail.detailDataFilm);

//     const headerElement = (
//         <div>
//             <span className="font-bold white-space-nowrap">{detailDataFilm ? detailDataFilm.Title : "Loading..."}</span>
//         </div>
//     );

//     const footerContent = (
//         <div>
//             <Button label="Ok" icon="pi pi-check" className='bg-blue-400 text-white px-2 py-1' onClick={() => dispatch(hideModal())} autoFocus />
//         </div>
//     );

//     return (
//         <Dialog visible={visible} modal header={headerElement} position='center' className='custom-overlay md:w-[680px] w-5/6' footer={footerContent} onHide={() => dispatch(hideModal())}>
// {detailDataFilm ? <div className='flex gap-6 md:justify-between flex-wrap justify-center'>
//     <div className="flex justify-content-center align-items-center min-w-32 shadow-lg">
//         <img src={detailDataFilm.Poster} alt={detailDataFilm.Title} className='min-w-32'/>
//     </div>
//     <div className='md:max-w-72 w-full'>
//         <div className='mb-2'>
//             <p className='font-semibold custom-overlay'>Genre :</p>
//             <p>{detailDataFilm.Genre}</p>
//         </div>
//         <div className='mb-2'>
//             <p className='font-semibold'>Plot :</p>
//             <p>{detailDataFilm.Plot}</p>
//         </div>
//         <div className='mb-2 flex gap-2'>
//             <p className='font-semibold'>Released :</p>
//             <p>{detailDataFilm.Released}</p>
//         </div>
//         <div className='mb-2'>
//             <p className='font-semibold'>Actor :</p>
//             <p>{detailDataFilm.Actors}</p>
//         </div>
//         <div className='mb-2'>
//             <p className='font-semibold'>Rating :</p>
//             <p>{detailDataFilm.imdbRating}</p>
//         </div>
//     </div>
// </div> : <img src={isLoading} className='mx-auto'/>}
//         </Dialog>
//     );
// }

// export default Modal;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from '../store/slice/modalSlice';
import isLoading from '../assets/loading2.gif';

const Modal = ({ visible }) => {

    const dispatch = useDispatch();
    const detailDataFilm = useSelector((state) => state.modalDetail.detailDataFilm);

    return (
        <div className={`${visible ? 'block' : 'hidden'} dark:bg-slate-700 rounded-xl px-6 py-5 fixed z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[680px] w-5/6 bg-white`}>
            <div>

            </div>
            {detailDataFilm ?
                <div>
                    <h2 className='font-bold text-2xl text-slate-700 mb-4 dark:text-white'>{detailDataFilm.Title}</h2>
                    <div className='flex gap-6 md:justify-between flex-wrap justify-center h-[25rem] overflow-y-auto'>
                        <div className="flex justify-content-center align-items-center min-w-28 shadow-lg">
                            <img src={detailDataFilm.Poster} alt={detailDataFilm.Title} />
                        </div>
                        <div className='md:max-w-72 w-full text-slate-700 dark:text-white'>
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
                    </div>
                    <button className='float-end mt-3 bg-red-500 px-2 py-1 text-white rounded-lg font-semibold' onClick={() => dispatch(hideModal())}>Close</button>
                </div>
                : <img src={isLoading} className='mx-auto' />}
        </div>
    )
}

export default Modal
