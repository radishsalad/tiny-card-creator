import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Card from "@/components/Card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Index = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send this data to your backend
    console.log(values);
    toast.success("Form submitted successfully!");
    form.reset();
  }

  return (
    <div className="min-h-screen bg-green-500 p-8">
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">
          Welcome to Our Sandbox
        </h1>
        <p className="text-lg text-gray-100">
          Discover our range of innovative solutions
        </p>
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

      <div className="mx-auto mt-16 max-w-md">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Contact Us</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="your.email@example.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Index;
