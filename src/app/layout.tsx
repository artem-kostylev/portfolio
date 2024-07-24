import type { Metadata } from "next";
import "@/assets/css/tailwind.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import { ThemeSwitch } from "@/components/common/theme-switch";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://kostylev.dev"),
  title: "Artem Kostylev",
  description:
    "Detail-oriented Software Engineer dedicated to building high-quality products",
  openGraph: {
    title: "Artem Kostylev",
    type: "website",
    url: "/",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Artem Kostylev",
      },
    ],
    siteName: "Artem Kostylev",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artem Kostylev",
    description:
      "Detail-oriented Software Engineer dedicated to building high-quality products",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Artem Kostylev",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-sans antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeSwitch />
          <main role="main">{children}</main>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
