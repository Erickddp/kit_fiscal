"use client";

import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

export default function CalculatorPreview() {
    return (
        <div className="my-8 glass-card border-accent/20 p-6 flex items-center gap-6 group hover:shadow-glow transition-all duration-300">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                <Calculator className="w-8 h-8" />
            </div>
            <div>
                <h4 className="text-white font-bold tracking-tight mb-1">Módulo de Cálculo Activo</h4>
                <p className="text-primary-muted text-sm">Este es un componente de React vivo dentro de un documento técnico.</p>
                <div className="mt-4 flex gap-2">
                    <div className="h-1 w-24 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-accent"
                            initial={{ width: 0 }}
                            animate={{ width: "70%" }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                    <span className="text-[10px] font-mono text-accent">SYNC_OK</span>
                </div>
            </div>
        </div>
    );
}
