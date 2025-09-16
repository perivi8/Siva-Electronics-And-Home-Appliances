import { ReactNode, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type PageLayoutProps = {
  children: ReactNode;
  title: string;
  description?: string;
};

const PageLayout = ({ children, title, description = '' }: PageLayoutProps) => {
  const location = useLocation();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    // Scroll to content if there's a hash in the URL
    if (location.hash && contentRef.current) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-32">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
            {description && <p className="text-muted-foreground">{description}</p>}
          </div>
          <div ref={contentRef}>
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
