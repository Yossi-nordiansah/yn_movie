import React, { useState } from 'react';
import Modal from './components/Modal';
import { Button } from 'primereact/button';
import Navbar from './components/Navbar';
import SearchInput from './components/SearchInput';
import CardContainer from './components/CardContainer';

const App = () => {

    const [visible, setVisible] = useState(false); 

    return (
        <>
            <Navbar/>
            <SearchInput/>
            <CardContainer/>
            <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Modal visible={visible} setVisible={setVisible} />
        </>
    );
}

export default App;

