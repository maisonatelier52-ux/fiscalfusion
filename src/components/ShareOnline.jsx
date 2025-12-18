"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function ShareOnInline({ title }) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex items-center gap-3 text-[14px] text-[#2f2f2f]">
      <span className="font-normal font-serif">SHARE ON:</span>

      {/* Twitter / X */}
      <Link
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
        className="no-underline"
      >
        <FaTwitter className="cursor-pointer" />
      </Link>

      {/* Facebook */}
      <Link
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="no-underline"
      >
        <FaFacebookF className="cursor-pointer" />
      </Link>

      {/* LinkedIn */}
      <Link
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="no-underline"
      >
        <FaLinkedinIn className="cursor-pointer" />
      </Link>

      {/* WhatsApp */}
      <Link
        href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        className="no-underline"
      >
        <FaWhatsapp className="cursor-pointer" />
      </Link>
    </div>
  );
}
