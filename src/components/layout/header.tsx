"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layers, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import React from "react";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/products", label: "Productos" },
  { href: "/services", label: "Servicios" },
  { href: "/case-studies", label: "Casos de Éxito" },
  { href: "/contact", label: "Contacto" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-card/80 backdrop-blur-sm shadow-md" : "bg-transparent",
      pathname === "/" ? "text-white" : "text-foreground",
      isScrolled && "text-foreground"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Layers className="h-7 w-7 text-primary" />
            <span className="font-headline text-2xl font-bold">StoneLook</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary font-bold" : ""
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/quote">
              <Button size="sm" className={cn(pathname === "/" && !isScrolled ? "bg-white text-primary hover:bg-neutral-200": "")}>
                Solicitar Presupuesto
              </Button>
            </Link>
          </nav>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-card text-foreground flex flex-col">
                <SheetHeader className="p-4 border-b flex-row justify-between items-center">
                    <SheetTitle asChild>
                        <Link href="/" className="flex items-center gap-2">
                            <Layers className="h-6 w-6 text-primary" />
                            <span className="font-headline text-xl font-bold">StoneLook</span>
                        </Link>
                    </SheetTitle>
                    <SheetClose asChild>
                        <Button variant="ghost" size="icon">
                            <X className="h-6 w-6" />
                            <span className="sr-only">Cerrar menú</span>
                        </Button>
                    </SheetClose>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  <nav className="flex flex-col gap-4 p-4 mt-4">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "text-lg font-medium transition-colors hover:text-primary",
                            pathname === item.href ? "text-primary" : ""
                          )}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto p-4">
                    <SheetClose asChild>
                        <Link href="/quote" className="w-full">
                            <Button className="w-full" size="lg">Solicitar Presupuesto</Button>
                        </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
