import type { Metadata } from "next";
import "@/assets/css/tailwind.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import { ThemeSwitch } from "@/components/common/theme-switch";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Artem Kostylev",
  description:
    "Detail-oriented Software Engineer dedicated to building high-quality products.",
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
        </ThemeProvider>
      </body>
    </html>
  );
}
