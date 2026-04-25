export default function LikeButton({ onLike }) {
    return (
        <button onClick={onLike} className="btn btn-outline-primary d-flex align-items-center gap-2">
            👍 Like
        </button>
    )
}