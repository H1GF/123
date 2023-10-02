import React from "react";

import styles from './header.module.css';

function Header(props){
    return(
        <>
            <header className={styles.container}>
                <p>MySite</p>
                <p>Company</p>
                <p>{props.children}</p>
            </header>
        </>
    );
}

export default Header;