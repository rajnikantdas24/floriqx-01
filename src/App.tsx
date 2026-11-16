import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  BrainCircuit,
  Check,
  ChevronRight,
  Clock3,
  Code2,
  Cpu,
  Facebook,
  Globe2,
  GraduationCap,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Play,
  Quote,
  Send,
  Sparkles,
  Target,
  Users,
  X,
  Zap,
} from 'lucide-react';

const logo = '/assets/images/image_774d2009.jpg';
const heroImage = 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const teamImage = 'https://images.pexels.com/photos/9301835/pexels-photo-9301835.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const learningImage = 'https://images.pexels.com/photos/16094043/pexels-photo-16094043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

type Icon = typeof Code2;
type PageKey = 'home' | 'services' | 'education' | 'about' | 'portfolio' | 'contact';

const navItems: { label: string; page: PageKey }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Services', page: 'services' },
  { label: 'AI Education', page: 'education' },
  { label: 'About', page: 'about' },
  { label: 'Case Studies', page: 'portfolio' },
];

const serviceItems: { icon: Icon; title: string; text: string; accent: string }[] = [
  { icon: Code2, title: 'Custom Software', text: 'Digital products engineered around your ambitions, from first prototype to lasting platform.', accent: 'blue' },
  { icon: BrainCircuit, title: 'AI Integration', text: 'Turn complex AI capabilities into practical, secure workflows that move your business forward.', accent: 'cyan' },
  { icon: Sparkles, title: 'AI Tools & Solutions', text: 'Purpose-built intelligent tools that give teams sharper insights and more time to do meaningful work.', accent: 'sky' },
  { icon: GraduationCap, title: 'AI Education', text: 'Clear, hands-on learning experiences that make the future of technology feel accessible.', accent: 'navy' },
];

const footerLinks = [
  { label: 'Services', page: 'services' as PageKey },
  { label: 'AI Education', page: 'education' as PageKey },
  { label: 'Our Story', page: 'about' as PageKey },
  { label: 'Case Studies', page: 'portfolio' as PageKey },
  { label: 'Contact', page: 'contact' as PageKey },
];

function getPage(): PageKey {
  const hash = window.location.hash.replace('#/', '').split('?')[0];
  return ['services', 'education', 'about', 'portfolio', 'contact'].includes(hash) ? hash as PageKey : 'home';
}

function App() {
  const [page, setPage] = useState<PageKey>(getPage);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleNavigation = () => {
      setPage(getPage());
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleNavigation);
    return () => window.removeEventListener('hashchange', handleNavigation);
  }, []);

  const navigate = (nextPage: PageKey) => {
    window.location.hash = nextPage === 'home' ? '/' : `/${nextPage}`;
  };

  return (
    <div className="app-shell">
      <Header page={page} navigate={navigate} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        {page === 'home' && <Home navigate={navigate} />}
        {page === 'services' && <Services navigate={navigate} />}
        {page === 'education' && <Education navigate={navigate} />}
        {page === 'about' && <About navigate={navigate} />}
        {page === 'portfolio' && <Portfolio navigate={navigate} />}
        {page === 'contact' && <Contact />}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}

function Header({ page, navigate, menuOpen, setMenuOpen }: { page: PageKey; navigate: (page: PageKey) => void; menuOpen: boolean; setMenuOpen: (open: boolean) => void }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <button className="brand" onClick={() => navigate('home')} aria-label="FloriQX home">
          <span className="brand-symbol"><span /><span /><span /></span>
          <span className="brand-word">Flori<span>Q</span>X</span>
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => <button className={page === item.page ? 'active' : ''} key={item.page} onClick={() => navigate(item.page)}>{item.label}</button>)}
          <button className="nav-cta" onClick={() => navigate('contact')}>Let&apos;s talk <ArrowRight size={16} /></button>
        </nav>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

function PageBanner({ eyebrow, title, text, image = heroImage }: { eyebrow: string; title: string; text: string; image?: string }) {
  return (
    <section className="page-banner">
      <div className="banner-image" style={{ backgroundImage: `linear-gradient(90deg, rgba(5, 20, 55, .98) 0%, rgba(5, 20, 55, .85) 45%, rgba(5, 20, 55, .22) 100%), url(${image})` }} />
      <div className="container banner-content">
        <div className="eyebrow light"><span /> {eyebrow}</div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className="banner-grid" />
    </section>
  );
}

