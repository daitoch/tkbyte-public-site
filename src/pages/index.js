import Head from 'next/head';
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';
import ServiceCard from '../components/pages/ServiceCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>CloudAI Agency - AI and Cloud Services</title>
        <meta name="description" content="Professional AI and cloud services for businesses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="py-20">
          <h1 className="text-4xl font-bold text-center text-primary">
            Future-Ready Solutions for Tomorrow's Businesses
          </h1>
          <p className="text-lg text-center text-gray-600 mt-4">
            Transform your business with AI and cloud infrastructure innovation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <ServiceCard
            title="AI Implementation"
            description="Custom AI solutions tailored to your business needs"
            icon="🤖"
          />
          <ServiceCard
            title="Cloud Migration"
            description="Seamless transition to cloud infrastructure"
            icon="☁️"
          />
          <ServiceCard
            title="Data Analytics"
            description="Insightful data analysis for better decision making"
            icon="📊"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}