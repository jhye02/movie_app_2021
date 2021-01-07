import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component{ //동적인 데이터 사용시 유용, 자동으로 render()실행, state사용하기위해 클래스형 컴포넌트 사용하는것임.
  state ={
    isLoading: true,
    movies:[],
  };
  
  getMovies = async () => { //async, await --> 대충 axios.get 가져오는게 느리니까 기다렸다가 실행해라는 뜻
    const {
      data:{ //구조 분해 할당 : 객체나 배열을 변수로 '분해’할 수 있게 해줌 
        data:{ movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating'); // api 연결
    this.setState({ movies, isLoading: false }) // state변경, movies : movies 축약
  };

  componentDidMount(){
   this.getMovies();
  }

  render(){
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">'Loading...'</span>
          </div>)
        : ( 
          <div className="movies">
            {movies.map(movie => (        
              <Movie
                key={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                description_full={movie.description_full}
              />
            ))}
          </div>
          )
        }
      </section>
    );
  }
}

export default Home;
