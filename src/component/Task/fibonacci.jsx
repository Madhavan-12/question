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
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Fibonacci Sequence</h1>
      <p className="mb-4">First {n} numbers: {fibSequence.join(", ")}</p>

      <div className="flex justify-center gap-3">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={() => setN(n + 1)}
        >
          Increase Count
        </button>

        <button
          className="bg-red-600 text-white px-4 py-2 rounded"
          onClick={() => setN(n > 1 ? n - 1 : 1)}
        >
          Decrease Count
        </button>

        <button
          className="bg-gray-600 text-white px-4 py-2 rounded"
          onClick={() => setN(5)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Fibonacci;
