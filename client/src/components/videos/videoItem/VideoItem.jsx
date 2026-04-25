import { Link } from "react-router-dom";

export default function VideoItem({ _id, video, user, title }){

    const videoUrl = `http://localhost:7777/uploads/${video.split('\\').pop()}`;

    return (
        <div className="portfolio-item">
                <video src={videoUrl} controls width="300"></video>
            <div className="portfolio-caption" style={{ width: "300px" }}>            
                <div className="portfolio-caption-heading">{title}</div>
            </div>
            <Link className="portfolio-link" to={`/${_id}`}>
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
            </Link>
        </div>
    )

}
