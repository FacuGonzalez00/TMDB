// Home.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//Import Component
import Card from '../Card/Card';

//Import reducer
import { getMoviesToHome } from '../../store/home';

//Import Bootstrap
import CarrouselBanner from '../Carousel/Carousel';
import { ProgressSpinner } from 'primereact/progressspinner';

//Styles
import styles from './Home.module.css';

//Import store
import { getMovieDetail } from '../../store/detail';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    let data;

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getMoviesToHome());
    }, [dispatch]);

    const movies = useSelector((state) => state.movieToHome);
    const searchedMovie = useSelector((state) => state.searchedMovie);

    const handlerClick = (movieId) => {
        dispatch(getMovieDetail(movieId))
            .then(() => {
                setIsLoading(() => true);
                setTimeout(() => setIsLoading(false), 5000);
                history.push('/movieDetail');
            })
            .catch((e) => {
                alert('No se pueden ver los detalles de este filme,', e);
            });
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.container__Title}>
                Read about your favourites movies
            </h1>

            <div>
                <CarrouselBanner />
            </div>
            {isLoading ? <ProgressSpinner /> : null}
            <div className={styles.container__Card}>
                {
                    ((data = searchedMovie.results
                        ? searchedMovie.results
                        : movies.items?.slice(0, 70)),
                    data?.length &&
                        data.map((data) => {
                            return (
                                <Card
                                    data={data}
                                    viewType='simple'
                                    handlerClick={handlerClick}
                                />
                            );
                        }))
                }
            </div>
        </div>
    );
};

export default Home;
