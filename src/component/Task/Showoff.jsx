import { useState } from "react";

const Showoff=()=>{
  const [open,setOpen]=useState(false)

  const toggle=()=>{
    setOpen(!open)
  }
  
  return(<>
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 py-8 px-4">


      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30">
          
          <button 
            onClick={toggle} 
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-white/20"
          >
            {open ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
                Hide Image
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Show Image
              </span>
            )}
          </button>
          
          {open && (
            <div className="mt-8 animate-fade-in-up">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
                <img 
                  src="./images/cheems1.jpg" 
                  alt="cheems" 
                  className="mx-auto rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-white/40"
                />
                <div className="mt-4 text-white font-semibold text-sm bg-black/20 rounded-full py-2 px-4 inline-block">
                  🐕 Cute Cheems Spotted!
                </div>
              </div>
            </div>
          )}
          
        </div>
      </div>
      
    </div>
  </>)
}

export default Showoff;