//Navbar.jsx

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

//Import reduxs
import { getSearchedMovie } from '../../store/search';

//Import elements
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

//Import Styles
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-dark-indigo/theme.css';
import 'primereact/resources/primereact.css';

const Navbar = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const [url, setUrl] = useState(false);

    useEffect(() => {
        setUrl(window.location.href.match('/movieDetail'));
    }, [location]);

    const handlerChange = (event) => {
        if (event.length > 2) {
            dispatch(getSearchedMovie(event));
        }
    };
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            command: (event) => {
                window.location.pathname = '/';
            },
        },
    ];

    const start = (
        <img
            alt='logo'
            src='showcase/images/logo.png'
            onError={(e) =>
                (e.target.src =
                    'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
            }
            height='40'
            className='mr-2'></img>
    );
    const end = (
        <InputText
            placeholder="Inserte al menos 3 caracteres'"
            type='text'
            onChange={(e) => handlerChange(e.target.value)}
        />
    );

    return (
        <div>
            <div className='card'>
                <Menubar
                    className='p-menubar'
                    model={items}
                    start={start}
                    end={url ? null : end}
                />
            </div>
        </div>
    );
};

export default Navbar;
