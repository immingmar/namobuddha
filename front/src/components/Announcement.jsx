import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  background: linear-gradient(135deg, #8b0b08, #a50d0d);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: slideIn 1s ease-out;

  @keyframes slideIn {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

const Announcement = () => {
  return (
    <Container>
      Super Deal! Free shipping on Orders Over $50
    </Container>
  );
};

export default Announcement;