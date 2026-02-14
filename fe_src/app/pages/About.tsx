import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Linkedin, Twitter, Github, Menu } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* About Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <img
                  src="https://images.unsplash.com/photo-1668873882987-77f393e85916?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHJlYWRpbmclMjBsaWJyYXJ5JTIwYm9va3N8ZW58MXx8fHwxNzcxMDMwMjgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="About Me"
                  className="w-full h-auto rounded-sm shadow-lg"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl mb-4">About Me</h1>
                <div className="flex items-center mb-8">
                  <div className="h-1 w-16 bg-[#D98880] rounded-full"></div>
                  <div className="h-3 w-3 bg-[#D98880] rounded-full ml-2"></div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                I am a data scientist and generative artist. Previously I went to National University of
                Singapore, EPFL and Duke University.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Besides data science and data storytelling, I also like contemporary art and travelling.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Having lived in China, Singapore, Switzerland and the United States, I understand English,
                Chinese and French.
              </p>

              <p className="text-gray-700 leading-relaxed">
                I have given talks and workshops such as Introduction To Visualization for Women Who
                Code and Drawing with Data Workshop at Airbnb APAC.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Work With Me Section */}
      <div className="bg-[#ffd100] py-20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl mb-12">Work With Me</h2>
          
          <div className="flex items-center justify-center gap-12">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B8976F] hover:text-[#9A7D5B] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={48} strokeWidth={1.5} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B8976F] hover:text-[#9A7D5B] transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={48} strokeWidth={1.5} />
            </a>
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B8976F] hover:text-[#9A7D5B] transition-colors"
              aria-label="Medium"
            >
              <div className="w-12 h-12 bg-[#B8976F] hover:bg-[#9A7D5B] transition-colors flex items-center justify-center text-white text-2xl font-serif rounded-sm">
                M
              </div>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B8976F] hover:text-[#9A7D5B] transition-colors"
              aria-label="GitHub"
            >
              <Github size={48} strokeWidth={1.5} />
            </a>
            <a
              href="https://dev.to"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B8976F] hover:text-[#9A7D5B] transition-colors"
              aria-label="Dev.to"
            >
              <div className="w-12 h-12 bg-[#B8976F] hover:bg-[#9A7D5B] transition-colors flex items-center justify-center text-white text-xs font-bold rounded-sm">
                DEV
              </div>
            </a>
            <button
              className="text-[#B8976F] hover:text-[#9A7D5B] transition-colors"
              aria-label="Menu"
            >
              <Menu size={48} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}