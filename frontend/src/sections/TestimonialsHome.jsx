import TestimonialCard from "../components/TestimonialCard"

export const TestimonialsHome = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-2 overflow-x-scroll">
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
    </div>
  )
}
