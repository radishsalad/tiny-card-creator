import Card from "@/components/Card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Welcome to Our Services</h1>
        <p className="text-lg text-gray-600">Discover our range of innovative solutions</p>
      </header>
      
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Web Development"
          description="Custom web solutions built with cutting-edge technologies to help your business grow online."
          imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
        />
        <Card
          title="Digital Marketing"
          description="Strategic digital marketing campaigns that drive results and increase your online presence."
          imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
        />
        <Card
          title="UI/UX Design"
          description="Beautiful and intuitive user interfaces designed to enhance user experience and engagement."
          imageUrl="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
        />
        <Card
          title="Mobile Development"
          description="Native and cross-platform mobile applications that deliver exceptional user experiences."
          imageUrl="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
        />
        <Card
          title="Cloud Solutions"
          description="Scalable cloud infrastructure and services to power your digital transformation."
          imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
        />
        <Card
          title="Consulting"
          description="Expert technology consulting to help you make informed decisions and achieve your goals."
          imageUrl="https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80"
        />
      </div>
    </div>
  );
};

export default Index;