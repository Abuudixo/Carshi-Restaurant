
import React, { useEffect, useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import Logo from './Logo';

const Footer = () => {
  const [mapUri, setMapUri] = useState<string | null>(null);
  const [isLoadingMap, setIsLoadingMap] = useState(true);

  useEffect(() => {
    const fetchMapLocation = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: "Find the Google Maps location for a high-end restaurant at 123 Culinary Way, Gastronomy District, San Francisco. If this exact address doesn't exist, provide a link to the heart of the Gastronomy District in San Francisco.",
          config: {
            tools: [{ googleMaps: {} }],
          },
        });

        // Extracting map URI from grounding chunks as per instructions
        const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
        const mapsChunk = chunks?.find(chunk => chunk.maps?.uri);
        
        if (mapsChunk?.maps?.uri) {
          setMapUri(mapsChunk.maps.uri);
        } else {
          // Fallback to a general SF map if grounding fails
          setMapUri("https://www.google.com/maps/place/Carshi/@2.0205937,45.3008748,17z/data=!3m1!4b1!4m6!3m5!1s0x3d58418a11f0bb35:0x4b27972c606e7d27!8m2!3d2.0205937!4d45.3008748!16s%2Fg%2F11qnd5_7vj?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D");
        }
      } catch (error) {
        console.error("Error fetching map location:", error);
        setMapUri("https://www.google.com/maps/place/Carshi/@2.0205937,45.3008748,17z/data=!3m1!4b1!4m6!3m5!1s0x3d58418a11f0bb35:0x4b27972c606e7d27!8m2!3d2.0205937!4d45.3008748!16s%2Fg%2F11qnd5_7vj?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D");
      } finally {
        setIsLoadingMap(false);
      }
    };

    fetchMapLocation();
  }, []);

  return (
    <footer className="bg-stone-900 pt-20 pb-10 text-stone-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-40 mb-20">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Logo className="h-12 w-12" />
              <h2 className="text-2xl font-black text-white tracking-widest uppercase">Carshi</h2>
            </div>
            <p className="text-sm italic leading-relaxed font-light">
              "Experience the pinnacle of culinary artistry and sophistication. Join us for a dinner that transcends the ordinary."
            </p>
            <div className="flex gap-4">
               {['FB', 'IG', 'Tk', ].map(social => (
                 <a key={social} href="https://www.instagram.com/carshi_hq/" className="w-10 h-10 border border-stone-700 flex items-center justify-center rounded-full hover:bg-amber-500 hover:border-amber-500 hover:text-stone-900 transition-all text-xs font-bold">
                   {social}
                 </a>
               ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Our Location</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm">Buulo Huubey, <br/>Wadajir District, <br/>Waddada Airlaport,</p>
              </div>
              
              {/* Dynamic Interactive Map Section */}
              <div className="group relative h-40 bg-stone-800 rounded-sm overflow-hidden shadow-inner ring-1 ring-white/10">
                {isLoadingMap ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-800 animate-pulse">
                    <div className="w-6 h-6 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                    <span className="text-[10px] uppercase tracking-widest text-stone-500">Locating...</span>
                  </div>
                ) : (
                  <>
                    <img 
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=400&auto=format&fit=crop" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-40 group-hover:opacity-60" 
                      alt="Map background" 
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                      <div className="bg-amber-500 text-stone-900 px-2 py-1 text-[8px] font-black uppercase tracking-widest mb-2 shadow-lg">Live Map</div>
                      <a 
                        href={mapUri || '#'} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
                      >
                        Open in Google Maps
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm italic font-light">
              <li><a href="#menu" className="hover:text-amber-500 transition-colors">Season Menu</a></li>
              <li><a href="#gallery" className="hover:text-amber-500 transition-colors">Photo Gallery</a></li>
              <li><a href="#contact-section" className="hover:text-amber-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

         

        </div>

        <div className="pt-10 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500">
          <p>© 2025 Carshi Fine Dining. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
