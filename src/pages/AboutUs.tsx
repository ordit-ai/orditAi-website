import JobCard from "@/components/TeamCards/JobCard";
import TeamCard1 from "@/components/TeamCards/TeamCard1";
import Typography from "@/components/Typography";
import SectionHeaders from "@/components/common/SectionHeaders";
import { useRef } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const AboutUs = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right"): void => {
    const scrollAmount = 300;

    if (direction == "left") {
      scrollContainerRef.current?.scrollBy({ left: -scrollAmount });
    } else if (direction == "right") {
      scrollContainerRef.current?.scrollBy({ left: scrollAmount });
    }
  };

  return (
    <div>
      <div className="h-[50vh] w-[100%] flex  items-center justify-center bg-gradient-to-b from-[#050E2FFA] to-[#17052A] md:py-0 py-[2em] md:pt-0 pt-[30%]">
        <div className="w-[85%] mx-auto flex items-center justify-between">
          <div className="w-[50%]">
            <Typography.SubText className="text-white">Nice to meet you</Typography.SubText>

            <Typography.H1 className="text-white">Our mission is to increase the GDP of your startup</Typography.H1>
          </div>

          <Typography.Text className="text-white w-[30%]">
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget
            vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
          </Typography.Text>
        </div>
      </div>

      <div className="w-[85%] mx-auto py-[4em]">
        <SectionHeaders
          introText="Our story"
          header="We’re just getting started"
          subHeader="We’ve already helped over 4,000 companies achieve remarkable results."
          color="secondary"
        />

        <div className="flex items-center gap-6  justify-center pt-6">
          <div className="space-y-4">
            <Typography.Text className="text-slate-600 font-light">
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget
              vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
            </Typography.Text>

            <Typography.Text className="text-slate-600 font-light">
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed
              auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at
              donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
            </Typography.Text>

            <Typography.Text className="text-slate-600 font-light">
              Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet
              erat dolor enim. Ornare id morbi eget ipsum. Sapien, dictum molestie sem tempor. Diam elit, orci,
              tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
            </Typography.Text>
          </div>

          <div className="space-y-4">
            <Typography.Text className="text-slate-600 font-light">
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget
              vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
            </Typography.Text>

            <Typography.Text className="text-slate-600 font-light">
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed
              auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at
              donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
            </Typography.Text>

            <Typography.Text className="text-slate-600 font-light">
              Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet
              erat dolor enim. Ornare id morbi eget ipsum. Sapien, dictum molestie sem tempor. Diam elit, orci,
              tincidunt aenean tempus.
            </Typography.Text>
          </div>
        </div>
      </div>

      <div className="bg-[#F9FAFB]">
        <div className="w-[85%] mx-auto py-[4em]">
          <SectionHeaders
            introText=""
            header="We’re a fast-growing team"
            subHeader="We’re always on the lookout for passionate, dynamic, and talented individuals."
            color="secondary"
          />

          <div className="pt-[3em] flex items-center space-x-6 overflow-x-scroll" ref={scrollContainerRef}>
            {[1, 2, 3, 4, 5, 6].map((el) => (
              <TeamCard1 key={el} />
            ))}
          </div>

          <div className="flex items-center space-x-3 py-4">
            <div
              className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full border-[1px] hover:bg-slate-100 cursor-pointer"
              onClick={() => scroll("left")}
            >
              <GoArrowLeft />
            </div>

            <div
              onClick={() => scroll("right")}
              className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full border-[1px] hover:bg-slate-100 cursor-pointer"
            >
              <GoArrowRight />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[85%] mx-auto py-[4em]">
        <SectionHeaders
          introText="Open positions"
          header="We’re looking for talented people"
          subHeader="We’re a 100% remote team spread all across the world. Join us!"
          color="primary"
        />

        <div className="grid grid-cols-2 gap-[1.5em] gap-x-[3em] py-[2em]">
          {[1, 2, 3, 4, 5, 6, 7].map((el) => (
            <JobCard key={`${el}-JobCard`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
