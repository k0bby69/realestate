import "./testimonials.scss";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Kwame Mensah",
      role: "Property Buyer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
      rating: 5,
      text: "OA Realty made finding my dream home incredibly easy. Their team was professional, patient, and guided me through every step of the process. Highly recommended!"
    },
    {
      id: 2,
      name: "Ama Serwaa",
      role: "Property Seller",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      rating: 5,
      text: "I was amazed at how quickly they sold my property. The team's market knowledge and negotiation skills are top-notch. Worth every penny!"
    },
    {
      id: 3,
      name: "John Appiah",
      role: "Investor",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      rating: 5,
      text: "As an investor, I appreciate their buy-to-let consultation service. They helped me find profitable properties and manage everything seamlessly."
    },
    {
      id: 4,
      name: "Abena Osei",
      role: "First-Time Buyer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      rating: 5,
      text: "Being a first-time buyer was overwhelming, but OA Realty's team made it stress-free. They explained everything clearly and found me the perfect starter home."
    }
  ];

  return (
    <div className="testimonials">
      <div className="testimonialsHeader">
        <h2>What Our Clients Say</h2>
        <p>Don't just take our word for it - hear from our satisfied clients</p>
      </div>

      <div className="testimonialsGrid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonialCard">
            <div className="stars">
              {[...Array(testimonial.rating)].map((_, index) => (
                <i key={index} className="fas fa-star"></i>
              ))}
            </div>
            
            <p className="testimonialText">"{testimonial.text}"</p>
            
            <div className="testimonialAuthor">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                onError={(e) => { e.target.src = '/noavatar.jpg'; }}
              />
              <div className="authorInfo">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
