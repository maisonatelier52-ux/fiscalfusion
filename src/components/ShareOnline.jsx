"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaMedium,
  FaTwitter,
} from "react-icons/fa";
import SubstackIconBlack from "./SubstackIconBlack";

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

      {/* Instagram (no direct share URL — fallback to profile or site) */}
      <Link
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="no-underline"
      >
        <FaInstagram className="cursor-pointer" />
      </Link>

      {/* Medium */}
      <Link
        href={`https://medium.com/new-story`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Medium"
        className="no-underline"
      >
        <FaMedium className="cursor-pointer" />
      </Link>

      {/* Substack */}
      <Link
        href={`https://substack.com/`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Substack"
        className="no-underline"
      >
        <SubstackIconBlack className="text-black w-6 h-6" />
      </Link>
    </div>
  );
}
