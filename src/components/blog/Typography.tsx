import type { PropsWithChildren } from "react";
import { cn } from "../../lib/utils";

export const TypographyH1: React.FC<
  PropsWithChildren<{ className?: string }>
> = ({ children, className, ...props }) => {
  return (
    <h1
      {...props}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const TypographyH2: React.FC<
  PropsWithChildren<{ className?: string }>
> = ({ children, className, ...props }) => {
  return (
    <h2
      {...props}
      className={cn(
        "mt-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
};

export const TypographyH3: React.FC<
  PropsWithChildren<{ className?: string }>
> = ({ children, className, ...props }) => {
  return (
    <h3
      {...props}
      className={cn(
        "my-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const TypographyH4: React.FC<
  PropsWithChildren<{ className?: string }>
> = ({ children, className, ...props }) => {
  return (
    <h4
      {...props}
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const TypographyH5: React.FC<
  PropsWithChildren<{ className?: string }>
> = ({ children, className, ...props }) => {
  return (
    <h5
      {...props}
      className={cn(
        "scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h5>
  );
};

export const TypographyH6: React.FC<
  PropsWithChildren<{ className?: string }>
> = ({ children, className, ...props }) => {
  return (
    <h6
      {...props}
      className={cn(
        "scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h6>
  );
};

export const TypographyP: React.FC<
  PropsWithChildren<{ className?: string }>
> = ({ children, className, ...props }) => {
  return (
    <p
      {...props}
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
    >
      {children}
    </p>
  );
};

export const TypographyBlockquote: React.FC<
  PropsWithChildren<{ className?: string }>
> = ({ children, className, ...props }) => {
  return (
    <blockquote
      {...props}
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
    >
      {children}
    </blockquote>
  );
};

export const TypographyUL: React.FC<
  PropsWithChildren<{ className?: string }>
> = ({ children, className, ...props }) => (
  <ul
    {...props}
    className={cn("mt-4 list-inside list-disc", className)}
  >
    {children}
  </ul>
);

export const TypographyOL: React.FC<
  PropsWithChildren<{ className?: string }>
> = ({ children, className, ...props }) => (
  <ol
    {...props}
    className={cn("mt-4 list-inside list-decimal", className)}
  >
    {children}
  </ol>
);

export const TypographyLI: React.FC<
  PropsWithChildren<{ className?: string }>
> = ({ children, className, ...props }) => (
  <li {...props} className={cn("my-2", className)}>
    {children}
  </li>
);
