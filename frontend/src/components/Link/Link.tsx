import { cn } from "@/utils/cn"
import NextLink from "next/link"
import { ComponentProps } from "react";


type LinkProps = ComponentProps<typeof NextLink>;

const Link = ({ className, ...props }: LinkProps) => {
  return (
    <NextLink
      className={cn('h-10 rounded-md px-8 flex items-center justify-center hover:brightness-75', className)}
      {...props}
    />
  )
}

export default Link
