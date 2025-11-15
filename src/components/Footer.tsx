export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-12">
      <div className="container-px max-w-7xl mx-auto py-6 text-sm text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          © {new Date().getFullYear()} Tufan Motors. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-primary">
            Privacy
          </a>
          <a href="#" className="hover:text-primary">
            Terms
          </a>
          <a href="/products" className="hover:text-primary">
            Shop
          </a>
        </div>
      </div>
    </footer>
  );
}
