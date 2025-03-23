
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock } from "lucide-react";

const ConversationalAgents = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-20">
        {/* Hero section */}
        <div className="bg-primary/5 py-12">
          <div className="container px-4 md:px-8 max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Tutorial
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Building Conversational AI Agents That Connect To Your Tools and Data
            </h1>
            
            <div className="flex items-center text-sm text-muted-foreground gap-5 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1.5" />
                <span>May 15, 2023</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1.5" />
                <span>20 min read</span>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden mb-8">
              <img 
                src="https://placehold.co/1200x600/f0f5ff/3b82f6?text=Conversational+Agents" 
                alt="Conversational AI Agents" 
                className="w-full"
              />
            </div>
          </div>
        </div>
        
        {/* Article content */}
        <article className="container px-4 md:px-8 max-w-4xl mx-auto prose prose-lg prose-slate mt-12">
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Getting Started</h2>
            
            <p className="mb-6">
              Creating AI agents that understand context and leverage your internal knowledge starts with defining your goals.
              What specific problems are you trying to solve? What data sources will your agents need to access?
            </p>
            
            <p className="mb-6">
              Begin by mapping out the most common user queries and the information your agents will need to respond effectively.
              This preparation will guide your development process and help create more intelligent conversational experiences.
            </p>
            
            <p className="mb-6">
              Next, select the right foundation model for your specific use case. For general knowledge tasks, models like GPT-4 
              might be sufficient, but for specialized domains, fine-tuning on your own data often yields better results.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Key Integration Points</h2>
            
            <p className="mb-6">
              Successful AI agents need seamless connections to your existing tools and databases. Start by identifying the 
              critical systems your agent will need to interact with - CRMs, knowledge bases, ticket systems, or internal
              documentation.
            </p>
            
            <p className="mb-6">
              For each integration point, develop a clear API strategy. Will your agent call APIs directly, or will you use
              a framework like LangChain or LlamaIndex to abstract these connections? Consider authentication, rate limiting,
              and data privacy at each integration point.
            </p>
            
            <p className="mb-6">
              Real-time data connections are particularly valuable for customer-facing agents. Rather than relying on 
              static knowledge, agents with live data access can provide up-to-date information about account status,
              order tracking, or inventory availability.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Best Practices</h2>
            
            <p className="mb-6">
              Design your agent conversations to feel natural while still being efficient. Avoid overwhelming users with too
              much information at once. Instead, present information in digestible chunks and use follow-up questions to
              guide the conversation.
            </p>
            
            <p className="mb-6">
              Consider adding memory capabilities to your agents so they can reference earlier parts of the conversation.
              This creates a more cohesive experience and reduces the need for users to repeat themselves.
            </p>
            
            <p className="mb-6">
              Finally, implement robust monitoring and feedback loops. Track which queries succeed and which fail, and use
              this data to continuously improve your agent's capabilities. User feedback, both explicit and implicit, should
              drive ongoing refinements to your conversational design.
            </p>
          </section>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default ConversationalAgents;
