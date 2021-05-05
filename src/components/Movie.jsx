import React from 'react';

function Movie () {
    return(
        <div>
            <img src={"./movieposter.jpeg"}/>
            <h2>Alien</h2>
            <p id="summary">After a space merchant vessel receives an unknown transmission as a distress call, one of the crew 
            is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.</p>
            <button id="btn-imdb">Ver no IMDB</button>
        </div>
    );
}

export default Movie;