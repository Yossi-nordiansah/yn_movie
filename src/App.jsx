import React from 'react';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import SearchInput from './components/SearchInput';
import CardContainer from './components/CardContainer';
import { useSelector } from 'react-redux';
import Footer from './components/Footer';

const App = () => {

    const isModalVisible = useSelector((state) => state.modalDetail.visible);

    return (
        <div className='min-h-screen'>
            <div className='dark:bg-gradient-to-b from-slate-950 to-slate-900'>
                <Navbar />
                <SearchInput />
                <CardContainer />
            </div>
            <Modal visible={isModalVisible} />
            <Footer />
        </div>
    );
}

export default App;

