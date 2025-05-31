import React, { useEffect, useState } from "react";
import axiosInstance from "../service/axiosInstance";
import { useParams } from "react-router";
import ProductDetail from "../components/ProductDetail";
import { Skeleton } from "antd";

const ProductDetailsContainer = () => {
    const { category, id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async function () {
            try {
                const response = await axiosInstance(`/${category}/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Failed to fetch product:", error);
            } finally {
                setLoading(false);
            }
        })();
    }, [category, id]);

    return (
        <>
            {loading ? (
                <div
                 style={{
                   display: 'grid',
                   gridTemplateColumns: 'repeat(1, 1fr)', // default mobile view
                   gap: '20px',
                   padding: '20px',
                 }}
                 className="card-grid"
               >
                 {Array.from({ length: 10 }).map((_, i) => (
                   <div
                     key={i}
                     style={{
                       border: '1px solid #f0f0f0',
                       borderRadius: '8px',
                       padding: '16px',
                       boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                       background: '#fff',
                       width: '100%',
                       height: '31rem',
                     }}
                   >
                     <div style={{ width: '100%', height: '180px', marginBottom: 16 }}>
                       <Skeleton.Image
                         active
                         style={{
                           width: '100%',
                           height: '100%',
                           objectFit: 'cover',
                         }}
                       />
                     </div>
                     <Skeleton active paragraph={{ rows: 2 }} />
                   </div>
                 ))}
               </div>
            ) : (
                <ProductDetail product={product} />
            )}
        </>
    );
};

export default ProductDetailsContainer;
