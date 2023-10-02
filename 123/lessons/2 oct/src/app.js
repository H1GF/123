import React from "react";

import Header from "./header/header";

import styles from "./app_module.css";

function App(){

    return (
        <>
            <Header />
            <div className={`${styles.container} p-5`}>
                <h1 className="title">Hello</h1>
                <div className='mt-10'>world</div>
            </div>
        </>
    );

}

export default App;