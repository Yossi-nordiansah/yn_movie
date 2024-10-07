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
        <div>
            <div className={`dark:bg-gradient-to-b from-slate-950 to-slate-900 ${isModalVisible ? 'brightness-50 pointer-events-none backdrop-brightness-90' : 'brightness-100'}`}>
                <Navbar />
                <SearchInput />
                <CardContainer />
            </div>
            <Modal visible={isModalVisible} />
            <Footer visible={isModalVisible}/>
        </div>
    );
}

export default App;

