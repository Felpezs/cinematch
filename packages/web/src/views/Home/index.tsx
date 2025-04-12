import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import MovieContent from "./MovieContent";

const Home = () => {
  return (
    <div className="flex">
      <MovieContent />
      <div>
        <Carousel>
          <CarouselContent>
            <CarouselItem>a</CarouselItem>
            <CarouselItem>b</CarouselItem>
            <CarouselItem>x</CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
