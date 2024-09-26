import React, { useState } from 'react';
import Modal from './components/modal';
import { Button } from 'primereact/button';
import Navbar from './components/Navbar';
import SearchInput from './components/SearchInput';

const App = () => {

    const [visible, setVisible] = useState(false); 

    return (
        <>
            <Navbar/>
            <SearchInput/>
            
            <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Modal visible={visible} setVisible={setVisible} />
        </>
    );
}

export default App;

