import MovieStars from '../MovieStars/MovieStars'
import './MovieScore.css'

const MovieScore = () => {

    const score = 4.5
    const count = 11

    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    )
}

export default MovieScore