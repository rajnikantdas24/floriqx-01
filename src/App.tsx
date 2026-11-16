import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import Home from '@/pages/Home'
import { Meta } from '@/components/Meta'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// Routes are code-split so the first paint carries only the landing page.
const Services = lazy(() => import('@/pages/Services'))
const Education = lazy(() => import('@/pages/Education'))
const About = lazy(() => import('@/pages/About'))
const Contact = lazy(() => import('@/pages/Contact'))
const NotFound = lazy(() => import('@/pages/NotFound'))

export default function App() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <div className="flex-1">
        <Suspense
          fallback={<div className="px-gutter py-24 text-sm text-muted-foreground">Loading…</div>}
        >
          <Routes>
            <Route
              index
              element={
                <>
                  <Meta
                    title="FloriQX — software and AI for Indian businesses"
                    description="FloriQX builds custom software and AI integrations for Indian businesses, and teaches the teams that run them. Innovate. Educate. Elevate."
                  />
                  <Home />
                </>
              }
            />
            <Route
              path="services"
              element={
                <>
                  <Meta
                    title="Services — software, AI integration and education | FloriQX"
                    description="Custom software development, AI integration, AI tools and team training from FloriQX, delivered as staged, documented projects for businesses in India."
                  />
                  <Services />
                </>
              }
            />
            <Route
              path="education"
              element={
                <>
                  <Meta
                    title="AI education and eBooks | FloriQX"
                    description="Cohort courses, two-day workshops and practical eBooks on AI and software for teams in India, taught by the engineers who build the integrations."
                  />
                  <Education />
                </>
              }
            />
            <Route
              path="about"
              element={
                <>
                  <Meta
                    title="About FloriQX Technologies"
                    description="How FloriQX came about, what it stands for, and the team behind the software, AI and teaching work in Ahmedabad."
                  />
                  <About />
                </>
              }
            />
            <Route
              path="contact"
              element={
                <>
                  <Meta
                    title="Contact FloriQX — start a project"
                    description="Tell FloriQX what you want to automate. Write to hello@floriqx.com or send the short form and get a written answer on what is worth building."
                  />
                  <Contact />
                </>
              }
            />
            <Route
              path="*"
              element={
                <>
                  <Meta title="Page not found | FloriQX" description="This page does not exist." />
                  <NotFound />
                </>
              }
            />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}
