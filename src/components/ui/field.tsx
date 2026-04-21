import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

/* ─── Field wrapper ─── */
interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "vertical" | "horizontal"
}

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, orientation = "vertical", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "space-y-2",
        orientation === "horizontal" && "flex items-center gap-3 space-y-0",
        "[&[data-invalid=true]_label]:text-destructive",
        className
      )}
      {...props}
    />
  )
)
Field.displayName = "Field"

/* ─── FieldGroup ─── */
const FieldGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-6", className)} {...props} />
))
FieldGroup.displayName = "FieldGroup"

/* ─── FieldLabel ─── */
const FieldLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => (
  <Label ref={ref} className={cn("", className)} {...props} />
))
FieldLabel.displayName = "FieldLabel"

/* ─── FieldDescription ─── */
const FieldDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-[0.8rem] text-muted-foreground", className)}
    {...props}
  />
))
FieldDescription.displayName = "FieldDescription"

/* ─── FieldError ─── */
interface FieldErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {
  errors?: unknown[] | undefined
}

const FieldError = React.forwardRef<HTMLParagraphElement, FieldErrorProps>(
  ({ className, errors, ...props }, ref) => {
    if (!errors || errors.length === 0) return null

    return (
      <div ref={ref} className={cn("space-y-1", className)} {...props}>
        {errors.map((err, i) => {
          const message =
            typeof err === "string"
              ? err
              : err && typeof err === "object" && "message" in err
                ? (err as { message?: string }).message
                : String(err ?? "")
          return (
            <p key={i} className="text-[0.8rem] font-medium text-destructive">
              {message}
            </p>
          )
        })}
      </div>
    )
  }
)
FieldError.displayName = "FieldError"

export { Field, FieldGroup, FieldLabel, FieldDescription, FieldError }
