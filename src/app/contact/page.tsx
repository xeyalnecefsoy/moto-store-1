import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact - Tufan Motors" };

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-neutral-300">
          We’d love to hear from you. Reach us through the channels below or
          send a message.
        </p>
      </header>

      <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        <div className="card h-full p-5 flex items-start gap-3">
          <div className="h-10 w-10 grid place-items-center rounded-md bg-neutral-800">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <div className="font-semibold">Phone</div>
            <div className="text-neutral-300">+1 (555) 123-4567</div>
          </div>
        </div>
        <div className="card p-5 flex items-start gap-3">
          <div className="h-10 w-10 grid place-items-center rounded-md bg-neutral-800">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <div className="font-semibold">Email</div>
            <div className="text-neutral-300">office@tufan.az</div>
          </div>
        </div>
        <div className="card p-5 flex items-start gap-3">
          <div className="h-10 w-10 grid place-items-center rounded-md bg-neutral-800">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <div className="font-semibold">Address</div>
            <div className="text-neutral-300">
              123 Ride Ave, Speed City, CA 90000
            </div>
          </div>
        </div>
      </section>

      <section className="card overflow-hidden">
        <div className="aspect-[16/9]">
          <iframe
            title="MotoStore Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509207!2d144.95373531531518!3d-37.81627974201195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAwLjYiUyAxNDTCsDU3JzE0LjQiRQ!5e0!3m2!1sen!2s!4v1611816144018!5m2!1sen!2s"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0 w-full h-full"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="grid gap-6 grid-cols-1 md:grid-cols-2 items-start">
        <div className="card p-6 min-w-0">
          <h2 className="font-semibold mb-3">Follow us</h2>
          <div className="flex flex-wrap items-center gap-3 text-neutral-300">
            <a
              className="hover:text-primary inline-flex items-center gap-2"
              href="#"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
              Facebook
            </a>
            <a
              className="hover:text-primary inline-flex items-center gap-2"
              href="#"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </a>
            <a
              className="hover:text-primary inline-flex items-center gap-2"
              href="#"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
              Twitter
            </a>
          </div>
        </div>
        <div className="min-w-0">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
