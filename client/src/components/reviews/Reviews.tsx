import { useEffect, useState, useContext } from "react";
import { getReviews, createReview, getAverageRating } from "../../api/review-api";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

interface PassProps {
    isOwner: string;
}

interface Review {
    itemId: string;
    stars: number;
}

export default function Reviews({ isOwner }: PassProps) {
    const { isAuthenticated } = useContext(AuthContext);
    const { itemId } = useParams<{ itemId: string }>();

    const [reviews, setReviews] = useState<Review[]>([]);
    const [stars, setStars] = useState<number>(5);
    const [average, setAverage] = useState({ average: 0, count: 0 });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchReviews = async () => {
        try {
            setLoading(true);

            // TypeScript thinks itemId could be undefined because the URL param might not exist,
            // so we check it here and exit early if it's missing.

            if (!itemId) return;
            const revs = await getReviews(itemId);
            setReviews(revs);

            const avg = await getAverageRating(itemId);
            setAverage(avg);

            setLoading(false);
        } catch (err) {
            if(err instanceof Error){
                setError(err.message || "Failed to load reviews");
            }
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, [itemId]);

    // im telling TS that (e) is a React form event coming from an HTML <form> element
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (!itemId) return;
            await createReview(itemId, stars);
            setStars(5);
            fetchReviews();
        } catch (err) {
            if(err instanceof Error){
                setError(err.message || "You have already reviewed this item");
            }
        }
    };

    if (loading) return <p>Loading reviews...</p>;
    if (error) return <p className="text-danger">{error}</p>;

    return (
        <section className="reviews-section mt-4">
            <h3>Reviews ({average.count}) - Average Rating: {average.average.toFixed(1)} / 5</h3>

            {reviews.length === 0 && <p>No reviews yet.</p>}

            {/* Show review form only if user is authenticated AND NOT the owner */}
            {isAuthenticated && !isOwner && (
                <form onSubmit={onSubmit} className="mb-3">
                    <label htmlFor="stars">Your rating:</label>
                    <select
                        id="stars"
                        value={stars}
                        onChange={(e) => setStars(Number(e.target.value))}
                        className="form-select w-auto d-inline-block ms-2"
                    >
                        {[5, 4, 3, 2, 1].map((n) => (
                            <option key={n} value={n}>
                                {n} ⭐
                            </option>
                        ))}
                    </select>
                    <button type="submit" className="btn btn-primary ms-3">
                        Add Review
                    </button>
                </form>
            )}
        </section>
    );
}