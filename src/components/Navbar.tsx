"use client";
import { useState } from "react";
import Link from "next/link";
import CartIcon from "./icons/CartIcon";
import { useCart } from "@/context/CartContext";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <div className="container-px max-w-7xl mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-primary" />
          <span className="text-lg font-bold tracking-wide">Tufan Motors</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Link href="/products" className="hover:text-primary">
            Products
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
          <Link
            href="/cart"
            className="relative flex items-center gap-2 hover:text-primary"
          >
            <CartIcon className="h-5 w-5" />
            <span>Cart</span>
            {count > 0 && (
              <span className="absolute -top-2 -right-3 rounded-full bg-primary text-black text-xs font-bold px-1.5 py-0.5 min-w-[1.25rem] text-center">
                {count}
              </span>
            )}
          </Link>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-neutral-800 px-3 py-2 hover:bg-neutral-900"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-neutral-800 bg-neutral-950/95"
        >
          <div className="container-px max-w-7xl mx-auto py-3 flex flex-col gap-2 text-sm">
            <Link
              href="/"
              className="hover:text-primary"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="hover:text-primary"
              onClick={() => setOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-2 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              <CartIcon className="h-5 w-5" />
              <span>Cart</span>
              {count > 0 && (
                <span className="ml-auto rounded-full bg-primary text-black text-xs font-bold px-1.5 py-0.5 min-w-[1.25rem] text-center">
                  {count}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
