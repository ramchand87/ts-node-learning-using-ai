import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Welcome to React UI</h1>
            <p className="mb-4">This is the implementation of our recent learning session.</p>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md max-w-sm">
                <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Head over to the Playground to interact with various UI elements and see React in action.
                </p>
                <Link
                    to="/playground"
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
                >
                    Go to Playground
                </Link>
            </div>
        </div>
    );
};

export default Home;