function SectionHeading({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return <div className={`section-heading ${center ? 'center' : ''}`}><div className="eyebrow"><span /> {eyebrow}</div><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function Button({ children, onClick, variant = 'primary', icon = true }: { children: ReactNode; onClick?: () => void; variant?: 'primary' | 'outline' | 'text'; icon?: boolean }) {
  return <button className={`button ${variant}`} onClick={onClick}>{children}{icon && <ArrowRight size={17} />}</button>;
}

function Home({ navigate }: { navigate: (page: PageKey) => void }) {
  return <>
    <section className="hero">
      <div className="hero-glow" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span /> FloriQX Technologies</div>
          <h1>Intelligence that <em>moves</em> you forward.</h1>
          <p className="hero-lead">We build intelligent digital experiences, empower teams with AI, and turn ambitious ideas into meaningful momentum.</p>
          <div className="hero-actions"><Button onClick={() => navigate('contact')}>Start a conversation</Button><Button variant="text" onClick={() => navigate('services')}>Explore our services <ChevronRight size={17} /></Button></div>
          <div className="hero-proof"><span className="proof-avatars"><i>R</i><i>A</i><i>S</i></span><span>Building what&apos;s next<br /><strong>with teams like yours.</strong></span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          <div className="hero-image-wrap"><img src={heroImage} alt="Abstract AI technology network" /><div className="hero-image-shade" /></div>
          <div className="hero-card top-card"><Sparkles size={18} /><div><strong>AI, made useful.</strong><small>Practical. Human. Yours.</small></div></div>
          <div className="hero-card bottom-card"><span className="live-dot" /><span><strong>Systems online</strong><small>Ready to elevate</small></span><BarChart3 size={20} /></div>
          <div className="hero-logo"><img src={logo} alt="FloriQX logo" /></div>
        </div>
      </div>
      <div className="hero-scroll"><span>Scroll to explore</span><i /></div>
    </section>

    <section className="intro section-pad"><div className="container intro-grid"><div className="intro-mark"><div className="mark-grid">{Array.from({ length: 9 }).map((_, i) => <i key={i} className={`sq sq-${i}`} />)}</div><span>FQ</span></div><div><SectionHeading eyebrow="The FloriQX approach" title="Technology with a human point of view." text="FloriQX brings together curious minds, thoughtful design, and emerging technology to help organizations grow with clarity. We don't just ship software. We create the confidence to take the next step." /><Button variant="text" onClick={() => navigate('about')}>Discover our story <ChevronRight size={17} /></Button></div></div></section>

    <section className="services-preview section-pad soft-bg"><div className="container"><div className="split-heading"><SectionHeading eyebrow="What we do" title="Big thinking. Built beautifully." text="From a bold first idea to a system that scales, we bring the right mix of strategy, technology, and education." /><Button variant="outline" onClick={() => navigate('services')}>View all services</Button></div><div className="service-grid">{serviceItems.map((service) => <ServiceCard key={service.title} {...service} onClick={() => navigate('services')} />)}</div></div></section>

    <section className="feature-section section-pad"><div className="container feature-grid"><div className="feature-image"><img src={learningImage} alt="Person learning with AI software" /><div className="image-caption"><span>01</span><strong>Learn for the future</strong><small>Make AI work for you.</small></div></div><div className="feature-copy"><div className="eyebrow"><span /> Learn. Apply. Elevate.</div><h2>The future belongs to the curious.</h2><p>Our education programs make AI approachable, actionable, and relevant — whether you&apos;re starting from scratch or scaling your expertise.</p><ul className="check-list"><li><Check size={17} /> Live, practical workshops</li><li><Check size={17} /> Self-paced learning paths</li><li><Check size={17} /> Digital playbooks &amp; eBooks</li></ul><Button onClick={() => navigate('education')}>Explore AI education</Button></div></div></section>

    <section className="quote-section section-pad"><div className="container"><div className="quote-inner"><Quote size={36} /><blockquote>“FloriQX helped us see a clearer path from a complex idea to a product our customers love.”</blockquote><div className="quote-person"><span className="person-avatar">NS</span><span><strong>Neha Sharma</strong><small>Founder, Northstar Labs</small></span></div></div></div></section>
    <CTA navigate={navigate} />
  </>;
}

function ServiceCard({ icon: IconComponent, title, text, accent, onClick }: { icon: Icon; title: string; text: string; accent: string; onClick: () => void }) {
  return <button className="service-card" onClick={onClick}><div className={`service-icon ${accent}`}><IconComponent size={24} /></div><h3>{title}</h3><p>{text}</p><span className="card-link">Learn more <ArrowUpRightIcon /></span></button>;
}
function ArrowUpRightIcon() { return <ArrowRight size={15} />; }

function Services({ navigate }: { navigate: (page: PageKey) => void }) {
  const detailed = [
    { number: '01', icon: Code2, title: 'Custom software development', text: 'Digital products that feel as good as they perform. We partner with you from strategy and UX through engineering and evolution.', points: ['Product strategy & discovery', 'Web and mobile applications', 'Cloud architecture & platforms'], accent: 'blue' },
    { number: '02', icon: BrainCircuit, title: 'AI integration services', text: 'Move past the AI hype with systems that solve real problems. We connect the right models to the right moments in your business.', points: ['AI readiness & opportunity mapping', 'Intelligent workflow automation', 'Responsible AI implementation'], accent: 'cyan' },
    { number: '03', icon: Sparkles, title: 'AI tools & solutions', text: 'Give your teams a smarter starting point with focused tools designed around the way they actually work.', points: ['Internal copilots & assistants', 'Data intelligence & insights', 'Custom generative AI tools'], accent: 'sky' },
    { number: '04', icon: GraduationCap, title: 'Education & enablement', text: 'Build lasting capability, not just short-term excitement. Our learning experiences turn curiosity into confident action.', points: ['Team training & workshops', 'Executive AI briefings', 'Courses, guides & eBooks'], accent: 'navy' },
  ];
  return <><PageBanner eyebrow="Our capabilities" title="Technology that earns its place." text="We combine sharp strategy, thoughtful design, and serious engineering to create progress you can feel." /><section className="section-pad"><div className="container"><div className="service-detail-list">{detailed.map((item) => <article className="service-detail" key={item.number}><div className="detail-number">{item.number}</div><div className={`service-icon ${item.accent}`}><item.icon size={26} /></div><div className="detail-main"><h2>{item.title}</h2><p>{item.text}</p><ul className="mini-list">{item.points.map(point => <li key={point}><Check size={15} />{point}</li>)}</ul></div><button className="circle-arrow" onClick={() => navigate('contact')} aria-label={`Discuss ${item.title}`}><ArrowRight size={20} /></button></article>)}</div></div></section><CTA navigate={navigate} /></>;
}

function Education({ navigate }: { navigate: (page: PageKey) => void }) {
  const courses = [{ title: 'AI essentials for modern teams', level: 'Beginner · 4 weeks', duration: '12 lessons', color: 'blue' }, { title: 'Prompting with purpose', level: 'Intermediate · 2 weeks', duration: '8 lessons', color: 'cyan' }, { title: 'Build your AI advantage', level: 'Leaders · 1 day', duration: 'Live workshop', color: 'navy' }];
  return <><PageBanner eyebrow="The learning studio" title="Make the future feel familiar." text="Practical education for people who want to understand AI, use it well, and lead with confidence." image={learningImage} /><section className="section-pad"><div className="container"><SectionHeading eyebrow="Learn your way" title="A clearer path into AI." text="No jargon. No hype. Just relevant knowledge, thoughtful guidance, and the confidence to apply what you learn." /><div className="course-grid">{courses.map((course, i) => <article className="course-card" key={course.title}><div className={`course-art ${course.color}`}><span>0{i + 1}</span><BrainCircuit size={40} /><div className="art-lines" /></div><div className="course-content"><span className="course-type">{i === 2 ? 'Workshop' : 'Online course'}</span><h3>{course.title}</h3><p>{course.level}</p><div className="course-meta"><span><Clock3 size={15} /> {course.duration}</span><button onClick={() => navigate('contact')}>View course <ArrowRight size={15} /></button></div></div></article>)}</div></div></section><section className="ebook-section section-pad soft-bg"><div className="container ebook-grid"><div className="ebook-copy"><div className="eyebrow"><span /> The digital shelf</div><h2>Ideas worth keeping close.</h2><p>Our concise eBooks and playbooks make complex topics easier to understand, share, and put into practice.</p><Button onClick={() => navigate('contact')}>Browse the collection</Button></div><div className="book-stack"><div className="book book-back"><span>THE AI<br />ADVANTAGE</span></div><div className="book book-front"><span className="book-kicker">FLORIQX FIELD GUIDE</span><strong>THE<br /><em>HUMAN</em><br />SIDE OF AI</strong><small>Practical notes for a changing world</small></div></div></div></section><CTA navigate={navigate} /></>;
}

function About({ navigate }: { navigate: (page: PageKey) => void }) {
  return <><PageBanner eyebrow="A little about us" title="Growth, with intelligence." text="FloriQX is a technology and education company from India, helping people and organizations build a more capable future." image={teamImage} /><section className="section-pad story-section"><div className="container story-grid"><div><SectionHeading eyebrow="Our story" title="We believe technology should open doors." text="FloriQX was born from a simple observation: the most powerful technology is the kind that makes people feel more capable, not less. Today, we work at the intersection of software, artificial intelligence, and education to turn that belief into practical progress." /><div className="stat-row"><div><strong>01</strong><span>Curiosity<br />first</span></div><div><strong>04</strong><span>Ways to<br />move forward</span></div><div><strong>∞</strong><span>Possibility<br />ahead</span></div></div></div><div className="story-visual"><img src={teamImage} alt="FloriQX style team collaboration" /><div className="story-note"><Target size={20} /><span><strong>Our north star</strong><small>Make progress feel possible.</small></span></div></div></div></section><section className="values-section section-pad soft-bg"><div className="container"><SectionHeading eyebrow="What FloriQX stands for" title="Our values keep us moving." center /><div className="values-grid"><Value icon={Sparkles} title="Stay curious" text="We ask better questions, keep learning, and remain open to a better way." /><Value icon={Users} title="Build together" text="The best work happens when different perspectives have room to shape the outcome." /><Value icon={Award} title="Make it matter" text="We focus on useful progress — the kind that creates real value for real people." /></div></div></section><CTA navigate={navigate} /></>;
}
function Value({ icon: IconComponent, title, text }: { icon: Icon; title: string; text: string }) { return <article className="value-card"><div className="value-icon"><IconComponent size={22} /></div><h3>{title}</h3><p>{text}</p></article>; }

function Portfolio({ navigate }: { navigate: (page: PageKey) => void }) {
  const cases = [{ category: 'AI integration', title: 'Turning customer signals into clear next steps.', result: '+42% faster decisions', color: 'case-blue', icon: BrainCircuit }, { category: 'Custom software', title: 'A better way for teams to learn together.', result: '3× engagement', color: 'case-cyan', icon: Layers3 }, { category: 'AI education', title: 'Making responsible AI a team sport.', result: '800+ people trained', color: 'case-navy', icon: GraduationCap }];
  return <><PageBanner eyebrow="Selected work" title="Proof, not promises." text="A few examples of what happens when ambitious people and intelligent technology work in sync." /><section className="section-pad"><div className="container"><SectionHeading eyebrow="Case studies" title="Progress, made visible." text="Every engagement is different. The goal is always the same: create something useful, durable, and ready for what comes next." /><div className="case-grid">{cases.map((item) => <article className={`case-card ${item.color}`} key={item.title}><div className="case-graphic"><item.icon size={42} /><div className="graphic-dots">{Array.from({ length: 12 }).map((_, i) => <i key={i} />)}</div></div><div className="case-content"><span>{item.category}</span><h3>{item.title}</h3><strong>{item.result}</strong><button onClick={() => navigate('contact')}>Read case study <ArrowRight size={16} /></button></div></article>)}</div></div></section><section className="metrics-band"><div className="container metrics-grid"><div><strong>12+</strong><span>Products launched</span></div><div><strong>24k</strong><span>Learning moments</span></div><div><strong>98%</strong><span>Would recommend us</span></div><div><strong>∞</strong><span>Ideas to explore</span></div></div></section><CTA navigate={navigate} /></>;
}

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };
  return <><PageBanner eyebrow="Start something meaningful" title="Let&apos;s make your next move." text="Tell us where you want to go. We&apos;ll bring the questions, the ideas, and a clear way forward." image={teamImage} /><section className="section-pad contact-section"><div className="container contact-grid"><div className="contact-info"><SectionHeading eyebrow="Get in touch" title="Good conversations start here." text="Whether you have a product idea, an AI question, or simply want to explore what&apos;s possible, we&apos;d love to hear from you." /><div className="contact-items"><a href="mailto:hello@floriqx.com"><span><Mail size={19} /></span><div><small>Email us</small><strong>hello@floriqx.com</strong></div></a><div><span><MapPin size={19} /></span><div><small>Based in</small><strong>India · Working globally</strong></div></div><div><span><Clock3 size={19} /></span><div><small>Response time</small><strong>Within 1–2 business days</strong></div></div></div></div><form className="contact-form" onSubmit={submit}>{sent ? <div className="form-success"><div className="success-icon"><Check size={28} /></div><h3>Message received.</h3><p>Thanks for reaching out. A member of our team will be in touch shortly.</p><button type="button" className="button outline" onClick={() => setSent(false)}>Send another message</button></div> : <><div className="form-heading"><MessageSquare size={20} /><span>Tell us a little about it</span></div><div className="form-row"><label>Your name<input required placeholder="Ananya Rao" /></label><label>Work email<input required type="email" placeholder="you@company.com" /></label></div><label>What can we help with?<select defaultValue=""><option value="" disabled>Select an option</option><option>Custom software</option><option>AI integration</option><option>AI education</option><option>Something else</option></select></label><label>Your message<textarea required placeholder="A few words about your goals, ideas, or challenge..." rows={5} /></label><button className="button" type="submit">Send message <Send size={16} /></button></>}</form></div></section><section className="map-placeholder"><div className="map-pattern" /><div className="map-pin"><MapPin size={23} /><span>FloriQX<br /><small>India &amp; beyond</small></span></div></section></>;
}

