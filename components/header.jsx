export default function Header() {
    return (
      <header className="border border-gray-400 p-4" id="header">
        <div className="flex justify-between h-30">
          {/* Title */}
          <div className="flex gap-4">
            <img src="/system3_logo_transparent_black.png" alt="system³ Logo" className="h-30 w-30" />
            <div className="flex flex-col justify-center">
              <div className="text-3xl font-bold">Joost Helfers | system³</div>
              <div className="text-xl">Creative Technology & Digital Twins</div>
            </div>
          </div>
  
          {/* Navigation */}
          <nav className="flex gap-4 justify-center items-center">
            <a href="#Hero" className="hover:font-bold">Home</a>
            <a href="#Intro" className="hover:font-bold">Who is Joost?</a>
            <a href="#Work" className="hover:font-bold">Portfolio</a>
            <a href="#Expertise" className="hover:font-bold">Services</a>
            <a href="#Feed" className="hover:font-bold">Updates</a>
            <a href="#footer" className="font-bold hover:bg-gray-200 rounded p-4">Contact</a>
          </nav>
        </div>
      </header>
    );
  }