import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

function Shop() {
  return (
    <main className="catalog-page">
      <div className="catalog-header">
        <div>
          <span>AISHU FASHIONS</span>

          <h1>Shop All</h1>

          <p>Discover fashion, accessories and everyday styles.</p>
        </div>
      </div>

      <div className="catalog-container">
        <aside className="filters">
          <h3>Filters</h3>

          <label>
            <input type="checkbox" />
            Women
          </label>

          <label>
            <input type="checkbox" />
            Men
          </label>

          <label>
            <input type="checkbox" />
            Dresses
          </label>

          <label>
            <input type="checkbox" />
            Accessories
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
              <option>Sort: Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
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

export default Shop;
