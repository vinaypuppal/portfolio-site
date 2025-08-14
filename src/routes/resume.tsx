import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { generatePageSeo } from '~/utils/pageSeo'

export const Route = createFileRoute('/resume')({
  component: ResumePage,
  head: () => ({
    meta: generatePageSeo(
      'Resume',
      'Senior Full Stack Engineer and Engineering Manager with 8+ years of experience building scalable web applications and leading cross-functional teams.',
      '/resume',
    ),
  }),
})

function ResumePage() {
  const [showInstructions, setShowInstructions] = useState(false)

  const handlePrint = () => {
    window.print()
  }

  const handleDownloadClick = () => {
    setShowInstructions(true)
    window.print()
    setTimeout(() => setShowInstructions(false), 10000)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4 sm:px-6 lg:px-8 print:bg-white print:p-0">
      <div className="max-w-4xl mx-auto mb-6 print:hidden">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center px-3 sm:px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
              <span className="hidden sm:inline">Print</span>
              <span className="sm:hidden">Print</span>
            </button>
            <button
              type="button"
              onClick={handleDownloadClick}
              className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Save as PDF
            </button>
          </div>
        </div>
      </div>

      {showInstructions && (
        <div className="max-w-4xl mx-auto mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg print:hidden">
          <h3 className="font-semibold text-blue-900 mb-2">To save as clean PDF:</h3>
          <ol className="list-decimal list-inside text-blue-800 space-y-1 text-sm">
            <li>In the print dialog, select "Save as PDF" as destination</li>
            <li>
              <strong>Click "More settings" or "Print using system dialog"</strong>
            </li>
            <li>
              <strong>UNCHECK "Headers and footers"</strong> to remove page title and URL
            </li>
            <li>Set margins to "None" or "Minimum" for full page usage</li>
            <li>Ensure "Background graphics" is checked for colors</li>
            <li>Click "Save" and choose location</li>
          </ol>
          <p className="text-xs text-blue-700 mt-2 font-medium">
            💡 For Mac: Use "Show Details" → Uncheck "Print headers and footers"
            <br />💡 For Windows: Look for "More settings" → Uncheck "Headers and footers"
          </p>
        </div>
      )}

      <div className="max-w-4xl mx-auto print:bg-white">
        <div
          className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 print:pt-8 text-black print:bg-white print:shadow-none print:rounded-none print:p-8 print:max-w-none"
          style={{ backgroundColor: 'white' }}
        >
          <div className="flex items-center flex-col md:flex-row md:justify-between gap-4 mb-4 print:flex-row print:justify-between print:mb-3 border-b border-solid border-gray-300 pb-3">
            <div className="text-center md:text-left print:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 print:text-4xl print:text-blue-900">
                Vinay Puppal
              </h1>
              <div className="text-sm sm:text-md text-blue-700 font-medium italic print:text-md print:text-blue-700">
                Senior Full Stack Engineer
              </div>
              <div className="text-xs sm:text-sm text-gray-500 print:text-sm">Hyderabad, India</div>
            </div>

            <div className="text-xs print:text-xs w-full md:w-auto print:w-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5 print:grid print:grid-cols-2 print:gap-x-3 print:gap-y-1.5">
                <div className="flex items-center gap-1">
                  <span className="text-gray-500 print:text-gray-500">☎</span>
                  <span className="text-gray-700 print:text-gray-700">+91-9039305364</span>
                </div>
                <div className="flex items-center gap-1 sm:col-span-2 print:col-span-2">
                  <span className="text-gray-500 print:text-gray-500">💼</span>
                  <a
                    href="https://www.linkedin.com/in/vinay-puppal-4514b7104"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline print:text-blue-600 break-all sm:break-normal print:break-normal"
                  >
                    linkedin.com/in/vinay-puppal-4514b7104
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-500 print:text-gray-500">✉</span>
                  <a
                    href="mailto:hello@vinaypuppal.com"
                    className="text-blue-600 hover:text-blue-800 underline print:text-blue-600 truncate print:no-underline"
                  >
                    hello@vinaypuppal.com
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-500 print:text-gray-500">🌐</span>
                  <a
                    href="https://vinaypuppal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline print:text-blue-600 print:no-underline"
                  >
                    vinaypuppal.com
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-500 print:text-gray-500">⚡</span>
                  <a
                    href="https://github.com/vinaypuppal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline print:text-blue-600 print:no-underline"
                  >
                    github.com/vinaypuppal
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-500 print:text-gray-500">✏</span>
                  <a
                    href="https://codepen.io/vinaypuppal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline print:text-blue-600 print:no-underline"
                  >
                    codepen.io/vinaypuppal
                  </a>
                </div>
              </div>
            </div>
          </div>

          <section
            className="mb-4 print:mb-3"
            style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}
          >
            <h2 className="text-lg font-bold border-b border-solid border-gray-300 pb-1 mb-2 text-blue-900 print:text-base print:mb-1 print:text-blue-900">
              SUMMARY
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed print:text-xs print:leading-snug">
              Senior Full Stack Engineer and Engineering Manager with 8+ years building scalable web
              applications and leading cross-functional teams. Currently managing engineering
              initiatives at Orca Security while maintaining 40% hands-on contribution to critical
              features. Proven track record of delivering complex projects from conception to
              production, including Generative AI features, API security platforms, and enterprise
              SaaS solutions. Expertise in React, Node.js, Python, and cloud architectures.
              Successfully led product development through acquisition (RapidSec → Orca Security)
              and consistently recognized for technical excellence, winning company hackathons and
              driving innovation. Seeking senior engineering or engineering management roles to
              leverage my blend of technical depth and leadership experience.
            </p>
          </section>

          <section className="mb-4 print:mb-3" style={{ breakInside: 'auto' }}>
            <h2 className="text-lg font-bold border-b border-solid border-gray-300 pb-1 mb-2 text-blue-900 print:text-base print:mb-2 print:text-blue-900">
              EMPLOYMENT HISTORY
            </h2>

            <div
              className="mb-4 print:mb-3"
              style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 print:mb-1 print:flex-row">
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base print:text-sm">
                    Engineering Manager, Orca Security
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 print:text-xs">
                    API Security & Generative AI Features
                  </p>
                </div>
                <span className="text-xs sm:text-sm text-blue-600 font-medium print:text-xs print:text-blue-600 mt-1 sm:mt-0">
                  May 2023 — Present (Remote)
                </span>
              </div>
              <ul className="text-xs sm:text-sm space-y-0.5 text-gray-700 list-disc pl-4 sm:pl-5 print:text-xs print:space-y-0 print:pl-5">
                <li>
                  Lead and mentored a cross-functional engineering team while maintaining hands-on
                  technical contributions to critical API Security and Generative AI initiatives,
                  balancing leadership responsibilities (60%) with individual contribution (40%).
                </li>
                <li>
                  Spearheaded the end-to-end implementation of Cloudflare DNS Integration,
                  significantly expanding APISec catalog coverage and improving product capabilities
                  for enterprise clients.
                </li>
                <li>
                  Architected and delivered Orkie Slack bot from conception to production,
                  demonstrating full-stack ownership and technical versatility.
                </li>
                <li>
                  Won first place in company hackathon with AI Code Remediation project, showcasing
                  innovation and technical excellence.
                </li>
                <li>
                  Transitioned AI Code Remediation from proof-of-concept to production-ready
                  solution, establishing technical foundation for new AI Features domain.
                </li>
                <li>
                  Architected and delivered <strong>Cursor-like AI assistant</strong> from
                  conception to production, including rapid UI POC development in 5 days for urgent{' '}
                  <strong>RSA Conference</strong> demo, demonstrating exceptional execution under
                  pressure.
                </li>
                <li>
                  Established comprehensive monitoring infrastructure with Sentry and Site24x7
                  alerts, reducing incident detection time by 40%.
                </li>
                <li>
                  Served as Scrum Master, facilitating agile ceremonies and continuously improving
                  team velocity and delivery predictability.
                </li>
              </ul>
            </div>

            <div
              className="mb-4 print:mb-3"
              style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 print:mb-1 print:flex-row">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base print:text-sm">
                  Senior Software Engineer, Orca Security
                </h3>
                <span className="text-xs sm:text-sm text-blue-500 print:text-xs print:text-blue-500 mt-1 sm:mt-0">
                  Jan 2022 — May 2023 (Remote)
                </span>
              </div>
              <ul className="text-xs sm:text-sm space-y-0.5 text-gray-700 list-disc pl-4 sm:pl-5 print:text-xs print:space-y-0 print:pl-5">
                <li>
                  Designed and implemented APISec product features including POC pipeline, external
                  scanner, and performance optimization.
                </li>
                <li>Managed UI development.</li>
                <li>
                  Led APISec project initiatives, contributing to product strategy and
                  organizational demos.
                </li>
                <li>
                  Mentored team members, fostering a collaborative environment as Scrum master.
                </li>
                <li>
                  Enhanced technical skills in Python and back-end development, focusing on
                  event-based pipeline builds.
                </li>
              </ul>
            </div>

            <div
              className="mb-4 print:mb-3"
              style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 print:mb-1 print:flex-row">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base print:text-sm">
                  Senior Full Stack Engineer, RapidSec (Acq. by Orca Security)
                </h3>
                <span className="text-xs sm:text-sm text-blue-500 print:text-xs print:text-blue-500 mt-1 sm:mt-0">
                  Aug 2020 — Jan 2022 (Remote)
                </span>
              </div>
              <ul className="text-xs sm:text-sm space-y-0.5 text-gray-700 list-disc pl-4 sm:pl-5 print:text-xs print:space-y-0 print:pl-5">
                <li>
                  Spearheaded end-to-end feature development, facilitating successful acquisition by
                  Orca Security.
                </li>
                <li>
                  Conducted comprehensive research on Content-Security-Policy (CSP) to enhance
                  application security.
                </li>
                <li>
                  Developed and maintained CSPgenerator and CSPscanner web tools and browser
                  extensions.
                </li>
                <li>
                  Managed feature integration within RapidSec dashboard, improving user experience
                  and functionality.
                </li>
                <li>
                  Collaborated with cross-functional teams to drive project timelines and
                  deliverables.
                </li>
              </ul>
            </div>

            <div
              className="mb-4 print:mb-3"
              style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 print:mb-1 print:flex-row">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base print:text-sm">
                  Full Stack Engineer, Chat Leap
                </h3>
                <span className="text-xs sm:text-sm text-blue-500 print:text-xs print:text-blue-500 mt-1 sm:mt-0">
                  Mar 2018 — Aug 2020 (Remote)
                </span>
              </div>
              <ul className="text-xs sm:text-sm space-y-0.5 text-gray-700 list-disc pl-4 sm:pl-5 print:text-xs print:space-y-0 print:pl-5">
                <li>
                  Developed features for ChatLeap's platform that enables networks and marketplaces
                  to connect brands with audiences at scale.
                </li>
                <li>
                  <strong>Technologies:</strong> ReactJs, Redux, SASS, NodeJs, MongoDB
                </li>
                <li>
                  Added AMP support for server-side rendered ReactJs Progressive Web App which
                  resulted in increased traffic and about 40% more conversions each month.
                </li>
                <li>
                  Implemented the Content Security Policy which prevented content injection attacks,
                  such as Cross-Site Scripting (XSS).
                </li>
                <li>
                  Developed custom context-aware social proof notifications which resulted in a 15%
                  increase in conversions.
                </li>
                <li>
                  Worked on <strong>4 major Viber Chat Bots</strong>.
                </li>
              </ul>
            </div>

            <div
              className="mb-4 print:mb-3"
              style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 print:mb-1 print:flex-row">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base print:text-sm">
                  Frontend Engineer, TalkingYak
                </h3>
                <span className="text-xs sm:text-sm text-blue-500 print:text-xs print:text-blue-500 mt-1 sm:mt-0">
                  Aug 2016 — Feb 2018 (Remote)
                </span>
              </div>
              <ul className="text-xs sm:text-sm space-y-0.5 text-gray-700 list-disc pl-4 sm:pl-5 print:text-xs print:space-y-0 print:pl-5">
                <li>
                  TalkingYak is California based company building a technology to change the way
                  English is taught.
                </li>
                <li>
                  <strong>Technologies:</strong> React.js, Next.js, GraphQL.
                </li>
                <li>
                  Built templates using React.js for various quiz formats to teach English easily.
                </li>
                <li>Built a tool to learn English words using HTML5 Web Speech API.</li>
              </ul>
            </div>
          </section>

          <section
            className="mb-4 print:mb-3 print:break-before-page print:pt-16"
            style={{
              breakInside: 'avoid',
              pageBreakInside: 'avoid',
              pageBreakBefore: 'always',
              paddingTop: '2rem',
            }}
          >
            <h2 className="text-lg font-bold border-b border-solid border-gray-300 pb-1 mb-2 text-blue-900 print:text-base print:mb-1 print:text-blue-900">
              EDUCATION
            </h2>
            <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-start print:flex-row">
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base print:text-sm">
                  Bachelor of Technology in Information Technology
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 print:text-xs">
                  Institute Of Technology, IT-GGV
                </p>
                <p className="text-xs sm:text-sm font-semibold mt-1 text-gray-700 print:text-xs print:mt-0">
                  CGPA 8.89/10
                </p>
              </div>
              <span className="text-xs sm:text-sm text-blue-500 print:text-xs print:text-blue-500 mb-2 sm:mb-0 sm:mt-0 text-left sm:text-right">
                Aug 2012 — Apr 2016
                <br />
                (Bilaspur, Chhattisgarh)
              </span>
            </div>
          </section>

          <section
            className="mb-4 print:mb-3"
            style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}
          >
            <h2 className="text-lg font-bold border-b border-solid border-gray-300 pb-1 mb-2 text-blue-900 print:text-base print:mb-1 print:text-blue-900">
              SKILLS
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm print:gap-2 print:text-xs print:grid-cols-4">
              <div>
                <span className="font-semibold text-gray-900">Generative AI</span>
                <p className="text-gray-600">Experienced</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Python</span>
                <p className="text-gray-600">Experienced</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">React.js</span>
                <p className="text-gray-600">Experienced</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">System Design</span>
                <p className="text-gray-600">Experienced</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Node.js</span>
                <p className="text-gray-600">Experienced</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Scrum Master</span>
                <p className="text-gray-600">Experienced</p>
              </div>
            </div>
          </section>

          <section
            className="print:mb-0"
            style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}
          >
            <h2 className="text-lg font-bold border-b border-solid border-gray-300 pb-1 mb-2 text-blue-900 print:text-base print:mb-1 print:text-blue-900">
              LANGUAGES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm print:gap-2 print:text-xs print:grid-cols-2">
              <div>
                <span className="font-semibold text-gray-900">English</span>
                <p className="text-gray-600">Highly proficient</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Telugu</span>
                <p className="text-gray-600">Native speaker</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
