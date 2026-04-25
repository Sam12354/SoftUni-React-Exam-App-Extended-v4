import VideoItem from "./videoItem/VideoItem.jsx";
import { useGetAllVideos } from "../../hooks/useService.js";


export default function Videos() {

    const [videos] = useGetAllVideos()
    
    return (
        <>
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Shop</h2>
                        <h3 className="section-subheading text-muted fw-bold fs-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                            Discover a world of products from sellers like you.
                        </h3>
                    </div>
                    <div className="row">
                        {videos.length ? 
                            videos.map(video => <VideoItem key={video._id} {...video} />)  
                            :
                            <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh", width: "100%" }}>
                                <h1 className="text-center text-muted">No videos available at the moment. Check back later!</h1>
                            </div>
                        }
                    </div>
                </div>
            </section>
        </>
    )

}