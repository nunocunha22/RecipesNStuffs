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
                        <Link href="sweet">Doces</Link>
                        <Link href="salty">Salgados</Link>
                        <Link href="activities">Atividades</Link>
                        <Link href="measurements">Medidas</Link>
                    </List>
                    <Button className="drawerClose" onClick={onClose}><FontAwesomeIcon icon={faXmark} /></Button>
                </div>
            </SwipeableDrawer>
        </div>
    );
}