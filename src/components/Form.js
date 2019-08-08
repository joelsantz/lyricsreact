import React, { useState } from 'react';

function Form({consultLyricAPI}) {
    
    const [search, setSearch] = useState({
        artist: '',
        song: ''
    })

    // Funcion para actualizar el state de los inputs

    const  updateState = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        });

   
    }

    //Cuando hacemos submit al form
    const handleSubmit = e => {
        e.preventDefault();

        consultLyricAPI(search);
    }


    return (
        <div className="bg-info">
          <div className="container">
              <div className="row">
                  <form
                    onSubmit = {handleSubmit}
                    className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                      <fieldset>
                          <legend className="text-center">Find your favorites lyrics!</legend>
                          <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artist</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="artist" 
                                        placeholder="Artist name"
                                        onChange = {updateState}
                                        required
                                    />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Song</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="song" 
                                        placeholder="Song name"
                                        onChange = {updateState} 
                                        required
                                    />
                                </div>
                              </div>
                          </div>
                          <button type="submit" className="btn btn-primary float-right">Get Lucky!</button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>
    )
}

export default Form;