function CTA({ navigate }: { navigate: (page: PageKey) => void }) { return <section className="cta-section"><div className="cta-pattern" /><div className="container cta-inner"><div><div className="eyebrow light"><span /> Your next chapter</div><h2>Ready to move<br /><em>forward?</em></h2></div><div><p>Bring us your big question, your bold idea, or simply your curiosity.</p><Button variant="outline" onClick={() => navigate('contact')}>Let&apos;s talk</Button></div></div></section>; }

function Footer({ navigate }: { navigate: (page: PageKey) => void }) { return <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><button className="brand footer-logo" onClick={() => navigate('home')}><span className="brand-symbol"><span /><span /><span /></span><span className="brand-word">Flori<span>Q</span>X</span></button><p>Innovate. Educate. Elevate.</p><div className="socials"><a href="https://www.linkedin.com" aria-label="LinkedIn"><Linkedin size={16} /></a><a href="https://www.instagram.com" aria-label="Instagram"><Instagram size={16} /></a><a href="https://www.facebook.com" aria-label="Facebook"><Facebook size={16} /></a></div></div><div className="footer-links"><div><strong>Explore</strong>{footerLinks.slice(0, 3).map(link => <button key={link.page} onClick={() => navigate(link.page)}>{link.label}</button>)}</div><div><strong>Connect</strong>{footerLinks.slice(3).map(link => <button key={link.page} onClick={() => navigate(link.page)}>{link.label}</button>)}<a href="mailto:hello@floriqx.com">Email us</a></div></div><div className="footer-note"><Globe2 size={20} /><p>Ideas have no borders.<br /><strong>Neither should technology.</strong></p></div></div><div className="container footer-bottom"><span>© 2024 FloriQX Technologies</span><span>Built for a brighter, more capable future.</span></div></footer>; }

export default App;
