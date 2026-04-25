import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm.js"
import { useState } from "react"
import { createVideo } from "../../api/video-api.js"
import { useRef } from 'react';


const initialValues = {
    title: ''
    // should add title
}

export default function CreateVideo() {

    const [error, setError] = useState('')
    const navigate = useNavigate()
    const uploadVideo = createVideo
    const fileInputRef = useRef();

    const createHandler = async (values) => {
        
        try {
            const formData = new FormData();
            
            formData.append('title', values.title);
            formData.append('video', fileInputRef.current.files[0]);

            // for (let [key, value] of formData.entries()) {
            //     console.log(key, value);
            // }
            

            await uploadVideo(formData)

            navigate(`/videos`)
        } catch (err) {
            setError(err.error || 'Create failed');
        }
    }

    const { values, changeHandler, onSubmit } = useForm(initialValues, createHandler)

    return (
        <section
            className="page-section bg-light d-flex align-items-center justify-content-center min-vh-100 py-5"
            style={{ background: "url('/images/header-bg.jpg') center/cover no-repeat" }}
        >
            <div className="container pt-5">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase" style={{ color: "#ffc800" }}>Upload Video</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="makeCSS" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className="card shadow p-4 bg-white">
                                {error && (
                                    <div className="alert alert-danger text-center mb-3">{error}</div>
                                )}
                                <form onSubmit={onSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input
                                            type="text"
                                            className={`form-control ${error ? 'error' : ''}`}
                                            id="title"
                                            name="title"
                                            value={values.title}
                                            onChange={changeHandler}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="video" className="form-label"></label>
                                        <input
                                            type="file"
                                            id="video"
                                            ref={fileInputRef}
                                            name="video"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">Upload</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}