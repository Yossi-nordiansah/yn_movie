import React from 'react';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import SearchInput from './components/SearchInput';
import CardContainer from './components/CardContainer';
import { Provider, useDispatch, useSelector } from 'react-redux';

const App = () => {

    const visible = useSelector((state) => state.modalDetail.visible);

    return (
        <>
                <Navbar />
                <SearchInput />
                <CardContainer />
                <Modal visible={visible} />
        </>
    );
}

export default App;

