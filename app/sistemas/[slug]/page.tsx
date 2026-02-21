import { useMDXComponents } from '@/mdx-components'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import matter from 'gray-matter'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

export async function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), 'content/sistemas')
    if (!fs.existsSync(postsDirectory)) return []

    const files = fs.readdirSync(postsDirectory)
    return files
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => ({
            slug: file.replace('.mdx', ''),
        }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = params
    const filePath = path.join(process.cwd(), `content/sistemas/${slug}.mdx`)

    if (!fs.existsSync(filePath)) return {}

    const source = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(source)

    return {
        title: `${data.title} | EDDP Sistemas`,
        description: data.description,
    }
}

export default async function SistemaPage({ params }: { params: { slug: string } }) {
    const { slug } = params
    const filePath = path.join(process.cwd(), `content/sistemas/${slug}.mdx`)

    if (!fs.existsSync(filePath)) {
        notFound()
    }

    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { content, data } = matter(fileContent)
    const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL || '#'

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-32 pb-24 bg-background">
                <article className="container mx-auto px-6 max-w-4xl">
                    <div className="glass-card p-10 md:p-16 border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

                        {/* Dynamic Post Header from Frontmatter */}
                        <div className="mb-12">
                            <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Documentación Técnica</span>
                            <h1 className="text-4xl md:text-6xl font-black text-white tracking-[-0.04em] mb-6 leading-tight text-glow">{data.title}</h1>
                            <p className="text-xl text-primary-muted font-medium">{data.description}</p>
                        </div>

                        <div className="mb-16 prose-eddp">
                            <MDXRemote
                                source={content}
                                components={useMDXComponents({})}
                            />
                        </div>

                        {/* Navigation Footer */}
                        <div className="pt-12 border-t border-white/10 flex flex-col items-start gap-8">
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-[11px] font-bold text-accent uppercase tracking-[0.2em] hover:text-white transition-colors group"
                            >
                                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                                Regresar a la Biblioteca
                            </Link>

                            <div className="p-6 bg-accent/5 rounded-xl border border-accent/10 w-full">
                                <p className="text-xs text-primary-muted font-bold uppercase tracking-widest mb-2">Estado del Activo</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-[10px] text-white font-mono uppercase tracking-[0.1em]">Protocolo_Validado_2026_OK</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer checkoutUrl={checkoutUrl} />
        </>
    )
}
