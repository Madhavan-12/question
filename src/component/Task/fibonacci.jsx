import { useState } from "react";

const Fibonacci = () => {
  const [n, setN] = useState(5); // How many numbers to show

  // Function to generate Fibonacci sequence
  const generateFibonacci = (num) => {
    const fib = [0, 1];
    for (let i = 2; i < num; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, num);
  };

  const fibSequence = generateFibonacci(n);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full mx-auto border border-purple-100">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-2">Fibonacci Sequence</h1>
        <p className="text-lg text-center text-gray-600 mb-2">First <span className="font-bold text-purple-600">{n}</span> numbers:</p>
        
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 mb-8 border border-purple-200">
          <div className="flex flex-wrap justify-center gap-3">
            {fibSequence.map((num, index) => (
              <span 
                key={index}
                className="bg-white border-2 border-purple-300 text-purple-700 font-bold py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
              >
                {num}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105 active:scale-95 shadow-md flex items-center justify-center gap-2"
            onClick={() => setN(n + 1)}
          >
            <span>+</span>
            Increase Count
          </button>

          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105 active:scale-95 shadow-md flex items-center justify-center gap-2"
            onClick={() => setN(n > 1 ? n - 1 : 1)}
          >
            <span>-</span>
            Decrease Count
          </button>

          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105 active:scale-95 shadow-md"
            onClick={() => setN(5)}
          >
            Reset
          </button>
        </div>
        
        <p className="text-sm text-center text-gray-500 mt-6">
          Each number is the sum of the two preceding ones
        </p>
      </div>
    </div>
  );
};

export default Fibonacci;