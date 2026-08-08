import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Jinyu Zhang | Incoming PhD Student at EPFL";
const description =
  "Jinyu Zhang is an incoming PhD student at LUTS, EPFL, working on learning-augmented optimization and intelligent transportation systems.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const forwardedProtocol = requestHeaders.get("x-forwarded-proto");
  const protocol =
    forwardedProtocol ?? (host?.startsWith("localhost") ? "http" : "https");
  const origin = host
    ? `${protocol}://${host}`
    : "https://jinyu-zhang-academic.ndyeeggs0uv.chatgpt.site";
  const socialImage = `${origin}/og-v2.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: socialImage,
          width: 1733,
          height: 908,
          alt: "Jinyu Zhang, incoming PhD student at EPFL",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
