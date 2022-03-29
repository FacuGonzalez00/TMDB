import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Import store
import { getFullCast, getWikiData, getTrailer } from '.././../store/detail';

//Import component
import Card from '../Card/Card';
import style from './Detail.module.css';

//Import components react prime
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';

const ViewDetail = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            await dispatch(getFullCast());
            await dispatch(getWikiData());
            dispatch(getTrailer());
        }
        fetchData();
    }, []);

    const showDetailMovie = useSelector((state) => state.detailMovie);

    return (
        <div className={style.container__Card}>
            {showDetailMovie.results.length &&
                showDetailMovie.results.map((data) => {
                    return <Card data={data} viewType='detail' />;
                })}

            <div className={style.acordeon}>
                <Accordion activeIndex={0}>
                    <AccordionTab header='Trailer'>
                        <h4>{showDetailMovie.trailerData?.videoTitle}</h4>
                        <iframe
                            height='350px'
                            width='900px'
                            src={showDetailMovie.trailerData?.linkEmbed}
                            title='YouTube video player'
                            frameborder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowfullscreen></iframe>
                        <p>{showDetailMovie.trailerData?.videoDescription}</p>
                    </AccordionTab>
                    <AccordionTab header='Full Cast'>
                        <h5>Directors</h5>
                        {showDetailMovie.fullCast?.directors.items.map(
                            (item) => {
                                return <p>{item.name} </p>;
                            }
                        )}
                        <h5>Actors</h5>
                        {showDetailMovie.fullCast?.actors.map((item) => {
                            return (
                                <p>
                                    {item.name} interpretando a{' '}
                                    {item.asCharacter}{' '}
                                </p>
                            );
                        })}
                    </AccordionTab>
                    <AccordionTab header='More info'>
                        <p>{showDetailMovie.wikiData?.plotShort.plainText}</p>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    );
};
export default ViewDetail;
