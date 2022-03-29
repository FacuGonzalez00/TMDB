import React, { useState } from 'react';

//import framework
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';

//Style
import style from './Card.module.css';

const CardComponent = ({ data, viewType, handlerClick }) => {
    const header = (
        <img
            className={viewType === 'detail' ? style.imageDetail : null}
            alt='Card'
            src={`${data.image}`}
            onError={(e) =>
                (e.target.src =
                    'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
            }
        />
    );
    const footer = (
        <span>
            <Rating
                value={data.imDbRating / 2}
                readOnly
                stars={5}
                cancel={false}
            />
            <Button
                label='more'
                icon='pi pi-eye'
                iconPos='right'
                className='p-button-text p-button-sm'
                onClick={() => handlerClick(data.id)}
            />
        </span>
    );

    const subTitle = (
        <span>
            <h3>{data.description}</h3>
        </span>
    );

    return (
        <div>
            <Card
                title={<h5> {data.title}</h5>}
                subTitle={viewType === 'detail' ? subTitle : null}
                className={
                    viewType === 'detail'
                        ? style.CardDetailView
                        : style.Home__CardSimpleView
                }
                footer={viewType === 'simple' ? footer : null}
                header={header}
            />
        </div>
    );
};
export default CardComponent;
