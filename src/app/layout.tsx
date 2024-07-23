import type { Metadata } from "next";
import "@/assets/css/tailwind.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";
import { ThemeSwitch } from "@/components/common/theme-switch";

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
        </ThemeProvider>
      </body>
    </html>
  );
}
