
import Link from "next/link";
import dynamic from 'next/dynamic';

const Hero3D = dynamic(() => import('@/components/Hero3D'), { 
  ssr: false,
  loading: () => <div className="h-full w-full bg-zinc-900 animate-pulse" />
});

export default function HomePage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="grid md:grid-cols-2 items-center gap-12">
        {/* Left column: Text content */}
        <div className="space-y-6">
          <h1 className="h1">Milán Lora</h1>
          <p className="lede">
            Designer and engineer building tangible, intuitive digital products and experiences.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/work" className="btn btn-primary">See work</Link>
            <Link href="/contact" className="btn">Contact</Link>
          </div>
          <div className="text-sm text-zinc-500">
            <p>Santo Domingo, DR / <a href="mailto:ml@milanlora.com" className="hover:text-accent">ml@milanlora.com</a></p>
          </div>
        </div>
        {/* Right column: 3D visualization */}
        <div className="md:col-span-1 h-full w-full min-h-[300px] md:min-h-0">
          <Hero3D />
        </div>
      </div>
    </div>
  );
}
