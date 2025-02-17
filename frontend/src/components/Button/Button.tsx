import { cn } from "@/utils/cn"
import { forwardRef } from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={cn('h-10 rounded-md px-8 hover:brightness-75', className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export default Button
