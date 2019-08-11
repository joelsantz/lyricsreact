import React, { useState, useEffect, Fragment } from 'react';
import Form from './components/Form';
import axios from 'axios';
import Song from './components/Song';
import Info from './components/Info';

function App() {

  // Utilizar UseState con 3 states
  const [artist, setArtist] = useState('');
  const [lyric, setLyric] = useState([]);
  const [info, setInfo] = useState({});

  // Metodo para consultar la API de la letra de canciones
  const consultLyricAPI = async search => {
    const {artist, song} = search;
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

    //consultar la api
    const result = await axios(url);

    // almacenar el artista que se buscó
    setArtist(artist);

    // almacenar la letra en el state
    setLyric(result.data.lyrics);

  }

  // Metodo para consultar la API de informacion 
  const consultInfoAPI = async () => {
    if(artist) {
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      const result = await axios(url);

    setInfo(result.data.artists[0]);
    // console.log(info);
    }
  }

  useEffect(
    () => {
      consultInfoAPI();
    }, [artist]
  )

  

  return (
    <Fragment>
      <Form
        consultLyricAPI = {consultLyricAPI}
      />

      <div className="container mt-5">
        <div className = "row">
          <div className = "col-md-6">
              <Info
                info = {info}
              />
          </div>
          <div className = "col-md-6">
              <Song
                lyric = {lyric}
              />
          </div>
        </div>
      </div>

    </Fragment>
  )

}

export default App;