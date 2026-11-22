import type { MDXComponents } from 'mdx/types';
import { Figure } from '@/app/ui/figure';

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mt-6 mb-3 text-2xl font-bold tracking-tight text-balance">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-6 mb-3 text-xl font-bold tracking-tight text-balance">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-6 mb-3 text-lg font-bold tracking-tight text-balance">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-6 mb-3 text-lg font-medium tracking-tight text-balance">
      {children}
    </h4>
  ),
  h5: ({ children }) => (
    <h5 className="mt-6 mb-3 text-lg font-medium text-balance">{children}</h5>
  ),
  h6: ({ children }) => (
    <h6 className="mt-6 mb-3 text-lg font-semibold text-balance">{children}</h6>
  ),
  p: ({ children }) => <p className="mb-8 text-base/8">{children}</p>,

  Figure,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
