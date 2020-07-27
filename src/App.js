import React from 'react';
import Header from "./Header";
import Footer from "./Footer";


function App() {

    const sn = 'Super React';
    const menu = ['Home', 'Products', 'Contacts'];
    return (
        <div className="App">
            PASV REACT COURSE

            <Header name = {sn} menu={menu} />

            <Footer name = {sn} menu={menu} />
        </div>
    );
}

export default App;
