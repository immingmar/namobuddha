import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 0;
  background-color: white;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #3a2921;
  text-align: center;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f1f1;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

const ProfileInfo = styled.div``;

const Name = styled.h3`
  font-weight: 700;
  color: #1f2937;
`;

const Location = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

const TestimonialText = styled.p`
  color: #4a4a4a;
  font-style: italic;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const Stars = styled.div`
  display: flex;
  color: #d4b96e;
`;

const StarIcon = ({ key }) => (
  <svg
    key={key}
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
    width="20"
    height="20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    avatar: "/placeholder.svg?height=100&width=100",
    text: "The Green Tara thangka I purchased is absolutely stunning. The attention to detail and vibrant colors exceed my expectations. It's become the centerpiece of my meditation space.",
  },
  {
    name: "David Chen",
    location: "Vancouver, Canada",
    avatar: "/placeholder.svg?height=100&width=100",
    text: "I've been collecting thangka art for years, and the quality of the pieces from this shop is exceptional. The shipping was secure and the painting arrived in perfect condition.",
  },
  {
    name: "Amelia Patel",
    location: "London, UK",
    avatar: "/placeholder.svg?height=100&width=100",
    text: "Not only is the Medicine Buddha thangka beautiful, but the customer service was outstanding. They helped me understand the symbolism and meaning behind the artwork.",
  },
];

export default function TestimonialSection() {
  return (
    <Section>
      <Container>
        <Title>What Our Customers Say</Title>
        <Grid>
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <Profile>
                <Avatar src={testimonial.avatar} alt={testimonial.name} />
                <ProfileInfo>
                  <Name>{testimonial.name}</Name>
                  <Location>{testimonial.location}</Location>
                </ProfileInfo>
              </Profile>
              <TestimonialText>"{testimonial.text}"</TestimonialText>
              <Stars>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </Stars>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}