import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#FF8228] to-[#FFB5B5] text-white relative overflow-hidden">
        {/* Add decorative elements */}
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] bg-white/5 rounded-full blur-3xl"></div>
        
        <nav className="container mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className="text-xl md:text-2xl font-bold tracking-tight">
            bTaskee Malaysia
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base">
            {[
              { href: "#strategy", label: "Strategy" },
              { href: "#journey", label: "Customer Journey" },
              { href: "#channels", label: "Channels" },
              { href: "#seo", label: "SEO" },
              { href: "#timeline", label: "Timeline" }
            ].map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="hover:text-white transition-all duration-300 border-b-2 border-transparent hover:border-white px-2 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center px-2">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight tracking-tight">
              Digital Marketing Strategy
              <span className="block text-lg md:text-2xl mt-4 md:mt-6 font-normal opacity-90">for</span>
              <span className="text-xl md:text-4xl mt-3 block font-semibold">Malaysian Market Expansion</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Making Every Day Pleasant for Malaysian Homes
            </p>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 tracking-tight">Executive Summary</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Building on bTaskee's successful operations in Vietnam, Thailand, and Indonesia, we're bringing our trusted home services to Malaysian families. With over 5 million completed tasks and a 97% customer satisfaction rate, we understand what makes a home truly pleasant.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  metric: "9+ Services",
                  description: "For Your Home Needs"
                },
                {
                  metric: "5 Cities",
                  description: "Initial Coverage"
                },
                {
                  metric: "60-min",
                  description: "Quick Response Time"
                }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-2xl md:text-3xl font-bold text-[#FF8228] mb-3">{item.metric}</div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey Mapping */}
      <section id="journey" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Customer Journey Mapping</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 relative">
              {/* Hide connecting line on mobile */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#FF8228] opacity-20 -z-10 hidden md:block"></div>
              
              {[
                {
                  stage: "Awareness",
                  icon: "🔍",
                  touchpoints: [
                    "Social media ads",
                    "Google search",
                    "Word of mouth",
                    "Property agent referrals"
                  ],
                  goals: "Build brand recognition and trust"
                },
                {
                  stage: "Consideration",
                  icon: "💭",
                  touchpoints: [
                    "App store listing",
                    "Website comparison",
                    "Review platforms",
                    "Service videos"
                  ],
                  goals: "Highlight unique value proposition"
                },
                {
                  stage: "Decision",
                  icon: "✅",
                  touchpoints: [
                    "App download",
                    "Registration process",
                    "First booking experience",
                    "Payment system"
                  ],
                  goals: "Streamline conversion process"
                },
                {
                  stage: "Retention",
                  icon: "♥️",
                  touchpoints: [
                    "Service quality",
                    "Customer support",
                    "Loyalty program",
                    "Regular communications"
                  ],
                  goals: "Build long-term relationships"
                }
              ].map((stage, index) => (
                <div key={index} className="group transform transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 relative">
                    {/* Stage number indicator */}
                    <div className="w-10 h-10 bg-[#FF8228] text-white rounded-full flex items-center justify-center absolute -top-5 left-1/2 transform -translate-x-1/2 group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-bold text-[#FF8228] mb-2 flex items-center gap-2">
                        <span className="text-2xl">{stage.icon}</span>
                        {stage.stage}
                      </h3>
                      <ul className="space-y-3">
                        {stage.touchpoints.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 group-hover:transform group-hover:translate-x-1 transition-transform">
                            <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full mt-2"></span>
                            <span className="text-gray-600">{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-sm font-medium">Goal:</p>
                        <p className="text-sm text-gray-600">{stage.goals}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Strategy */}
      <section id="seo" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">SEO Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Keywords & Search Terms */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-[#FF8228] text-3xl">🎯</span>
                Search Terms Strategy
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-semibold text-[#FF8228] mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full"></span>
                    Primary Keywords
                  </h4>
                  <ul className="space-y-4">
                    {[
                      {
                        keyword: "home cleaning service KL",
                        volume: "High intent, location-specific"
                      },
                      {
                        keyword: "house cleaning Malaysia",
                        volume: "High volume, general intent"
                      },
                      {
                        keyword: "home service app Malaysia",
                        volume: "Medium volume, high intent"
                      }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 group-hover:transform group-hover:translate-x-1 transition-transform">
                        <div className="w-6 h-6 bg-[#FF8228] rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <div>
                          <span className="font-semibold">{item.keyword}</span>
                          <p className="text-gray-600 text-sm mt-1">{item.volume}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[#FF8228] mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full"></span>
                    Local Search Terms
                  </h4>
                  <ul className="space-y-4">
                    {[
                      {
                        keyword: "pembersih rumah [area]",
                        volume: "High intent, Malay language"
                      },
                      {
                        keyword: "清洁服务 [area]",
                        volume: "High intent, Chinese language"
                      },
                      {
                        keyword: "part time maid [area]",
                        volume: "High volume, location-based"
                      }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 group-hover:transform group-hover:translate-x-1 transition-transform">
                        <div className="w-6 h-6 bg-[#FF8228] rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <div>
                          <span className="font-semibold">{item.keyword}</span>
                          <p className="text-gray-600 text-sm mt-1">{item.volume}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical SEO & Content Strategy */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-[#FF8228] text-3xl">⚙️</span>
                Technical & Content
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-semibold text-[#FF8228] mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full"></span>
                    Technical Implementation
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Schema markup for service areas",
                      "Local business structured data",
                      "Multi-language support (EN, BM, CN)",
                      "Mobile optimization for local searches",
                      "Location-based XML sitemaps",
                      "Accelerated Mobile Pages (AMP)",
                      "Rich snippets optimization"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 group-hover:transform group-hover:translate-x-1 transition-transform">
                        <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full mt-2"></span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[#FF8228] mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full"></span>
                    Content Strategy
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Area-specific landing pages",
                      "Neighborhood cleaning guides",
                      "Local customer testimonials",
                      "Service comparison pages",
                      "FAQ pages by location",
                      "Local event coverage",
                      "Community spotlights"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 group-hover:transform group-hover:translate-x-1 transition-transform">
                        <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full mt-2"></span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Local SEO Focus */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-[#FF8228] text-3xl">📍</span>
                Local SEO Focus
              </h3>
              <div className="space-y-6">
                {[
                  {
                    city: "Kuala Lumpur",
                    focus: ["KLCC", "Bangsar", "Mont Kiara", "Bukit Bintang"]
                  },
                  {
                    city: "Petaling Jaya",
                    focus: ["Damansara", "SS2", "Kelana Jaya", "Bandar Utama"]
                  },
                  {
                    city: "Subang Jaya",
                    focus: ["USJ", "Sunway", "SS15", "Bandar Puteri"]
                  },
                  {
                    city: "Shah Alam",
                    focus: ["Seksyen 7", "Setia Alam", "Bukit Jelutong"]
                  }
                ].map((city, index) => (
                  <div key={index} className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                    <h4 className="font-semibold text-[#FF8228] mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full"></span>
                      {city.city}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {city.focus.map((area, idx) => (
                        <span key={idx} className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600 hover:bg-[#FF8228] hover:text-white transition-colors cursor-pointer group-hover:transform group-hover:translate-x-1">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                <div>
                  <h4 className="font-semibold text-[#FF8228] mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full"></span>
                    Local Optimization
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Google Business Profile optimization",
                      "Local citation building",
                      "Review management system",
                      "Location-specific meta data",
                      "Local backlink building"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 group-hover:transform group-hover:translate-x-1 transition-transform">
                        <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full mt-2"></span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Channels */}
      <section id="channels" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Marketing Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Service Providers */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold mb-6">Service Provider Acquisition</h3>
                <ul className="space-y-6">
                  <li className="space-y-2">
                    <div className="font-semibold">Facebook/Instagram Ads</div>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full mt-2"></span>
                        <span>Target: 25-45 age group</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full mt-2"></span>
                        <span>Focus: Flexible hours & competitive pay</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full mt-2"></span>
                        <span>Creative: Success stories from Vietnam</span>
                      </li>
                    </ul>
                  </li>
                  <li className="space-y-2">
                    <div className="font-semibold">LinkedIn Campaign</div>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full mt-2"></span>
                        <span>Professional service providers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full mt-2"></span>
                        <span>Business partnerships</span>
                      </li>
                    </ul>
                  </li>
                  <li className="space-y-2">
                    <div className="font-semibold">Job Portals</div>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full mt-2"></span>
                        <span>JobStreet Malaysia</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full mt-2"></span>
                        <span>WOBB</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full mt-2"></span>
                        <span>Indeed Malaysia</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Customers */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold mb-6">Customer Acquisition</h3>
                <ul className="space-y-6">
                  <li className="space-y-2">
                    <div className="font-semibold">Google Ads</div>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full mt-2"></span>
                        <span>Search campaigns for high-intent keywords</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full mt-2"></span>
                        <span>Display campaigns for awareness</span>
                      </li>
                    </ul>
                  </li>
                  <li className="space-y-2">
                    <div className="font-semibold">Social Media</div>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full mt-2"></span>
                        <span>Facebook/Instagram: Lifestyle content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full mt-2"></span>
                        <span>TikTok: Quick tips & demonstrations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full mt-2"></span>
                        <span>YouTube: How-to guides</span>
                      </li>
                    </ul>
                  </li>
                  <li className="space-y-2">
                    <div className="font-semibold">Partnerships</div>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full mt-2"></span>
                        <span>Joint Management Bodies (JMB)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full mt-2"></span>
                        <span>Building & Facility Managers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full mt-2"></span>
                        <span>Resident Associations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full mt-2"></span>
                        <span>Renovation & Interior Design Companies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full mt-2"></span>
                        <span>Property Management Companies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full mt-2"></span>
                        <span>Real Estate Agencies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full mt-2"></span>
                        <span>Expat Communities & Forums</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Launch Timeline */}
      <section id="timeline" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Launch Timeline</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 md:space-y-12">
              {[
                {
                  phase: "Phase 1 (Month 1-2)",
                  title: "Soft Launch in Klang Valley",
                  items: [
                    "Service provider recruitment",
                    "Limited-time promotions",
                    "Initial marketing campaigns"
                  ]
                },
                {
                  phase: "Phase 2 (Month 3-4)",
                  title: "Full Launch",
                  items: [
                    "Aggressive marketing campaign",
                    "Referral program introduction",
                    "Scale operations"
                  ]
                },
                {
                  phase: "Phase 3 (Month 5-6)",
                  title: "Market Expansion",
                  items: [
                    "Expansion to other major cities",
                    "Enhanced marketing efforts",
                    "Partnership development"
                  ]
                }
              ].map((phase, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="w-full md:w-48 flex-shrink-0">
                    <div className="text-[#FF8228] font-bold">{phase.phase}</div>
                  </div>
                  <div className="flex-grow bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-semibold mb-4">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#FF8228] rounded-full"></span>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section id="metrics" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Success Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Service Provider KPIs</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#FF8228] rounded-full"></div>
                  <span>Number of registered providers</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#FF8228] rounded-full"></div>
                  <span>Provider retention rate</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#FF8228] rounded-full"></div>
                  <span>Service quality ratings</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Customer KPIs</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#FF8228] rounded-full"></div>
                  <span>App downloads and active users</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#FF8228] rounded-full"></div>
                  <span>Booking conversion rate</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#FF8228] rounded-full"></div>
                  <span>Customer retention and NPS</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Allocation */}
      <section className="py-12 md:py-20 bg-[#FF8228] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">Budget Allocation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
            {[
              {
                percentage: "30%",
                category: "Service Provider Acquisition"
              },
              {
                percentage: "40%",
                category: "Customer Acquisition"
              },
              {
                percentage: "15%",
                category: "Brand Awareness"
              },
              {
                percentage: "15%",
                category: "Content & SEO"
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <div className="text-2xl md:text-4xl font-bold mb-3">{item.percentage}</div>
                <p className="text-sm md:text-base font-medium">{item.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-lg mb-3">
            Digital Marketing Strategy Proposal for bTaskee Malaysia
          </p>
          <p className="text-sm text-gray-500">
            Making Malaysian Homes Pleasant, One Task at a Time
          </p>
        </div>
      </footer>
    </div>
  );
}
