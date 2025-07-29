"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layers, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import React from "react";

const productCategories = [
    { name: "Sistemas Ucrete", href: "/products#sistemas-ucrete"},
    { name: "Sistemas Epóxicos", href: "/products#sistemas-epoxicos"},
    { name: "Sellos, Juntas y Soluciones Sanitarias", href: "/products#sellos-juntas"},
    { name: "Señalización y Muros", href: "/products#senalizacion-muros"},
    { name: "Cancelería y Acabados Generales", href: "/products#canceleria-acabados"},
];

const serviceCategories = [
    { name: "Sistemas HVAC", href: "/services#hvac"},
    { name: "Obra Civil", href: "/services#obra-civil"},
    { name: "Estructuras Metálicas y Techumbres", href: "/services#estructuras"},
    { name: "Tablaroca", href: "/services#tablaroca"},
    { name: "DPA (Pulido y Abrillantado)", href: "/services#dpa"},
];


const navItems = [
  { href: "/", label: "Inicio" },
  { 
    href: "/products", 
    label: "Productos",
    subcategories: productCategories
  },
  { 
    href: "/services", 
    label: "Servicios",
    subcategories: serviceCategories
  },
  { href: "/case-studies", label: "Casos de Éxito" },
  { href: "/contact", label: "Contacto" },
];

function NavLink({ href, label, subcategories, pathname }: { href: string; label: string; subcategories?: {name: string, href: string}[], pathname: string }) {
  const [open, setOpen] = React.useState(false);
  
  if (subcategories) {
    return (
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
           <Link
            href={href}
            className={cn(
              "group text-sm font-medium transition-colors hover:text-primary flex items-center gap-1",
              pathname.startsWith(href) ? "text-primary font-bold" : ""
            )}
            onMouseEnter={() => setOpen(true)}
          >
            {label}
            <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", open ? "rotate-180" : "")} />
          </Link>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="bg-card text-foreground"
          onMouseLeave={() => setOpen(false)}
        >
          {subcategories.map((sub) => (
            <DropdownMenuItem key={sub.name} asChild>
              <Link href={sub.href} className="hover:text-primary">{sub.name}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        pathname === href ? "text-primary font-bold" : ""
      )}
    >
      {label}
    </Link>
  );
}


export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const isHomePage = pathname === "/";

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = cn(
    "sticky top-0 z-50 w-full transition-all duration-300",
    isHomePage && !isScrolled ? "bg-transparent text-white" : "bg-card/80 backdrop-blur-sm shadow-md text-foreground"
  );
  
  const linkClasses = cn(
      "text-sm font-medium transition-colors hover:text-primary",
       (isHomePage && !isScrolled) ? "text-white" : "text-foreground"
  );

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Layers className="h-7 w-7 text-primary" />
            <span className={cn("font-headline text-2xl font-bold", (isHomePage && !isScrolled) ? "text-white" : "text-foreground")}>LEXFOR</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
               <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                subcategories={item.subcategories}
                pathname={pathname}
              />
            ))}
             <Link href="/quote">
                <Button size="sm">
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
                            <span className="font-headline text-xl font-bold">LEXFOR</span>
                        </Link>
                    </SheetTitle>
                    <SheetClose asChild>
                        <Button variant="ghost" size="icon">
                            <X className="h-6 w-6" />
                            <span className="sr-only">Cerrar menú</span>
                        </Button>
                    </SheetClose>
                </SheetHeader>
                <div className="flex flex-col h-full overflow-y-auto">
                  <Accordion type="multiple" className="w-full">
                    {navItems.map((item) => (
                      item.subcategories ? (
                        <AccordionItem value={item.label} key={item.label} className="border-b px-4">
                          <AccordionTrigger className={cn("text-lg font-medium hover:no-underline", pathname.startsWith(item.href) ? "text-primary" : "")}>
                            {item.label}
                          </AccordionTrigger>
                          <AccordionContent className="pl-4">
                            <nav className="flex flex-col gap-2">
                              <SheetClose asChild>
                                <Link href={item.href} className="pb-2 text-base font-medium text-muted-foreground border-b">Ver todos</Link>
                              </SheetClose>
                              {item.subcategories.map(sub => (
                                <SheetClose asChild key={sub.name}>
                                  <Link href={sub.href} className="pt-2 text-base text-muted-foreground">{sub.name}</Link>
                                </SheetClose>
                              ))}
                            </nav>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <SheetClose asChild key={item.href}>
                            <Link
                              href={item.href}
                              className={cn(
                                "block border-b px-4 py-4 text-lg font-medium transition-colors hover:text-primary",
                                pathname === item.href ? "text-primary" : ""
                              )}
                            >
                              {item.label}
                            </Link>
                        </SheetClose>
                      )
                    ))}
                  </Accordion>
                  
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
