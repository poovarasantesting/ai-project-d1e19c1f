import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen py-12 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Welcome to Our Website</h1>
      <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
        We're here to help. If you have any questions or need assistance, please don't hesitate to contact us.
      </p>
      <div className="mt-8">
        <Button asChild size="lg">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}