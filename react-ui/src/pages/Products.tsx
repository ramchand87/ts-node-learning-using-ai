import { useEffect, useState } from 'react';
import { fetchProducts, createProduct, Product } from '../api/products';

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Fetch products on mount
    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        setLoading(true);
        try {
            const data = await fetchProducts();
            setProducts(data);
            setError(null);
        } catch (err) {
            setError('Failed to load products. Is backend running on port 3000?');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !price) return;

        try {
            const newProduct = await createProduct({
                name,
                price: parseFloat(price)
            });
            setProducts([...products, newProduct]); // Optimistic update
            setName('');
            setPrice('');
            setError(null);
        } catch (err: any) {
            const errorMessage = err.response?.data?.message || err.message || JSON.stringify(err);
            setError(`Failed to create product: ${errorMessage}. Status: ${err.response?.status}`);
            console.error(err);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Product Inventory</h2>

            {/* Error Message */}
            {error && (
                <div className="mb-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
                    <p>{error}</p>
                </div>
            )}

            {/* Create Form */}
            <form onSubmit={handleCreate} className="mb-8 p-4 bg-gray-50 dark:bg-slate-700 rounded border border-gray-200 dark:border-gray-600">
                <h3 className="text-lg font-semibold mb-4 dark:text-white">Add New Product</h3>
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Product Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="flex-1 p-2 border rounded dark:bg-slate-600 dark:text-white dark:border-gray-500"
                        required
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-32 p-2 border rounded dark:bg-slate-600 dark:text-white dark:border-gray-500"
                        required
                        min="0"
                        step="0.01"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition-colors disabled:opacity-50"
                    >
                        {loading ? 'Adding...' : 'Add'}
                    </button>
                </div>
            </form>

            {/* Product List */}
            {loading && products.length === 0 ? (
                <p className="text-gray-500">Loading products...</p>
            ) : products.length > 0 ? (
                <div className="grid gap-4">
                    {products.map((product) => (
                        <div key={product.id} className="flex justify-between items-center p-4 border rounded hover:bg-gray-50 dark:hover:bg-slate-700 dark:border-gray-600">
                            <div>
                                <span className="font-medium text-lg dark:text-gray-200">{product.name}</span>
                                <span className="text-gray-500 text-sm ml-2">#{product.id}</span>
                            </div>
                            <span className="font-bold text-green-600 dark:text-green-400">
                                ${Number(product.price).toFixed(2)}
                            </span>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 italic">No products found. Add one above!</p>
            )}
        </div>
    );
};

export default Products;
