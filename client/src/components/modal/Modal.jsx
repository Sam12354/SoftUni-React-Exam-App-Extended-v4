export default function Modal({ onConfirm, onCancel }) {
    return (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg text-center">
                <p className="mb-4 fs-5">Do you really want to delete this video?</p>
                <div className="d-flex justify-content-center gap-3">
                    <button onClick={onConfirm} className="btn btn-danger">Delete</button>
                    <button onClick={onCancel} className="btn btn-success">Close</button>
                </div>
            </div>
        </div>
    )
}
