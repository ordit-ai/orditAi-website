import JobCard from "@/components/TeamCards/JobCard";
import Typography from "@/components/Typography";
import SectionHeaders from "@/components/common/SectionHeaders";

const Careers = () => {
  return (
    <div>
      <div className="w-[85%] mx-auto py-[4em]">
        <SectionHeaders
          introText="Careers at OrditAI "
          header="We’re looking for talented people"
          subHeader="Ready to make lasting impact? Join OrditAI in building digital workers and help redefine
          efficiency for businesses around the globe."
          color="primary"
        />

        <div className="py-[2em]">
          <Typography.Text className="text-gray-950 font-semibold">Benefits of joining the dream team.</Typography.Text>

          <ul className="list-decimal pl-4 text-gray-600">
            <li>Remote working experience </li>
            <li>Health insurance </li>
            <li>Paid Annual Leave </li>
            <li>Professional Development</li>
          </ul>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-[1.5em] gap-x-[3em] py-[2em]">
          {[1, 2, 3, 4, 5, 6, 7].map((el) => (
            <JobCard key={`${el}-JobCard`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
