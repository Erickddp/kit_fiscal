import type { MDXComponents } from 'mdx/types'

import CalculatorPreview from '@/components/CalculatorPreview'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Custom React Components
        CalculatorPreview,
        // Allows customizing built-in components, e.g. to add styling.
        h1: ({ children }) => <h1 className="text-4xl font-black text-white mb-6 tracking-tight text-glow">{children}</h1>,
        h2: ({ children }) => <h2 className="text-3xl font-bold text-white mt-12 mb-6 tracking-tight border-b border-white/10 pb-2">{children}</h2>,
        p: ({ children }) => <p className="text-primary-muted leading-relaxed mb-6">{children}</p>,
        ul: ({ children }) => <ul className="list-disc list-inside mb-6 space-y-2 text-primary-muted">{children}</ul>,
        code: ({ children }) => <code className="bg-white/5 border border-white/10 rounded px-1.5 py-0.5 font-mono text-accent text-sm">{children}</code>,
        blockquote: ({ children }) => <blockquote className="border-l-4 border-accent pl-6 py-2 italic bg-accent/5 my-8 rounded-r-xl">{children}</blockquote>,
        ...components,
    }
}
