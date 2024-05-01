import download from './asset/download.jpg';
import people from './asset/people.png';
import './App.css';

function App() {

  
  return (
    <>
      <div className="min-h-screen relative " style={{backgroundImage: `url(${download})`}}>
        {/* Full-screen background image */}
       
        
        {/* Main content */}
        <div className="relative">
          {/* Navigation */}
          <nav className="w-full  shadow-md p-4 z-10">
            <div className="container  mx-auto flex justify-between items-center">
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-yellow-300">Home</a>
                <a href="#" className="text-white hover:text-yellow-300">About</a>
                <a href="#" className="text-white hover:text-yellow-300">Contact</a>
              </div>
              <h2 className="font-bold text-xl text-yellow-100 animate-bounce">Landing</h2>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Buy Now
              </button>
            </div>
          </nav>

          {/* Main content */}
          <main className="container mx-auto mt-10 flex  items-center text-center ">
            <article>
              <h1 className="text-4xl font-bold mb-4 text-white">
                Introduce Your Product Quickly & Effectively
              </h1>
              <h4 className="text-white mb-6">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis enim.
              </h4>
              <div className="flex gap-4 justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                  Purchase UI Kit
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-6 rounded">
                  Learn More
                </button>
              </div>
            </article>

            {/* Image in aside section */}
            <aside className="flex items-center justify-center mt-10">
              <img src={people} alt="People image" className=" w-1/2 h-auto rounded-lg shadow-lg mx-4 relative" />
              
             
              
          
         
       
            </aside>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
