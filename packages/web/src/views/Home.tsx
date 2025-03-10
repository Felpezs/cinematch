import { Badge } from "@/components/ui/badge";

const Home = () => {
  return (
    <>
      <h2 className="text-muted-foreground text-md capitalize">
        Featured for you today
      </h2>
      <h1 className="text-foreground text-4xl font-bold capitalize">
        Spiderman no way home
      </h1>
      <div className="flex gap-4 *:flex *:flex-col">
        <div>
          <span>Rating: 7.7 (1.571 votes) • 2021 | 1 hour 55 minutes </span>
          <div className="flex">
            <Badge>Badge</Badge>
          </div>
        </div>
        <div>
          <span>Available on:</span>
          <span>Ic</span>
        </div>
      </div>
    </>
  );
};

export default Home;
