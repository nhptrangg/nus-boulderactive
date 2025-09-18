'use client'

import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: "smooth"});
};

export default function ScrollButton({
  scrollToId,
  className,
  ...props
}: Omit<React.ComponentProps<"a">, 'onClick'> & {
    scrollToId: string
  }) {
  const pathname = usePathname();

  return <a
    {...props}
    className={cn('cursor-pointer', className)}
    onClick={pathname === '/' ? () => scrollToSection(scrollToId) : undefined}
    href={pathname === '/' ? undefined : `/#${scrollToId}`}
  />;
}
