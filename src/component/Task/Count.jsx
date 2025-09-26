import { useState } from "react";

const Count = () => {
    const [count, setcount] = useState(0);
    
    return(
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-auto border border-gray-100">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">Counter</h1>
                    <p className="text-2xl text-center text-gray-600 mb-8">Current count: 
                        <span className={`font-bold ml-2 ${count > 0 ? 'text-green-600' : count < 0 ? 'text-red-600' : 'text-gray-800'}`}>
                            {count}
                        </span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={() => setcount(count + 1)}
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105 active:scale-95 shadow-md"
                        >
                            Increase
                        </button>
                        <button 
                            onClick={() => setcount(count - 1)}
                            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105 active:scale-95 shadow-md"
                        >
                            Decrease
                        </button>
                        <button 
                            onClick={() => setcount(0)}
                            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105 active:scale-95 shadow-md"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Count;