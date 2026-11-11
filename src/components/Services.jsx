import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Cpu, Database, LineChart, Sparkles } from 'lucide-react';

export default function Services({ onSelectService }) {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics',
      image: '/images/service-predictive.png',
      description: 'Forecast trends and make data-driven decisions with our advanced ML models.',
      icon: LineChart,
      tags: ['Time Series', 'Deep Learning', 'Churn Prediction'],
      features: [
        'Automated time-series forecasting with 99.4% historical fit',
        'Customer lifetime value & retention risk modelling',
        'Anomaly detection across millions of financial transactions',
        'Real-time automated dashboard feeds & executive reporting',
      ],
      techStack: ['PyTorch', 'XGBoost', 'Prophet', 'Weights & Biases']
    },
    {
      id: 'ai-consulting',
      title: 'AI Consulting',
      image: '/images/service-consulting.png',
      description: 'Expert guidance on implementing AI solutions for your business needs.',
      icon: Cpu,
      tags: ['LLM Orchestration', 'GenAI', 'Architecture Audit'],
      features: [
        'Enterprise AI readiness audit & strategic roadmap design',
        'Custom Fine-Tuning & Retrieval-Augmented Generation (RAG)',
        'Governance, compliance, and ethical safety guardrails',
        'Proof-of-concept rapid prototyping within 2 weeks',
      ],
      techStack: ['OpenAI / Gemini', 'LangChain', 'LlamaIndex', 'Pinecone']
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering',
      image: '/images/service-engineering.png',
      description: 'Build robust data pipelines and infrastructure for ML operations.',
      icon: Database,
      tags: ['ETL / ELT', 'Lakehouse', 'Streaming MLOps'],
      features: [
        'High-throughput real-time Kafka event stream architecture',
        'Scalable data lakehouse deployment with Databricks & Snowflake',
        'Automated schema migration & data validation pipelines',
        'CI/CD deployment for continuous model retraining',
      ],
      techStack: ['Apache Kafka', 'Databricks', 'Snowflake', 'dbt']
    },
  ];

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0A84FF]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141414] border border-[#262626] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#0A84FF]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
              Core Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Our Ultimate Set of Services for Your Ideas Implementation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            From raw data extraction to production-grade predictive intelligence, we empower organizations to lead their industries.
          </p>
        </div>

        {/* Services Cards Grid - Matching Figma card layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-[#141414] border border-[#262626] hover:border-[#0A84FF]/60 rounded-[36px] p-8 sm:p-10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:shadow-[#0A84FF]/15 hover:-translate-y-1"
              >
                {/* 3D Visual Asset */}
                <div className="relative w-full h-56 mb-8 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0A84FF]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="max-h-48 w-auto object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#0A84FF] transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-[#E6E6E6]/80 text-base leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-[#1C1C1C] border border-[#262626] text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Interactive Action Button */}
                <button
                  onClick={() => setActiveService(service)}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#0A84FF] hover:text-white bg-[#0A84FF]/10 hover:bg-[#0A84FF] border border-[#0A84FF]/30 px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Service Detail Modal */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-[#141414] border border-[#262626] rounded-3xl max-w-2xl w-full p-8 md:p-10 shadow-2xl overflow-hidden">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">{activeService.title}</h3>
                  <p className="text-sm text-[#0A84FF] font-medium">Enterprise Solution Blueprint</p>
                </div>
              </div>
              <button
                onClick={() => setActiveService(null)}
                className="text-white/60 hover:text-white p-2 rounded-xl bg-[#1C1C1C] border border-[#262626]"
              >
                ✕
              </button>
            </div>

            <p className="text-white/80 text-base mb-6 leading-relaxed">
              {activeService.description}
            </p>

            <div className="mb-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-3">
                Key Deliverables & Capabilities
              </h4>
              <ul className="space-y-2.5">
                {activeService.features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#0A84FF] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-3">
                Supported Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeService.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-[#1C1C1C] border border-[#262626] text-xs font-semibold text-white/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#262626]">
              <button
                onClick={() => setActiveService(null)}
                className="px-5 py-2.5 rounded-xl text-sm font-medium text-white/70 hover:text-white bg-[#1C1C1C]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const s = activeService;
                  setActiveService(null);
                  if (onSelectService) onSelectService(s.title);
                }}
                className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#0A84FF] hover:bg-[#0070E0] shadow-lg shadow-[#0A84FF]/30 cursor-pointer"
              >
                Request Solution
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
