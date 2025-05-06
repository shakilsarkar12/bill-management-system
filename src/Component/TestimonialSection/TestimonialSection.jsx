import React from "react";

const testimonials = [
  {
    name: "Md. Rahim Uddin",
    position: "Small Business Owner",
    comment:
      "Using this platform, I can pay all my bills and manage finances easily from my shop. It's really a game changer!",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Nasima Akter",
    position: "Freelancer",
    comment:
      "I transfer money to my bank and recharge my phone in seconds. Super convenient and reliable!",
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Tanvir Hossain",
    position: "University Student",
    comment:
      "No need to stand in line anymore! I pay electricity and water bills from my phone. Very helpful.",
    image: "https://i.pravatar.cc/100?img=15",
  },
];

const TestimonialSection = () => {
  return (
    <section className="mt-10 md:mt-14 bg-gray-100 py-8">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12  md:mt-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-24">
          What Our Users Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((user, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-8 text-center mb-10 relative flex justify-center"
            >
              <div className="h-24 w-24 md:w-28 md:h-28 rounded-full border-[6px] border-gray-100 absolute top-0 -translate-y-1/2">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-black mt-12 mb-1">
                  {user.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{user.position}</p>
                <p className="text-base text-[#111111]">"{user.comment}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
