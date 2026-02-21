"use client";

import {
    Calculator,
    FileText,
    Gavel,
    Library,
    ShieldCheck,
    Zap
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Sistemas de Cálculo Pro",
        description: "Algoritmos de alta precisión para Personas Físicas, Morales y RESICO, sincronizados con la normativa 2026.",
        icon: <Calculator className="w-6 h-6" />,
        items: ["Algoritmos ISR/IVA", "Motor RESICO", "Sincronización CFDI"]
    },
    {
        title: "Infraestructura Documental",
        description: "Activos digitales, formatos legales y corporativos optimizados para una respuesta operativa inmediata.",
        icon: <FileText className="w-6 h-6" />,
        items: ["Cartas Porte", "Actas de Asamblea", "Contratos Civiles"]
    },
    {
        title: "Protocolos Jurídicos",
        description: "Compilación técnica exhaustiva de legislación, criterios y jurisprudencia aplicada de alto rendimiento.",
        icon: <Library className="w-6 h-6" />,
        items: ["Marco Jurídico 2026", "Defensa Fiscal", "Criterios SAT"]
    },
    {
        title: "Activos Mercantiles",
        description: "Plantillas de contratos y acuerdos redactados bajo estándares internacionales de consultoría.",
        icon: <Gavel className="w-6 h-6" />,
        items: ["Protección Legal", "Mercantiles", "Relaciones Laborales"]
    },
    {
        title: "Garantía de Automatización",
        description: "Validación profesional y soporte técnico avanzado para la implementación de flujos fiscales.",
        icon: <ShieldCheck className="w-6 h-6" />,
        items: ["Validación Experta", "Flujos de Soporte"]
    },
    {
        title: "IA & Integración",
        description: "Arquitectura preparada para la ingesta de datos y automatización de procesos mediante IA.",
        icon: <Zap className="w-6 h-6" />,
        items: ["Webhooks Sync", "Data Ingestion Ready"]
    }
];

export default function FeatureGrid() {
    return (
        <section className="py-24" id="contenido">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16">
                    <span className="text-accent text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Sistemas 2026</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.02em] text-center text-glow">
                        Ecosistema de <span className="text-accent">Infraestructura</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="glass-card p-8 group relative overflow-hidden flex flex-col justify-between"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                {feature.icon}
                            </div>

                            <div>
                                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-accent mb-6 shadow-glow transition-all group-hover:bg-accent group-hover:text-white">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 tracking-[-0.02em]">{feature.title}</h3>
                                <p className="text-primary-muted text-sm leading-relaxed mb-6">
                                    {feature.description}
                                </p>
                            </div>

                            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2">
                                {feature.items.map((item, i) => (
                                    <span key={i} className="text-[10px] uppercase font-bold tracking-widest text-accent/80 bg-accent/10 px-2 py-1 rounded">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
