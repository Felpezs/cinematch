import { Badge } from "@/components/ui/badge";
import { StreamingLogo } from "@/components/ui/streamingLogo";
import Disney from "@/assets/disney.webp";
import Netflix from "@/assets/netflix.webp";
import Paramount from "@/assets/paramount.webp";
import Max from "@/assets/max.webp";
import Prime from "@/assets/prime.webp";
import { BookmarkIcon, CirclePlay, HeartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const styles = getComputedStyle(document.documentElement);
const primaryColor = styles.getPropertyValue("--primary");

const MovieContent = () => {
  return (
    <div>
      <h2 className="text-muted-foreground text-md capitalize">
        Featured for you today
      </h2>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-foreground mb-4 text-4xl font-bold capitalize">
            Spiderman no way home
          </h1>
          <div className="flex gap-4">
            <div>
              <span className="mb-2 block">
                Rating: 7.7 (1.571 votes) • 2021 | 1 hour 55 minutes{" "}
              </span>
              <div className="flex">
                <Badge variant={"muted"}>Action</Badge>
              </div>
            </div>

            <div>
              <span className="mb-2 block">Available on:</span>
              <div className="flex gap-2">
                <StreamingLogo href="disney" src={Disney} />
                <StreamingLogo href="disney" src={Max} />
                <StreamingLogo href="disney" src={Netflix} />
                <StreamingLogo href="disney" src={Paramount} />
                <StreamingLogo href="disney" src={Prime} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div
            className="ring-accent hover:bg-accent/90 hover:text-accent-foreground w-fit cursor-pointer rounded-full p-2 ring transition-[color,box-shadow]"
            role="button"
          >
            <HeartIcon size={20} />
          </div>
          <div
            className="ring-accent hover:bg-accent/90 hover:text-accent-foreground w-fit cursor-pointer rounded-full p-2 ring transition-[color,box-shadow]"
            role="button"
          >
            <BookmarkIcon size={20} />
          </div>
        </div>
        <div className="flex gap-2 *:text-base">
          <Button>
            <CirclePlay fill="currentColor" color={primaryColor} />
            Watch Now
          </Button>
          <Button variant={"outline"}>Watch Trailer</Button>
        </div>
        <p className="text-base">
          Peter Parker's secret identity is revealed to the entire world.
          Desperate for help, Peter turns to Doctor Strange to make the world
          forget that he is Spider-Man. The spell goes horribly wrong and
          shatters the multiverse, bringing in monstrous villains that could
          destroy the world.
        </p>
      </div>
    </div>
  );
};

export default MovieContent;
