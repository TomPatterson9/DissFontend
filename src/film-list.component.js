import React, { Component } from "react";
import FilmDataService from "./film.service.js";
import 'react-bulma-components/dist/react-bulma-components.min.css';



export default class FilmsList extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.onChangeSearchCatagory =this.onChangeSearchCatagory.bind(this);
        this.retrieveFilms = this.retrieveFilms.bind(this);

        this.searchTitle = this.searchTitle.bind(this);

        this.state = {
            films: [], 
            currentFilm: null,
            currentIndex: -1,
            searchTitle: "",
            searchCatagory: "title"
          };
    }
    componentDidMount() {
        this.retrieveFilms();
      }
    
      onChangeSearchTitle(e) {
        const searchTitle = e.target.value;
    
        this.setState({
          searchTitle: searchTitle
        });
      }
    
      retrieveFilms() {
        FilmDataService.getAll()
          .then(response => {
            this.setState({
              films: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }


      setActivefilm(film, index) {
        this.setState({
          currentFilm: film,
          currentIndex: index
        });
      }
    

      searchTitle() {
        if (this.state.searchCatagory === 'title'){
          FilmDataService.findByTitle(this.state.searchTitle)
            .then(response => {
              this.setState({
                films: response.data
              });
              console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });
          } else {
          FilmDataService.findByGenre(this.state.searchTitle)
            .then(response => {
              this.setState({
                films: response.data
              });
              console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });
          }



      }

      onChangeSearchCatagory(e) {
        const searchCatagory = e.target.value;
    
        this.setState({
          searchCatagory: searchCatagory
        });
        console.log(this.state.searchCatagory);
        
      }


      

      render(){
       
        const { searchTitle, films, currentFilm, currentIndex } = this.state;
        const divStyle = {
            width:'80%'
        
        };

          
        return(
            
            <div className="container">
                
                    <div className="content">
                    <br></br>
                        
                            <input style={divStyle}
                            type="text"
                            className="input is-info "
                            placeholder="Search by title"
                            value={searchTitle}
                            onChange={this.onChangeSearchTitle}
                            />  	&nbsp; 	&nbsp;
                            
                            <div class="select">
                              <select 
                              onChange={this.onChangeSearchCatagory}
                              value={this.state.searchCatagory}>
                                <option value="title">Title</option>
                                <option value="genre">Genre</option>
                              </select>
                            </div>
                            &nbsp;  &nbsp;
                            <button
                                className="button is-dark"
                                type="button"
                                onClick={this.searchTitle}
                            >
                                Search
                            </button>
                        
                </div>

                
                <div style={divStyle}className="box">
                {currentFilm ? (
                    <div>
                    
                    <div>
                        <label>
                        <strong>Title:</strong>
                        </label>{" "}
                        {currentFilm.title}
                    </div>
                    <div>
                        <label>
                        <strong>Description:</strong>
                        </label>{" "}
                        {currentFilm.description}
                    </div>
                    <div>
                        <label>
                        <strong>Platform:</strong>
                        </label>{" "}
                        {currentFilm.platform}
                    </div>
                    <div>
                      <label>
                        <strong>Genre:</strong>
                      </label>{" "}
                      {currentFilm.genre}
                    </div>

                    </div>
                ) : (
                    <div>
                    <br />
                    <strong>Please click on a film for more details</strong>
                    </div>
                )}
                </div>

                <aside className="menu">
                    <p class="menu-label">
                        Films & Tv Shows
                    </p>
                    <ul className="menu-list">
                        {films &&
                        films.map((film, index) => (
                            <li style={divStyle}
                            className={
                                (index === currentIndex ? "active" : "")
                            }
                            onClick={() => this.setActivefilm(film, index)}
                            key={index}
                            >
                                <a>
                                <strong>{film.title}</strong>
                                </a>
                                
                            </li>
                            
                        ))}
                    </ul>
                </aside>
                 
                </div>
                
            
                          
        )

      }
}