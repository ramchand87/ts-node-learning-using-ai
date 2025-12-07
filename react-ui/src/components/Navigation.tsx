import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600 hover:text-blue-500';
    };

    return (
        <nav className="bg-white shadow mb-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="font-bold text-xl text-gray-800 dark:text-gray-200">React AI Workspace</div>
                    <div className="flex space-x-8">
                        <Link to="/" className={`font-medium transition-colors py-4 ${isActive('/')}`}>
                            Home
                        </Link>
                        <Link to="/playground" className={`font-medium transition-colors py-4 ${isActive('/playground')}`}>
                            Playground
                        </Link>
                        <Link to="/products" className={`font-medium transition-colors py-4 ${isActive('/products')}`}>
                            Products (API)
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
