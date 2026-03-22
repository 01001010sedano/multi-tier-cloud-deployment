import React from 'react';
import { FileText, Play, Github, Presentation, Code2, Server, Globe2, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center relative font-sans text-slate-800 selection:bg-blue-200"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-white/30 mix-blend-overlay"></div>

      {/* Navigation / Header */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="glass px-8 py-3 rounded-full flex items-center justify-between gap-8 shadow-lg">
          <div className="flex items-center gap-2 font-bold text-slate-700 tracking-tight">
            <CloudIcon /> LAMINA <span className="text-blue-600">CAPSTONE</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-semibold text-slate-600">
            <a href="#" className="hover:text-blue-600 transition-colors">Overview</a>
            <a href="#resources" className="hover:text-blue-600 transition-colors">Resources</a>
            <a href="https://d3d89fvb3x2vdi.cloudfront.net/architecture.png" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Architecture</a>
          </div>
          <a href="https://github.com/01001010sedano/multi-tier-cloud-deployment" target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors">
            View Source
          </a>
        </div>
      </nav>

      {/* Main Hero Container */}
      <main className="relative z-10 pt-36 pb-20 px-6 flex flex-col items-center">
        
        {/* Title Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 drop-shadow-sm leading-tight">
            Fast, Reliable Cloud Hosting <br/>
            <span className="font-serif italic font-normal text-slate-700">Built for Scale</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto font-medium mb-10 leading-relaxed drop-shadow-sm">
            Jane Sedano's Cloud Engineering Capstone. A production-grade multi-tier architecture deployed using Docker, Kubernetes, Terraform, and GitHub Actions CI/CD.
          </p>
          <a href="https://d3d89fvb3x2vdi.cloudfront.net/architecture.png" target="_blank" rel="noopener noreferrer" className="glass bg-white/40 hover:bg-white/60 text-blue-700 font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 inline-flex items-center gap-2">
            Explore Architecture <ArrowRight className="w-5 h-5"/>
          </a>
        </div>

        {/* Resources / Buttons Grid (Glassmorphism) */}
        <div id="resources" className="glass w-full max-w-5xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
          <div className="flex items-center justify-between mb-8 border-b border-slate-300/40 pb-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Code2 className="text-blue-600 w-7 h-7" /> Deliverables Dashboard
            </h2>
            <span className="text-sm font-semibold px-3 py-1 glass rounded-lg text-blue-700">All Systems Operational</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Portfolio Link */}
            <a href="https://d3d89fvb3x2vdi.cloudfront.net/Resume.pdf" target="_blank" rel="noopener noreferrer" className="glass p-6 rounded-2xl flex flex-col items-start gap-4 hover:bg-white/40 transition-all hover:shadow-lg group cursor-pointer">
              <div className="p-3 bg-blue-100/80 rounded-xl text-blue-600 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Cloud Portfolio</h3>
                <p className="text-sm text-slate-600 font-medium leading-snug">View my updated resume and cloud capabilities (PDF).</p>
              </div>
            </a>

            {/* PPT Link */}
            <a href="#" onClick={(e) => { e.preventDefault(); alert("Task: Upload your PPT to Google Drive and paste the link in App.jsx!"); }} className="glass p-6 rounded-2xl flex flex-col items-start gap-4 hover:bg-white/40 transition-all hover:shadow-lg group cursor-pointer">
              <div className="p-3 bg-orange-100/80 rounded-xl text-orange-600 group-hover:scale-110 transition-transform">
                <Presentation className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Presentation Deck</h3>
                <p className="text-sm text-slate-600 font-medium leading-snug">Access the final 13-week journey recap PowerPoint.</p>
              </div>
            </a>

            {/* Video Link */}
            <a href="#" onClick={(e) => { e.preventDefault(); alert("Task: Record a 3-minute video using screen sharing (OBS or Zoom), upload to YouTube/Drive, and paste the link here!"); }} className="glass p-6 rounded-2xl flex flex-col items-start gap-4 hover:bg-white/40 transition-all hover:shadow-lg group cursor-pointer">
              <div className="p-3 bg-rose-100/80 rounded-xl text-rose-600 group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Demo Video</h3>
                <p className="text-sm text-slate-600 font-medium leading-snug">Watch the system deployment and observability in action.</p>
              </div>
            </a>

            {/* GitHub Link */}
            <a href="https://github.com/01001010sedano/multi-tier-cloud-deployment" target="_blank" rel="noopener noreferrer" className="glass p-6 rounded-2xl flex flex-col items-start gap-4 hover:bg-white/40 transition-all hover:shadow-lg group cursor-pointer">
              <div className="p-3 bg-slate-200/80 rounded-xl text-slate-700 group-hover:scale-110 transition-transform">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Source Code</h3>
                <p className="text-sm text-slate-600 font-medium leading-snug">IaC scripts, Dockerfiles, and K8s resources.</p>
              </div>
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-300/40 flex flex-wrap justify-center gap-8 text-sm font-semibold text-slate-600">
             <span className="flex items-center gap-2"><Globe2 className="w-4 h-4"/> Terraform IaC</span>
             <span className="flex items-center gap-2"><Server className="w-4 h-4"/> Docker / k3s</span>
             <span className="flex items-center gap-2"><CloudIcon className="w-4 h-4 text-blue-600"/> Prometheus / Grafana</span>
          </div>
        </div>

      </main>
    </div>
  );
}

function CloudIcon({ className = "" }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.1384 20.1948 10.2038 17.8864 10.0211C17.3719 6.6455 14.4373 4 11 4C7.13401 4 4 7.13401 4 11C4 11.2335 4.01138 11.464 4.03348 11.6905C2.3168 12.269 1 13.9018 1 15.8C1 18.1196 2.8804 20 5.2 20H15.5"/>
    </svg>
  );
}

export default App;
