import React, { useState } from 'react';
import Modal from './components/Modal';
import { Button } from 'primereact/button';
import Navbar from './components/Navbar';
import SearchInput from './components/SearchInput';
import CardContainer from './components/CardContainer';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {

    const [visible, setVisible] = useState(false);

    return (
        <>
            <Provider store={store}>
                <Navbar />
                <SearchInput />
                <CardContainer />
                <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
                <Modal visible={visible} setVisible={setVisible} />
            </Provider>
        </>
    );
}

export default App;

