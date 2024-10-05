import React from 'react';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import SearchInput from './components/SearchInput';
import CardContainer from './components/CardContainer';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Footer from './components/Footer';

const App = () => {

    const isModalVisible = useSelector((state) => state.modalDetail.visible);

    return (
        <div className='min-h-screen'>
                <Navbar />
                <SearchInput />
                <CardContainer />
                <Modal visible={isModalVisible} />
                <Footer/>
        </div>
    );
}

export default App;

