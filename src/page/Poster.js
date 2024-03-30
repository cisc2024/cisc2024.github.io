import poster from "../poster.jpeg"

function Poster() {
    return (
        <div className="container d-flex justify-content-center">
            <img width={"50%"} height={"auto"} src={poster}></img>
        </div>
    )
}

export default Poster;