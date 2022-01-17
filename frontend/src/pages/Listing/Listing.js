import axios from "axios"
import React from "react"
import MovieCard from "../../components/MovieCard/MovieCard"
import Pagination from "../../components/Pagination/Pagination"
import { BASE_URL } from "../../utils/requests"

const Listing = () => {

    const [pageNumber, setPageNumber] = React.useState(0)
    const [page, setPage] = React.useState({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    })

    React.useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`).then(({data}) => {
            setPage({
                content: data.content,
                last: data.last,
                totalPages: data.totalPages,
                totalElements: data.totalElements,
                size: data.size,
                number: data.number,
                first: data.first,
                numberOfElements: data.numberOfElements,
                empty: data.empty
            })
        })
    }, [pageNumber])

    const handlePageChange = (newPageNumber) => {
        setPageNumber(newPageNumber)
    }

    return (
        <>
            <Pagination page={page} onChange={handlePageChange} />
            <div className="container">
                <div className="row">
                    {
                        page.content.map((movie) => {
                            return (
                                <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                                    <MovieCard movie={movie} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )   
}

export default Listing