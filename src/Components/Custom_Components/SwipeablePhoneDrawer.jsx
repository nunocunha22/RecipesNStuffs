import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Link from '@mui/material/Link';

export default function SwipeablePhoneDrawer({ open, onClose }) {

    return (
        <div>
            <SwipeableDrawer
                anchor="right"
                open={open}
                onClose={onClose}
                onOpen={() => { }}
            >
                <div className='swipeableDrawer'>
                    <List className='drawerList'>
                        <Link href="/">Homepage</Link>
                        <Link href="doces">Doces</Link>
                        <Link href="recheios">Recheios</Link>
                        <Link href="salgados">Salgados</Link>
                        <Link href="atividades">Atividades</Link>
                        <Link href="medidas">Medidas</Link>
                    </List>
                    <Button className="drawerClose" onClick={onClose}><FontAwesomeIcon icon={faXmark} /></Button>
                </div>
            </SwipeableDrawer>
        </div>
    );
}