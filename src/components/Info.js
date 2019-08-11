import React from 'react';

function Info({info}) {


    if(Object.keys(info).length === 0) return null;


    return (
        <div className = "card border-light">
            <div className = "card-header bg-primary text-light font-weight-bold">
                {info.strArtist}
            </div>
            <div className="card-body">
                <img src={info.strArtistThumb} alt= "img artist" />
                <p className="card-text">Genre: {info.strGenre}</p>
                <h2 className="card-text text-center">Biography</h2>
                <p className="card-text">{info.strBiographyEN}</p>
                <p className="card-text">
                    <a href = {`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className = "fab fa-facebook"></i>
                    </a>
                    <a href = {`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className = "fab fa-twitter"></i>
                    </a>

                </p>
            </div>
        </div>

    )
}

export default Info;