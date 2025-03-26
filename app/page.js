import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <Header />

      <div className="text-6xl font-bold py-40" id="UnderConstruction">
        This Website is currently under construction. To be transparent about the process you can see the current status down below.
      </div>
    
      <div className="text-3xl font-bold py-40 border border-gray-400" id="Hero">
        This is the Hero Section.
      </div>

      <div className="text-3xl font-bold py-40 border border-gray-400" id="Intro">
        This is the Intro Section.
        <div className="grid grid-cols-4 grid-rows-1 gap-4">
          <div className="col-span-2">This is the section for a cool 3D model.</div>
          <div className="col-span-2 col-start-3">This is where I will describe myself O.o</div>
        </div>
      </div>

      <div className="font-bold py-40 border border-gray-400" id="Work">
        This is the Work Section.
        <div className="grid grid-cols-4 grid-rows-1 gap-4 px-4">
          <div className="bg-lime-200 p-4">Project 1</div>
          <div className="bg-lime-200 p-4">Project 2</div>
          <div className="bg-lime-200 p-4">Project 3</div>
          <div className="bg-lime-200 p-4">Project 4</div>
        </div>
      </div>

      <div className="text-3xl font-bold py-40 border border-gray-400" id="Expertise">
        This is the Expertise Section.
      </div>

      <div className="font-bold py-40 border border-gray-400" id="Feed">
        This is the Feed Section.
        <div className="grid grid-cols-4 grid-rows-1 gap-4 px-4">
          <div className="bg-red-200 p-4">Item 1</div>
          <div className="bg-red-200 p-4">Item 2</div>
          <div className="bg-red-200 p-4">Item 3</div>
          <div className="bg-red-200 p-4">Item 4</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}