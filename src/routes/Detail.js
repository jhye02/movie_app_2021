import React from "react";
import '../components/Movie.css';

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        if (location.state === undefined){
            history.push('/');
        }
    }
    render(){       
        const { location } = this.props;
        if (location.state){
            return(          
                <div className="movie detail">
                    <div className="title_wrap">
                        <h1 className="movie__title">{location.state.title}</h1>
                        <i className="movie__year">({location.state.year})</i>
                    </div>                    
                    <img src={location.state.poster} alt={location.state.title}/>       
                    <div className="description_wrap"> 
                        <ul className="movie__genres">
                            {location.state.genres.map( (genre, index )=> {
                                return < li key={index} >{genre}</li>
                            })}
                        </ul>          
                        <p className="detail__description">{location.state.description_full}</p>
                    </div>
                    
                </div>
            )
        }else{
            return null;
        }
    }
}

export default Detail;