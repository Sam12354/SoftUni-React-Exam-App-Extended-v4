import { useNavigate } from "react-router-dom";
import { removeVideo } from "../../../api/video-api";
import Modal from "../../modal/Modal";
import { useState } from "react";

export default function PersonalCatalogItem({ _id, title, image }) {

    const [showModal, setShowModal] = useState(false)

    const navigate = useNavigate()

    const itemDeleteHandler = async (itemId) => {
        try {
            await removeVideo(itemId)

            navigate(`/videos`);
        } catch (err) {
            setError(err.error || 'Delete failed');
        }

    }

    return (
        <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
                <video
                    className="img-fluid"
                    controls
                    poster="/images/w3html5.gif"
                />
                {showModal && <Modal onConfirm={() => itemDeleteHandler(_id)} onCancel={() => setShowModal(false)} />}
                <button onClick={() => setShowModal(true)} className="btn btn-danger btn-lg mt-2 ms-2">
                    Delete Video
                </button>
            </div>
        </div>
    )
}