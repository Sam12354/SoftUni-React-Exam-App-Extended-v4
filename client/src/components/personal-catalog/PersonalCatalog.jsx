import { useContext } from "react";
import PersonalCatalogItem from "./personal-catalog-item/PersonalCatalogItem";
import PersonalCatalogVideo from "./personal-catalog-video/PersonalCatalogVideo";

import { AuthContext } from "../../contexts/AuthContext";
import { useGetAllItems, useGetAllVideos } from "../../hooks/useService";

export default function PersonalCatalog() {

    const { userId } = useContext(AuthContext);

    const [items] = useGetAllItems();
    const [videos] = useGetAllVideos()
    

    const ownerItems = items.filter(item => item.owner === userId);
    const ownerVideos = videos.filter(video => video.user === userId);
    // user: '68a5b788bd9411c40a624207' e na user a moeto bilo na owner
    
    return (
        <section className="page-section personal-catalog">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">My Products</h2>
                    <h3 className="section-subheading text-muted fw-bold fs-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                        Manage your uploaded products
                    </h3>
                </div>
                <div className="row">
                    {ownerVideos.length ?
                        ownerVideos.map(video => <PersonalCatalogVideo key={video._id} {...video} />)
                        :
                        <div className="pt-5"> 
                            <h1 className="text-center text-muted">You haven't uploaded any videos yet</h1>
                        </div>
                    }
                    {ownerItems.length ?
                        ownerItems.map(item => <PersonalCatalogItem key={item._id} {...item} />)
                        :
                        <div className="pt-5"> 
                            <h1 className="text-center text-muted">You haven't uploaded any products yet</h1>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}
