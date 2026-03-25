import { useEffect, useState, type CSSProperties } from 'react'
import './App.css'

const THEME_STORAGE_KEY = 'portfolio-theme'

const navLinks = [
  { label: 'Tentang', href: '#about' },
  { label: 'Kompetensi', href: '#skills' },
  { label: 'Karya', href: '#projects' },
  { label: 'Sertifikat', href: '#achievements' },
  { label: 'Kontak', href: '#contact' },
]

const heroHighlights = [
  { label: 'Coursework Builds', value: '08' },
  { label: 'UI Experiments', value: '14' },
  { label: 'Team Projects', value: '05' },
]

const strengths = [
  {
    title: "Filosofi Belajar",
    text: 'Mengusung semangat "Learning by Doing". Bagi saya, setiap tantangan di organisasi maupun akademik adalah peluang untuk mengasah logika, kreativitas, dan karakter yang berintegritas.',
  },
  {
    title: "Kekuatan Utama",
    text: "Public speaking, manajemen organisasi, dan berpikir kritis. Saya sangat memperhatikan detail dalam komunikasi, koordinasi tim, serta bagaimana sebuah solusi dapat berdampak bagi lingkungan.",
  },
  {
    title: "Fokus Saat Ini",
    text: "Mendalami seni diplomasi, strategi kolaborasi dalam tim internasional, serta pengembangan inovasi program yang mampu memecahkan masalah secara efektif dan sistematis.",
  },
];

const skills = [
  {
    name: "Public Speaking",
    description:
      "Penyampaian ide secara persuasif, artikulasi jelas, dan manajemen panggung.",
    level: 92,
    stage: "Advanced",
    mark: "PS",
  },
  {
    name: "Leadership",
    description:
      "Manajemen tim organisasi, koordinasi program, dan pengambilan keputusan.",
    level: 90,
    stage: "Advanced",
    mark: "LD",
  },
  {
    name: "Critical Thinking",
    description:
      "Analisis masalah secara mendalam dan pencarian solusi inovatif.",
    level: 88,
    stage: "Strong",
    mark: "CT",
  },
  {
    name: "Collaborative",
    description:
      "Bekerja efektif dalam tim lintas fungsi dan menghargai perbedaan pendapat.",
    level: 86,
    stage: "Strong",
    mark: "CL",
  },
  {
    name: "English Communication",
    description:
      "Kemampuan literasi dan percakapan untuk lingkungan internasional.",
    level: 82,
    stage: "Strong",
    mark: "EN",
  },
  {
    name: "Event Management",
    description:
      "Perencanaan acara, penyusunan timeline, dan eksekusi teknis lapangan.",
    level: 84,
    stage: "Strong",
    mark: "EM",
  },
  {
    name: "Problem Solving",
    description:
      "Menyelesaikan tantangan organisasi dengan pendekatan kreatif dan logis.",
    level: 80,
    stage: "Strong",
    mark: "PR",
  },
  {
    name: "Digital Literacy",
    description:
      "Pemanfaatan alat modern untuk produktivitas dan presentasi profesional.",
    level: 78,
    stage: "Growing",
    mark: "DL",
  },
];

const projects = [
  {
    title: "Lomba Olimpiade Bahasa Inggris",
    summary:
      "Berpartisipasi dalam kompetisi akademik tingkat regional/nasional untuk menguji kemampuan literasi, tata bahasa, dan pemahaman teks bahasa Inggris dalam lingkungan kompetitif.",
    stack: ["Literacy", "Grammar", "Critical Reading"],
    badge: "Kompetisi Akademik",
    accent:
      "linear-gradient(135deg, rgba(38, 211, 255, 0.95), rgba(53, 88, 255, 0.9))",
    demoUrl: "https://studyhub-demo.example.com",
    repoUrl: "https://github.com/example/studyhub-dashboard",
  },
];

const achievements = [
  {
    year: "2025",
    title: "Sertifikat Tahfiz 11 juz",
    // GANTI DENGAN PATH GAMBAR KAMU
    image: "/src/assets/sertif.png",
    text: "Penghargaan atas kemampuan komunikasi persuasif dan kepemimpinan dalam forum siswa internasional.",
  }
];

