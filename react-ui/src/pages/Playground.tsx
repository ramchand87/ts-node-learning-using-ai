import { useState } from 'react';

const Playground = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [textList, setTextList] = useState<string[]>([]);
    const [isChecked, setIsChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('option1');

    const handleButtonClick = () => {
        alert('Button clicked!');
    };

    const executeSampleJS = () => {
        const result = Math.random() > 0.5 ? 'Success' : 'Failure';
        console.log('Sample JS executed:', result);
        alert(`Random Result: ${result}`);
    };

    const handleAddText = () => {
        if (text.trim() !== '') {
            setTextList([...textList, text]);
            setText(''); // Clear input after adding
        }
    };

    const handleDeleteText = (indexToDelete: number) => {
        // Filter out the item at the specific index
        setTextList(textList.filter((_, index) => index !== indexToDelete));
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        alert('Selected option:' + e.target.value);
    };

    return (
        <div className="p-8 max-w-2xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold mb-6">UI Playground</h1>

            {/* Button Section */}
            <section className="p-6 border rounded-lg bg-white shadow-sm">
                <h2 className="text-xl font-semibold mb-3">1. Buttons & Events</h2>
                <div className="flex gap-4">
                    <button
                        onClick={() => setCount((c) => c + 1)}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                        Count is {count}
                    </button>
                    <button
                        onClick={handleButtonClick}
                        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                    >
                        Show Alert
                    </button>
                </div>
            </section>

            {/* Text Input Section */}
            <section className="p-6 border rounded-lg bg-white shadow-sm">
                <h2 className="text-xl font-semibold mb-3">2. Text Input</h2>
                <div className="flex gap-2 mb-2">
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Type something..."
                        className="border p-2 rounded w-full"
                    />
                    <button
                        onClick={handleAddText}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium whitespace-nowrap"
                    >
                        Add to List
                    </button>
                </div>
                <p className="text-gray-600">You typed: <span className="font-bold text-blue-600">{text}</span></p>
            </section>

            {/* Checkbox & Radio Section */}
            <section className="p-6 border rounded-lg bg-white shadow-sm">
                <h2 className="text-xl font-semibold mb-3">3. Selection Controls</h2>

                <div className="mb-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}
                            className="w-4 h-4"
                        />
                        <span>Toggle me (State: {isChecked ? 'ON' : 'OFF'})</span>
                    </label>
                </div>

                <div className="space-y-2">
                    <p className="font-medium">Radio Selection: {radioValue}</p>
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="demo-radio"
                            value="option1"
                            checked={radioValue === 'option1'}
                            onChange={(e) => setRadioValue(e.target.value)}
                        />
                        <span>Option 1</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="demo-radio"
                            value="option2"
                            checked={radioValue === 'option2'}
                            onChange={(e) => setRadioValue(e.target.value)}
                        />
                        <span>Option 2</span>
                    </label>
                </div>
            </section>

            {/* Javascript Execution Section */}
            <section className="p-6 border rounded-lg bg-white shadow-sm">
                <h2 className="text-xl font-semibold mb-3">4. Custom Logic</h2>
                <p className="text-gray-600 mb-3">Click to run a simulated backend check or random logic.</p>
                <button
                    onClick={executeSampleJS}
                    className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded w-full"
                >
                    Run Logic
                </button>
            </section>

            {/* Select Dropdown Section */}
            <section className="p-6 border rounded-lg bg-white shadow-sm">
                <h2 className="text-xl font-semibold mb-3">5. Dropdown Selection</h2>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="demo-select" className="font-medium text-gray-700">choose an option:</label>
                    <select
                        id="demo-select"
                        className="border p-2 rounded w-full sm:w-1/2"
                        defaultValue=""
                        onChange={(e) => handleSelectChange(e)}
                    >
                        <option value="" disabled>-- Select an Option --</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
            </section>

            <section className="p-6 border rounded-lg bg-white shadow-sm">
                <h2 className="text-xl font-semibold mb-3">6. Submitted Rows ({textList.length})</h2>
                {textList.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-6 py-4">#</th>
                                    <th scope="col" className="px-6 py-4">Text Content</th>
                                    <th scope="col" className="px-6 py-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {textList.map((item, index) => (
                                    <tr key={index} className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{item}</td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <button
                                                onClick={() => handleDeleteText(index)}
                                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-gray-500 italic">No items added yet. Type above and click "Add".</p>
                )}
            </section>
        </div>
    );
};

export default Playground;
