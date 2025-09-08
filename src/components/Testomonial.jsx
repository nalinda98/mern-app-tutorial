import React from "react";
import Slider from "react-slick";

const testimonials = [
  // {
  //   id: 1,
  //   name: "Roger Scott",
  //   position: "Marketing Manager",
  // image: "/images/testinomial/person_1.jpg",
  //   text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  // },
  // {
  //   id: 2,
  //   name: "Roger Scott",
  //   position: "Marketing Manager",
  // image: "/images/testinomial/person_2.jpg",
  //   text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  // },
  // {
  //   id: 3,
  //   name: "Roger Scott",
  //   position: "Marketing Manager",
  // image: "/images/testinomial/person_3.jpg",
  //   text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  // },
  {
    id: 4,
    name: "Ayesh Perera",
    position: "Travel Blogger",
  image: "/images/testinomial/person_ (11).png",
    text: "Kandy Tours gave us an unforgettable experience through the heart of Sri Lanka. The guides were warm, professional, and knew all the hidden gems. Highly recommended for anyone looking to explore the cultural beauty of Kandy.",
  },
  {
    id: 5,
    name: "Liam Carter",
    position: "Photographer",
  image: "/images/testinomial/person_ (6).png",
    text: "From the stunning Temple of the Tooth to the scenic tea plantations, Kandy Tours made sure every stop was picture-perfect. Their timing and coordination were flawless!",
  },
  {
    id: 6,
    name: "Nandini Sharma",
    position: "Solo Traveler",
  image: "/images/testinomial/person_ (5).png",
    text: "As a solo traveler, I felt completely safe and taken care of. Kandy Tours created a personalized itinerary that let me enjoy both adventure and serenity. Truly a top-notch experience!",
  },
  {
    id: 7,
    name: "Julian Torres",
    position: "Travel Vlogger",
  image: "/images/testinomial/person_ (8).png",
    text: "Kandy Tours exceeded every expectation. Their attention to detail, deep local knowledge, and friendly service made for the most immersive cultural trip I've ever had.",
  },
  {
    id: 8,
    name: "Mei Lin",
    position: "Family Traveler",
  image: "/images/testinomial/person_ (9).png",
    text: "We booked a family package with Kandy Tours and it was perfect! From kids to grandparents, everyone was comfortable and happy. Educational, fun, and well organized.",
  },
  {
    id: 9,
    name: "Sofia Martinez",
    position: "Backpacker",
  image: "/images/testinomial/person_ (7).png",
    text: "Kandy Tours made my dream of exploring Sri Lanka come true! From the ancient city of Anuradhapura to the stunning beaches of Mirissa, every detail was perfectly organized. The guides made me feel like I was traveling with friends.",
  },
  {
    id: 10,
    name: "Haruki Tanaka",
    position: "Cultural Enthusiast",
  image: "/images/testinomial/person_ (3).png",
    text: "I joined Kandy Tours for a 10-day cultural trip and it was incredible. The visit to Sigiriya Rock Fortress at sunrise was unforgettable, and the local food recommendations were spot on!",
  },
  {
    id: 11,
    name: "Priya Nair",
    position: "Adventure Seeker",
  image: "/images/testinomial/person_ (12).png",
    text: "From hiking in Knuckles Mountain Range to white-water rafting in Kitulgala, Kandy Tours kept the adrenaline pumping while ensuring safety at every step. Truly a perfect blend of thrill and comfort.",
  },
  {
    id: 12,
    name: "David Thompson",
    position: "Wildlife Photographer",
  image: "/images/testinomial/person_ (13).png",
    text: "Kandy Tours knew exactly where to take me for the best wildlife shots. Thanks to them, I photographed wild elephants in Minneriya and leopards in Yala — a once-in-a-lifetime experience.",
  },
  {
    id: 13,
    name: "Amira Hassan",
    position: "Family Traveler",
  image: "/images/testinomial/person_ (2).png",
    text: "Traveling with kids can be tricky, but Kandy Tours made it stress-free. The itinerary balanced sightseeing with relaxation, and they even arranged kid-friendly activities at every stop.",
  },
  {
    id: 14,
    name: "Lucas Bennett",
    position: "Solo Backpacker",
  image: "/images/testinomial/person_ (10).png",
    text: "As a solo traveler, safety was my top concern, but Kandy Tours exceeded my expectations. Their guides were attentive without being intrusive, and I left Sri Lanka with both amazing memories and new friends.",
  },
  {
    id: 15,
    name: "Anjali Patel",
    position: "Food Blogger",
  image: "/images/testinomial/person_ (4).png",
    text: "Kandy Tours gave me a true taste of Sri Lanka — literally! From street food in Colombo to home-cooked meals in small villages, every bite was a new discovery.",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 1 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      className="ftco-section testimony-section bg-bottom"
      style={{ backgroundImage: "url(/images/bg_1.jpg)" }}
    >
      <div className="overlay" />
      <div className="container">
        <div className="row justify-content-center pb-4">
          <div
            className="col-md-7 text-center heading-section heading-section-white"
            data-aos="fade-up"
          >
            <span className="subheading">Testimonial</span>
            <h2 className="mb-4">Tourist Feedback</h2>
          </div>
        </div>
        <div className="row" data-aos="fade-up" data-aos-delay="200">
          <div className="col-md-12">
            <Slider {...settings}>
              {testimonials.map((t) => (
                <div key={t.id} className="px-3">
                  <div className="testimony-wrap py-4 bg-light rounded shadow-sm">
                    <div className="text">
                      <p className="star mb-2 text-warning">
                        {Array(5)
                          .fill()
                          .map((_, i) => (
                            <span className="fa fa-star" key={i} />
                          ))}
                      </p>
                      <p className="mb-4">{t.text}</p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img rounded-circle"
                          style={{
                            backgroundImage: `url("${t.image}")`,
                            width: "60px",
                            height: "60px",
                            backgroundSize: "cover",
                          }}
                        />
                        <div className="pl-3">
                          <p className="name mb-0">{t.name}</p>
                          <span className="position">{t.position}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