const socialLinks = [
  {
    label: "GitHub",
    handle: "@ashghianaya",
    href: "https://github.com/ashghianaya",
  },
  {
    label: "LinkedIn",
    handle: "/in/Kanaya-Ashghia-Rizwar",
    href: "https://linkedin.com",
  },
  {
    label: "Email",
    handle: "ashghianaya0412@gmail.com",
    href: "mailto:ashghianaya0412@gmail.com",
  },
];

type Theme = 'dark' | 'light'
type ThemeSource = 'system' | 'manual'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

function getStoredTheme(): Theme | null {
  if (typeof window === 'undefined') {
    return null
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
  return storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : null
}

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function getInitialTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme()
}

function getInitialThemeSource(): ThemeSource {
  return getStoredTheme() ? 'manual' : 'system'
}

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading" data-reveal>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" fill="currentColor" />
      <path
        d="M12 2.75v2.1M12 19.15v2.1M4.75 12h2.1M17.15 12h2.1M5.98 5.98l1.48 1.48M16.54 16.54l1.48 1.48M18.02 5.98l-1.48 1.48M7.46 16.54l-1.48 1.48"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M18 14.25A6.75 6.75 0 0 1 9.75 6a7.85 7.85 0 1 0 8.25 8.25Z"
        fill="currentColor"
      />
    </svg>
  )
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [themeSource, setThemeSource] = useState<ThemeSource>(getInitialThemeSource)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
  }, [theme])

  useEffect(() => {
    if (themeSource !== 'system') {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const syncTheme = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? 'dark' : 'light')
    }

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', syncTheme)
    } else {
      mediaQuery.addListener(syncTheme)
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', syncTheme)
      } else {
        mediaQuery.removeListener(syncTheme)
      }
    }
  }, [themeSource])

  useEffect(() => {
    if (themeSource === 'manual') {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
      return
    }

    window.localStorage.removeItem(THEME_STORAGE_KEY)
  }, [theme, themeSource])

  useEffect(() => {
    const revealTargets = document.querySelectorAll<HTMLElement>('[data-reveal]')

    if (!revealTargets.length) {
      return undefined
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      revealTargets.forEach((target) => target.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    revealTargets.forEach((target) => observer.observe(target))

    return () => observer.disconnect()
  }, [])

  const handleThemeToggle = () => {
    setThemeSource('manual')
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="portfolio-app">
      <header className="site-header" data-reveal>
        <div className="brand-lockup">
          <span className="brand-mark">
            <img
              src="/public/profil.jpeg"
              alt="Kanaya Logo"
              className="brand-avatar"
            />
          </span>
          <div>
            <a className="brand-name" href="#home">
              Kanaya Ashghia Rizwar
            </a>
            <p className="brand-role">Student Portfolio</p>
          </div>
        </div>

        <nav className="site-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={handleThemeToggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-pressed={theme === "light"}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span className="theme-toggle-track" aria-hidden="true">
              <span className="theme-toggle-icon">
                <SunIcon />
              </span>
              <span className="theme-toggle-icon">
                <MoonIcon />
              </span>
              <span className="theme-toggle-thumb">
                {theme === "dark" ? <MoonIcon /> : <SunIcon />}
              </span>
            </span>
            <span className="theme-toggle-label">
              {theme === "dark" ? "Dark mode" : "Light mode"}
            </span>
          </button>

          <a className="button button-primary header-cta" href="#contact">
            Contact Me
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section section" id="home">
          <div
            className="hero-copy"
            data-reveal
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
          >
            <span className="eyebrow">Student</span>
            <h1>Kanaya Ashghia Rizwar</h1>
            <p className="hero-description">
              Menjembatani akademik dan organisasi dengan semangat 'Learning by
              Doing'. Siswi kelas Pre-Internasional yang berkomitmen pada
              pertumbuhan diri, kreativitas, dan dampak sosial yang positif.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#skills">
                Lihat Kompetensi
              </a>
              <a className="button button-secondary" href="#about">
                Tentang Saya
              </a>
            </div>

            <div className="hero-highlights" aria-label="Highlights">
              {heroHighlights.map((item, index) => (
                <div
                  key={item.label}
                  className="highlight-card"
                  data-reveal
                  style={
                    {
                      "--reveal-delay": `${220 + index * 90}ms`,
                    } as CSSProperties
                  }
                >
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="hero-visual"
            aria-hidden="true"
            data-reveal
            style={{ "--reveal-delay": "220ms" } as CSSProperties}
          >
            <div className="orb orb-one"></div>
            <div className="orb orb-two"></div>

            <div className="hero-card main-portrait-card">
              <div className="availability-pill">
                <span className="availability-dot"></span>
                Terbuka untuk kolaborasi proyek & diskusi organisasi
              </div>

              <div className="portrait-shell">
                <div className="portrait-ring">
                  {/* Mengganti teks AR dengan tag IMG */}
                  <div className="portrait-core">
                    <img
                      src="/public/profil.jpeg" // GANTI DENGAN LINK FOTO KAMU
                      alt="Foto Profil AR"
                      className="profile-image"
                    />
                  </div>
                </div>
              </div>

              <div className="portrait-meta">
                <p className="meta-label">Fokus Utama</p>
                <strong>
                  Public Speaking, Manajemen Organisasi, dan Problem Solving
                  Kreatif
                </strong>
              </div>
            </div>

            <div className="hero-card floating-card bottom-card">
              <p className="meta-label">Lagi Seru Belajar</p>
              <strong>Analisis Masalah & Solusi</strong>
              <span>
                Melatih pola pikir kritis untuk memecahkan tantangan di
                organisasi lewat diskusi yang inklusif.
              </span>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <SectionHeading
            eyebrow="Tentang Saya"
            title="Portofolio akademik dengan identitas kuat dan visi yang jelas."
            description="Saya memandang setiap tanggung jawab di organisasi maupun akademik sebagai peluang untuk memberikan dampak. Fokus saya bukan hanya menyelesaikan tugas, tapi memastikan setiap hasil kerja terasa matang, kritis, dan bermanfaat."
          />

          <div className="about-layout">
            <article
              className="story-card surface-card"
              data-reveal
              style={{ "--reveal-delay": "80ms" } as CSSProperties}
            >
              <span className="card-kicker">Profil</span>
              <h3>
                Tumbuh melalui pengalaman, berpikir kritis, dan beraksi dengan
                nyata.
              </h3>
              <p>
                Sebagai siswi program{" "}
                <strong>Pre-International di MAN 2 Banda Aceh</strong>, saya
                mendedikasikan diri pada pengembangan <em>soft skills</em>{" "}
                melalui pengalaman langsung. Saya percaya bahwa kombinasi antara
                prestasi akademik dan kemampuan komunikasi yang baik adalah
                kunci untuk menjadi pribadi yang inovatif dan berakhlak mulia di
                masa depan.
              </p>
              <div className="story-metrics">
                <div>
                  <strong>Komunikatif</strong>
                  <span>Public speaking & diplomasi efektif</span>
                </div>
                <div>
                  <strong>Terorganisir</strong>
                  <span>Manajemen waktu & kepemimpinan tim</span>
                </div>
                <div>
                  <strong>Kritis</strong>
                  <span>Problem solving dengan solusi inovatif</span>
                </div>
              </div>
            </article>

            <div className="strength-grid">
              {strengths.map((item, index) => (
                <article
                  key={item.title}
                  className="surface-card strength-card"
                  data-reveal
                  style={
                    {
                      "--reveal-delay": `${160 + index * 90}ms`,
                    } as CSSProperties
                  }
                >
                  <span className="card-kicker">{item.title}</span>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <SectionHeading
            eyebrow="Kompetensi"
            title="Keseimbangan antara kecerdasan akademik dan keterampilan interpersonal."
            description="Kumpulan soft skills dan kompetensi yang saya asah secara konsisten melalui peran aktif dalam organisasi, proyek kolaboratif, serta pendidikan di lingkungan Pre-International."
          />

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <article
                key={skill.name}
                className="surface-card skill-card"
                data-reveal
                style={
                  {
                    "--level": `${skill.level}%`,
                    "--reveal-delay": `${index * 70}ms`,
                  } as CSSProperties
                }
              >
                <div className="skill-topline">
                  <span className="skill-mark">{skill.mark}</span>
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.description}</p>
                  </div>
                </div>

                <div className="skill-meter">
                  <div className="skill-meter-bar">
                    <span></span>
                  </div>
                  <div className="skill-meter-meta">
                    <span>{skill.stage}</span>
                    <strong>{skill.level}%</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHeading
            eyebrow="Karya & Kontribusi"
            title="Inisiatif dan pencapaian yang dirancang dengan dedikasi serta dampak nyata."
            description="Setiap kartu di bawah ini merangkum pengalaman saya dalam menjalankan program organisasi, proyek akademik internasional, serta pengembangan diri yang mencerminkan pola pikir kritis dan kolaboratif."
          />

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="surface-card project-card"
                data-reveal
                style={
                  { "--reveal-delay": `${index * 100}ms` } as CSSProperties
                }
              >
                <div
                  className="project-preview"
                  style={
                    { "--project-accent": project.accent } as CSSProperties
                  }
                >
                  <span className="project-badge">{project.badge}</span>
                  <div className="project-window">
                    <div className="window-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="window-body">
                      <div className="window-panel large"></div>
                      <div className="window-row">
                        <div className="window-panel"></div>
                        <div className="window-panel"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                  </div>

                  <div
                    className="stack-list"
                    aria-label={`${project.title} tech stack`}
                  >
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                 
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="achievements">
          <SectionHeading
            eyebrow="Prestasi & Sertifikasi"
            title="Bukti konsistensi, pengembangan diri, dan dedikasi akademik."
            description="Sertifikat penghargaan, hasil studi Pre-International, dan pengalaman kolaboratif ini menjadi bukti nyata bahwa setiap kompetensi yang saya miliki didasarkan pada proses belajar yang sungguh-sungguh."
          />

          <div className="timeline-grid">
            {achievements.map((achievement, index) => (
              <article
                key={achievement.title}
                className="surface-card timeline-card"
                data-reveal
                style={
                  { "--reveal-delay": `${index * 100}ms` } as CSSProperties
                }
              >
                {/* BAGIAN GAMBAR BARU */}
                <div className="timeline-image">
                  <img
                    src={achievement.image}
                    alt={`Sertifikat ${achievement.title}`}
                    loading="lazy" // Optimasi loading
                  />
                </div>

                {/* BAGIAN KONTEN TEKS */}
                <div className="timeline-content">
                  <span className="timeline-year">{achievement.year}</span>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <SectionHeading
            eyebrow="Kontak"
            title="Terbuka untuk kolaborasi dan diskusi yang menginspirasi."
            description="Saya percaya bahwa komunikasi yang baik adalah awal dari setiap perubahan besar. Bagian ini dirancang untuk memudahkan kita terhubung, baik untuk diskusi organisasi maupun proyek kolaboratif lainnya."
          />

          <div className="contact-layout">
            <aside
              className="surface-card contact-panel"
              data-reveal
              style={{ "--reveal-delay": "90ms" } as CSSProperties}
            >
              <span className="card-kicker">Hubungi Saya</span>
              <h3>
                Terbuka untuk kolaborasi antar-siswa, diskusi kepemimpinan, dan
                kesempatan pengembangan diri.
              </h3>
              <p>
                Jika ingin berdiskusi tentang program organisasi, bertukar
                pikiran mengenai ide-ide kritis, atau sekadar berjejaring secara
                profesional, silakan hubungi saya melalui saluran di bawah ini.
              </p>

              <div className="social-list">
                {socialLinks.map((item, index) => (
                  <a
                    key={item.label}
                    className="social-item"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    data-reveal
                    style={
                      {
                        "--reveal-delay": `${180 + index * 80}ms`,
                      } as CSSProperties
                    }
                  >
                    <span>{item.label}</span>
                    <strong>{item.handle}</strong>
                  </a>
                ))}
              </div>
            </aside>

            <form
              className="surface-card contact-form"
              onSubmit={(event) => event.preventDefault()}
              data-reveal
              style={{ "--reveal-delay": "180ms" } as CSSProperties}
            >
              <label>
                Nama Lengkap
                <input
                  type="text"
                  name="name"
                  placeholder="Masukkan nama Anda"
                />
              </label>

              <label>
                Email
                <input type="email" name="email" placeholder="nama@email.com" />
              </label>

              <label>
                Pesan
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Ceritakan tentang ide kolaborasi, diskusi organisasi, atau sapaan Anda."
                ></textarea>
              </label>

              <div className="form-footer">
                <p>Pesan Anda akan langsung terkirim ke kotak masuk saya.</p>
                <button className="button button-primary" type="submit">
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <a className="brand-name" href="#home">
            Kanaya Ashghia Rizwar
          </a>
          <p>Student portfolio</p>
        </div>

        <div className="footer-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer-links">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              {item.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;
