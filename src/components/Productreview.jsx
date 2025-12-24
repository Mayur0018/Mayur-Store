import React from "react";

const reviews = [
  {
    name: "Emily Carter",
    image: "https://readymadeui.com/team-2.webp",
    title: "Quick and Easy Experience",
    text: "Everything was seamless. Ordering was simple and the response time was super fast. Highly recommend to anyone looking for convenience and speed.",
    days: "2 days ago",
  },
  {
    name: "Daniel Kim",
    image: "https://readymadeui.com/team-3.webp",
    title: "Fantastic Support",
    text: "Had a few questions before ordering and the customer service team was amazing—super responsive and knowledgeable.",
    days: "3 days ago",
  },
  {
    name: "Priya Singh",
    image: "https://readymadeui.com/team-4.webp",
    title: "Exceeded Expectations",
    text: "From start to finish, I felt taken care of. The ordering process was smooth and the delivery was right on time.",
    days: "4 days ago",
  },
  {
    name: "Liam Brown",
    image: "https://readymadeui.com/team-5.webp",
    title: "Highly Recommended",
    text: "Very impressed by the quality and speed. I’ll definitely be coming back.",
    days: "5 days ago",
  },
];

const Star = () => (
  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
    <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
  </svg>
);

const ProductReview = () => {
  return (
    <div className="py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-slate-900 mb-3">
          All reviews
        </h3>

        <div className="divide-y divide-gray-300">
          {reviews.map((review, index) => (
            <div key={index} className="py-6">
              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-10 h-2 rounded-full object-cover border-2 border-gray-400"
                />
                <div>
                  <p className="text-[15px] font-semibold text-slate-900">
                    {review.name}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-4 h-4 flex items-center justify-center rounded-full bg-green-600/20">
                      ✔
                    </span>
                    <p className="text-xs text-slate-600">Verified Buyer</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h6 className="text-base font-semibold text-slate-900">
                  {review.title}
                </h6>

                <div className="flex items-center text-yellow-400 mt-2 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} />
                  ))}
                  <p className="text-sm text-slate-600 ml-2">
                    {review.days}
                  </p>
                </div>

                <p className="mt-4 text-[15px] text-slate-600 leading-relaxed">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
