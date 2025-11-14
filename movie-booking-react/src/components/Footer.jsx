export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center py-8 border-t border-gray-700">
        <p className="text-sm opacity-80">
          &copy; {new Date().getFullYear()} Movie Booking. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
