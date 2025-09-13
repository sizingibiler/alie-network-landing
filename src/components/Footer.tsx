export function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
        <p>© 2025 Alie Network. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-white transition-colors" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}