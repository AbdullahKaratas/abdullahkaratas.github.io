import { useState } from 'react';
import { cvDataDE, cvDataEN, CVData } from '@/data/cvData';
import { Mail, Github, MapPin, ExternalLink, ArrowRight, CheckCircle2, Clock } from 'lucide-react';

export default function CV() {
  const [language, setLanguage] = useState<'de' | 'en'>('en');
  const cvData: CVData = language === 'de' ? cvDataDE : cvDataEN;

  const t = {
    de: {
      role: 'Enterprise Architect',
      subtitle: 'Cloud-Architekturen · Technische Führung · Digitale Transformation',
      about: 'Kurzprofil',
      aboutText: 'Enterprise Architect mit Promotion in AI/Machine Learning. Aktuell verantwortlich für Cloud-Architekturen und technische Führung. Besonderes Interesse an der Anwendung von AI in Enterprise-Kontexten.',
      onThisPage: 'Auf dieser Seite',
      onThisPageText: 'Berufserfahrung, ausgewählte Projekte, Zertifizierungen und Kompetenzen.',
      projects: 'Ausgewählte Projekte',
      experience: 'Berufserfahrung',
      education: 'Ausbildung',
      skills: 'Kompetenzen',
      certifications: 'Zertifizierungen',
      contact: 'Kontakt',
      contactText: 'Interesse an einem Austausch? Ich freue mich über Ihre Nachricht.',
      sendEmail: 'E-Mail senden',
      viewProfile: 'GitHub Profil',
      present: 'Heute',
      viewProject: 'Projekt ansehen',
      inDevelopment: 'In Entwicklung',
      certified: 'Zertifiziert',
      scheduled: 'Termin steht',
      planned: 'In Vorbereitung',
    },
    en: {
      role: 'Enterprise Architect',
      subtitle: 'Cloud Architecture · Technical Leadership · Digital Transformation',
      about: 'Profile',
      aboutText: 'Enterprise Architect with a PhD in AI/Machine Learning. Currently responsible for cloud architectures and technical leadership. Particular interest in applying AI in enterprise contexts.',
      onThisPage: 'On this page',
      onThisPageText: 'Work experience, selected projects, certifications, and skills.',
      projects: 'Selected Projects',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      certifications: 'Certifications',
      contact: 'Contact',
      contactText: 'Interested in connecting? I look forward to hearing from you.',
      sendEmail: 'Send Email',
      viewProfile: 'GitHub Profile',
      present: 'Present',
      viewProject: 'View Project',
      inDevelopment: 'In Development',
      certified: 'Certified',
      scheduled: 'Scheduled',
      planned: 'Preparing',
    }
  }[language];

  const projects = [
    {
      title: language === 'de' ? 'Cloud-Referenzarchitektur' : 'Cloud Reference Architecture',
      description: language === 'de'
        ? 'Entwicklung einer unternehmensweiten Cloud-Plattform mit Kubernetes, CI/CD und IT-Governance. Skalierbare Infrastruktur für hunderte von Entwicklerteams.'
        : 'Development of an enterprise-wide cloud platform with Kubernetes, CI/CD, and IT governance. Scalable infrastructure for hundreds of development teams.',
      tags: ['Kubernetes', 'CI/CD', 'Architecture'],
      type: 'professional'
    },
    {
      title: language === 'de' ? 'AI-gestützte Prozessoptimierung' : 'AI-Powered Process Optimization',
      description: language === 'de'
        ? 'Deep Learning und prädiktive Modelle zur Geschäftsprozessoptimierung. Automatisierte Entscheidungssysteme mit Neural Networks und Klassifikation.'
        : 'Deep Learning and predictive models for business process optimization. Automated decision systems using neural networks and classification.',
      tags: ['Deep Learning', 'AI/ML', 'Python'],
      type: 'professional'
    },
    {
      title: 'Trading Crew',
      description: language === 'de'
        ? 'Open-Source Multi-Agent AI System. Autonome LLM-Agenten (Bull vs. Bear) debattieren Marktpositionen, ein AI-Richter entscheidet, Risiko-Agenten generieren Strategien.'
        : 'Open-source Multi-Agent AI system. Autonomous LLM agents (Bull vs. Bear) debate market positions, an AI judge decides, risk agents generate strategies.',
      tags: ['AI Agents', 'LLM', 'Python'],
      link: 'https://github.com/abdullahkaratas/trading-crew',
      type: 'personal'
    },
    {
      title: 'Echo',
      description: language === 'de'
        ? 'AI-gestützte App für Familien-Erinnerungen. LLM optimiert Sprachnachrichten, generiert Folgefragen und hilft, wichtige Geschichten zu bewahren.'
        : 'AI-powered family memories app. LLM optimizes voice messages, generates follow-up questions, and helps preserve meaningful stories.',
      tags: ['Flutter', 'LLM', 'AI'],
      inDev: true,
      type: 'personal'
    },
  ];

  const certifications = [
    { code: 'AZ-104', name: 'Azure Administrator', status: 'certified' as const },
    { code: 'AZ-305', name: 'Azure Solutions Architect', status: 'scheduled' as const, date: 'Feb 2026' },
    { code: 'CKA', name: 'Kubernetes Administrator', status: 'planned' as const, date: 'Mar 2026' },
    { code: 'TOGAF', name: 'Enterprise Architecture', status: 'planned' as const, date: 'Mar 2026' },
  ];

  const skills = [
    { category: 'Architecture', items: ['Enterprise Architecture', 'Cloud Native', 'Microservices', 'Domain-Driven Design'] },
    { category: 'Cloud & Infrastructure', items: ['Kubernetes', 'Docker', 'CI/CD', 'Azure', 'Multi-Cloud'] },
    { category: 'Development', items: ['Python', 'Java', 'Go', 'TypeScript', 'React'] },
    { category: 'AI & Analytics', items: ['Machine Learning', 'TensorFlow', 'Predictive Analytics'] },
    { category: 'Methods', items: ['Scrum', 'SAFe', 'Event Storming', 'Architecture Reviews'] },
    { category: 'Leadership', items: ['Team Leadership', 'Stakeholder Management', 'Technical Strategy'] },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors">
              ↑ Top
            </a>

            <nav className="flex items-center gap-8">
              <div className="hidden md:flex items-center gap-8 text-sm">
                <a href="#projects" className="text-neutral-500 hover:text-neutral-900 transition-colors">
                  {t.projects}
                </a>
                <a href="#experience" className="text-neutral-500 hover:text-neutral-900 transition-colors">
                  {t.experience}
                </a>
                <a href="#skills" className="text-neutral-500 hover:text-neutral-900 transition-colors">
                  {t.skills}
                </a>
                <a href="#contact" className="text-neutral-500 hover:text-neutral-900 transition-colors">
                  {t.contact}
                </a>
              </div>

              <div className="flex items-center border border-neutral-200 rounded-full overflow-hidden text-sm">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 transition-colors ${
                    language === 'en'
                      ? 'bg-neutral-900 text-white'
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('de')}
                  className={`px-3 py-1.5 transition-colors ${
                    language === 'de'
                      ? 'bg-neutral-900 text-white'
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  DE
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
              Dr. Abdullah Karatas
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-2">
              {t.role}
            </p>
            <p className="text-neutral-400 mb-6">
              {t.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm mb-8">
              <a
                href={`mailto:${cvData.personalInfo.email}`}
                className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                <Mail className="h-4 w-4" />
                {cvData.personalInfo.email}
              </a>
              <a
                href={cvData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>

            <div className="pt-6 border-t border-neutral-200">
              <p className="text-sm text-neutral-400">
                <span className="font-medium text-neutral-500">{t.onThisPage}:</span>{' '}
                {t.onThisPageText}
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-neutral-50 py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-3">
                {t.about}
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                {t.aboutText}
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-10">
            {t.projects}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group p-6 bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-neutral-700">
                    {project.title}
                  </h3>
                  {project.inDev && (
                    <span className="text-xs px-2 py-1 bg-amber-50 text-amber-700 rounded-full whitespace-nowrap">
                      {t.inDevelopment}
                    </span>
                  )}
                </div>

                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs px-2.5 py-1 bg-neutral-100 text-neutral-600 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-neutral-400 hover:text-neutral-900 transition-colors ml-4"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-neutral-50 py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-10">
              {t.certifications}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="p-5 bg-white border border-neutral-200 rounded-xl"
                >
                  <div className="text-lg font-semibold text-neutral-900 mb-1">
                    {cert.code}
                  </div>
                  <div className="text-sm text-neutral-500 mb-3">
                    {cert.name}
                  </div>
                  <div className={`flex items-center gap-1.5 text-xs ${
                    cert.status === 'certified' ? 'text-emerald-600' :
                    cert.status === 'scheduled' ? 'text-blue-600' : 'text-neutral-500'
                  }`}>
                    {cert.status === 'certified' ? (
                      <>
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        {t.certified}
                      </>
                    ) : cert.status === 'scheduled' ? (
                      <>
                        <Clock className="h-3.5 w-3.5" />
                        {t.scheduled} · {cert.date}
                      </>
                    ) : (
                      <>
                        <Clock className="h-3.5 w-3.5" />
                        {t.planned} · {cert.date}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-10">
            {t.experience}
          </h2>

          <div className="space-y-12">
            {cvData.experience.map((exp, i) => (
              <div key={i} className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
                <div className="text-sm text-neutral-400">
                  {exp.period}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-neutral-500 mb-4">
                    <span>{exp.company}</span>
                    <span className="text-neutral-300">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.slice(0, 4).map((resp, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-neutral-600">
                        <ArrowRight className="h-4 w-4 text-neutral-300 flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="bg-neutral-50 py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-10">
              {t.education}
            </h2>

            <div className="space-y-8">
              {cvData.education.map((edu, i) => (
                <div key={i} className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-8">
                  <div className="text-sm text-neutral-400">
                    {edu.period}
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">{edu.degree}</h3>
                    <p className="text-sm text-neutral-500">{edu.institution}</p>
                    {edu.description && (
                      <p className="text-sm text-neutral-400 mt-2">{edu.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-10">
            {t.skills}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((group, i) => (
              <div key={i}>
                <h3 className="text-sm font-medium text-neutral-900 mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, j) => (
                    <span
                      key={j}
                      className="text-sm px-3 py-1.5 bg-neutral-100 text-neutral-600 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-neutral-900 text-white py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
                {t.contact}
              </h2>
              <p className="text-xl md:text-2xl text-neutral-300 mb-8">
                {t.contactText}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={`mailto:${cvData.personalInfo.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-neutral-900 rounded-full font-medium hover:bg-neutral-100 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {t.sendEmail}
                </a>
                <a
                  href={cvData.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-700 text-white rounded-full font-medium hover:border-neutral-500 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  {t.viewProfile}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-100 py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between text-sm text-neutral-400">
            <span>© {new Date().getFullYear()} Abdullah Karatas</span>
            <span>Enterprise Architect</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
