export const Navbar = () => {
  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-4">
          <div className="navbar-logo">
            <h1 className="text-white text-2xl font-bold">MovieBooking</h1>
          </div>
          <div className="flex-1 max-w-md ml-auto flex gap-2">
            <input
              type="text"
              placeholder="Film adı veya IMDb ID'si ile ara"
              className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 border border-gray-700"
            />
            <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-600 border border-gray-700 cursor-pointer">
              Ara
            </button>
          </div>
        </div>
        <div className="flex gap-6 items-center ">
          <a
            href="/"
            className="text-gray-200 hover:text-blue-400 transition-colors duration-300"
          >
            HD Filmler
          </a>
          <a
            href="/kesfet"
            className="text-gray-200 hover:text-blue-400 transition-colors duration-300"
          >
            Keşfet
          </a>
          <a
            href="/turler"
            className="text-gray-200 hover:text-blue-400 transition-colors duration-300"
          >
            Film Türleri
          </a>
          <a
            href="/populer"
            className="text-gray-200 hover:text-blue-400 transition-colors duration-300"
          >
            En Çok İzlenenler
          </a>
          <a
            href="/yapim-yili"
            className="text-gray-200 hover:text-blue-400 transition-colors duration-300"
          >
            Yapım Yılı
          </a>
          <a
            href="/iletisim"
            className="text-gray-200 hover:text-blue-400 transition-colors duration-300"
          >
            İletişim
          </a>
        </div>
      </div>
    </nav>
  );
};
