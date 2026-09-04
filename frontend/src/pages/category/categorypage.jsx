import ProductCard from "../../components/ProductCard/ProductCard";

function CategoryPage({ title, subtitle, products }) {
  return (
    <main className="catalog-page">
      <div className="category-hero">
        <span>AISHU FASHIONS</span>

        <h1>{title}</h1>

        <p>{subtitle}</p>
      </div>

      <div className="catalog-container">
        <aside className="filters">
          <h3>Shop By</h3>

          <label>
            <input type="checkbox" />
            New Arrivals
          </label>

          <label>
            <input type="checkbox" />
            Trending
          </label>

          <label>
            <input type="checkbox" />
            Best Sellers
          </label>

          <h3>Price</h3>

          <label>
            <input type="checkbox" />
            Under ₹500
          </label>

          <label>
            <input type="checkbox" />
            ₹500 - ₹1000
          </label>

          <label>
            <input type="checkbox" />
            ₹1000+
          </label>
        </aside>

        <section className="catalog-products">
          <div className="catalog-toolbar">
            <strong>{products.length} Products</strong>

            <select>
              <option>Recommended</option>
              <option>Newest</option>
              <option>Price Low to High</option>
              <option>Top Rated</option>
            </select>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default CategoryPage;
