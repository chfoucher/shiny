import { useEffect, useState } from 'react';
import { Loader } from '../utils/Atoms';
import styled from 'styled-components';
import '../App.css';
import Card from '../components/Card';
const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`;

function Freelances() {
  const [isDataLoading, setDataLoading] = useState(true);
  const [freelanceProfiles, setFreelanceProfiles] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8000/freelances');
        const { freelancersList } = await response.json();
        setFreelanceProfiles(freelancersList);
      } catch (error) {
        console.error(error);
      } finally {
        setDataLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
      {isDataLoading ? (
        <Loader />
      ) : (
        <CardsContainer>
          {freelanceProfiles.map((profile) => (
            <Card
              key={`${profile.name}-${profile.id}`}
              label={profile.job}
              picture={profile.picture}
              title={profile.name}
            />
          ))}
        </CardsContainer>
      )}
    </div>
  );
}

export default Freelances;
