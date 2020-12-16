import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import queryString from 'query-string';
import Detail from '../components/Detail';
import List2 from '../components/List2';
import { useDispatch, useSelector } from 'react-redux';
import { getNewest } from '../actions/filmActions';
import Watch from '../components/Watch';
import { openWatch } from '../actions/watchActions';
function Movie() {
    const isWatch = useSelector((state) => state.watchReducer.isWatch);
    const [episode, setEpisode] = useState(1);
    const [isMovie, setIsMovie] = useState(false);
    const [isTV, setIsTV] = useState(false);
    const [ID, setID] = useState(null);

    //demo get new
    const listNew = useSelector((state) => state.filmReducer.new);
    const dispatch = useDispatch();

    window.scrollTo(0, 0);
    useEffect(() => {
        dispatch(getNewest());

        const parsed = queryString.parse(window.location.search);
        let ep = parsed.ep || 1;
        if (ep) setEpisode(ep);
        let pathName = window.location.pathname.split('/');
        let type = pathName[pathName.length - 2];
        let id = pathName[pathName.length - 1];
        if (id) {
            setID(id);
        }
        if (parsed.watch === null) {
            dispatch(openWatch());
        }
        if (type === 'movie') {
            setIsMovie(true);
            setIsTV(false);
        } else {
            setIsMovie(false);
            setIsTV(true);
        }
    }, []);
    return (
        <div className='pages-movie'>
            {isWatch ? (
                <>
                    <Watch ID={ID} ep={episode} />
                </>
            ) : (
                <>
                    <Header isDark={true} />
                    <Detail
                        title='The Rise of Kingdom'
                        cat={['action', 'romance']}
                        description="She can truly celebrate who shie is. Directed by Ryan Murphu 'The Mando' is the spectacular, big-hearted flim."
                    />
                    {listNew.length ? (
                        <List2
                            subtitle=''
                            title='Recommended'
                            list={listNew}
                            className='u-fade'
                        />
                    ) : (
                        <></>
                    )}
                    <Footer />
                </>
            )}
        </div>
    );
}

export default Movie;
