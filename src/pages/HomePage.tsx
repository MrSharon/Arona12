import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, Brain, Heart, BookOpen, 
  Sparkles, Shield, Users, Lightbulb
} from 'lucide-react';
import FeatureCard from '../components/home/FeatureCard';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12 text-white mb-12">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Arona, Your Emotionally Intelligent AI Companion
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            Arona helps you understand emotions, improve emotional awareness, 
            and navigate your emotional journey with empathy and insight.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/chat" 
              className="inline-flex items-center px-6 py-3 bg-white text-primary-700 rounded-lg font-medium hover:bg-primary-50 transition-colors"
            >
              <MessageSquare size={20} className="mr-2" />
              Start Chatting
            </Link>
            <Link 
              to="/learn" 
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-400 transition-colors"
            >
              <BookOpen size={20} className="mr-2" />
              Learn More
            </Link>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">How Arona Can Help You</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Brain size={24} className="text-white" />}
            title="Emotion Recognition"
            description="Learn to identify and understand emotions in yourself and others through guided conversations."
            color="bg-primary-600"
          />
          
          <FeatureCard 
            icon={<Heart size={24} className="text-white" />}
            title="Therapeutic Support"
            description="Work through trauma and emotional challenges with compassionate AI assistance."
            color="bg-accent-600"
          />
          
          <FeatureCard 
            icon={<BookOpen size={24} className="text-white" />}
            title="Learning Tools"
            description="Access specialized resources for children with autism and others learning emotional intelligence."
            color="bg-secondary-600"
          />
          
          <FeatureCard 
            icon={<Users size={24} className="text-white" />}
            title="Social Skills"
            description="Practice social interactions and develop better interpersonal communication."
            color="bg-yellow-500"
          />
        </div>
      </section>
      
      <section className="mb-12">
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">What Makes Arona Special</h2>
            
            <div className="space-y-6 mt-8">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">Personalized Experience</h3>
                  <p className="text-gray-600">
                    Arona adapts to your unique personality and emotional patterns, creating a
                    customized experience that grows more insightful over time.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-secondary-100 text-secondary-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">Privacy-Focused</h3>
                  <p className="text-gray-600">
                    Your emotional journey is personal. Arona prioritizes your privacy and data security
                    while providing meaningful insights and support.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <Lightbulb size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">Research-Backed Approach</h3>
                  <p className="text-gray-600">
                    Built on established emotional intelligence frameworks and therapeutic approaches,
                    Arona helps you develop real skills for emotional well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 mb-6">
            Begin exploring your emotional intelligence with Arona today. It's free to start and your first conversation can begin right away.
          </p>
          <Link
            to="/chat"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            <MessageSquare size={20} className="mr-2" />
            Start Chatting Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;