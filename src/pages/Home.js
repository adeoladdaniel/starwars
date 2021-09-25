import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from '../redux/actions';
import { MovieSelect, OpenCrawl, CharacterListing } from '../components';


const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getFilms = async () => {
      await dispatch(getMovies());
    };

    getFilms();
  });
  return (
    <section className="section">
      <section className="section-top">
        <div className="row w-100 d-flex justify-content-center align-items-baseline">
          <div className="col-md-4">
          <img className="logo" src="assets/images/star_wars_logo.png" alt="star wars" />

            <MovieSelect />
          </div>
          <div className="col-md-12">
            <div className="d-flex w-100 justify-content-center align-items-center pt-3">
            </div>
          </div>
        </div>
        <div className="row">
          <OpenCrawl />
        </div>
      </section>

      <section>
        <div className="container character-listing">
          <CharacterListing />
        </div>
      </section>
    </section>
  );
};

export default Home;
