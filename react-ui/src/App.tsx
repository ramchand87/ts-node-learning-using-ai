import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { saveState, loadState } from './db/database';
import { setLoadedState } from './store/slices/playgroundSlice';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Playground from './pages/Playground';
import './App.css';

// Component to handle DB synchronization
const DB_Syncer = () => {
  const dispatch = store.dispatch;

  useEffect(() => {
    // 1. Load state on startup
    const hydrateStore = async () => {
      try {
        const savedState = await loadState();
        if (savedState) {
          console.log('Hydrating store from IndexedDB:', savedState);
          dispatch(setLoadedState(savedState));
        }
      } catch (error) {
        console.error('Failed to load state from IndexedDB:', error);
      }
    };
    hydrateStore();

    // 2. Subscribe to store updates to save state
    const unsubscribe = store.subscribe(() => {
      const state = store.getState();
      saveState(state.playground);
    });

    return () => unsubscribe();
  }, [dispatch]);

  return null; // This component renders nothing
};

function App() {
  return (
    <Provider store={store}>
      <DB_Syncer />
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-slate-900 dark:text-white transition-colors duration-300">
          <Navigation />

          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/playground" element={<Playground />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
