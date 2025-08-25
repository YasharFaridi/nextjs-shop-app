import { useRouter } from "next/router";
import productItems from "../../data/products.json";
import Layout from "../../components/Layout";

function productPage() {
  const { query } = useRouter();
  const { slug } = query;

  const product = productItems.find((pItem) => pItem.slug_link === slug);

  return (
    <Layout title={product?.title}>
      <div className="flex flex-col rounded-none shadow-xl card card-side bg-base-300 md:flex-row md:p-10 md:rounded-xl">
        <figure>
          <img
            className="rounded-none w-96 h-96 md:rounded-xl"
            src={product?.image_src}
            alt="Movie"
          />
        </figure>
        <div className="flex gap-8 card-body md:items-center">
          <h2 className="text-2xl font-bold text-center card-title">
            {product?.title}
          </h2>
          <div className="flex items-center justify-between md:w-1/2">
            <h2 className="text-xl font-bold">Category: </h2>
            <h2>{product?.category}</h2>
          </div>
          <div className="flex items-center justify-between md:w-1/2">
            <h2 className="text-xl font-bold">Status: </h2>
            <div className={product?.count > 0 ? "text-success" : "text-error"}>
              {product?.count > 0 ? "Available" : "Not Available"}
            </div>
          </div>
          <div> {product?.description} </div>

          <div className="flex flex-col items-center gap-4 md:w-1/3">
            <h2 className="text-xl font-bold text-center">${product?.price}</h2>
            <div className="justify-start card-actions">
              <button className="w-full btn btn-primary">Add to card</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default productPage;
