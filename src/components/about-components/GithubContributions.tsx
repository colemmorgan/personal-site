import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ContributionsData {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
        };
      };
    };
  };
}

interface Props {
  username: string;
}

const GitHubContributions: React.FC<Props> = ({ username }) => {
  const [contributions, setContributions] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      const token = '';
      const query = `
        query {
          user(login: "${username}") {
            contributionsCollection(from: "2024-01-01T00:00:00Z", to: "2024-12-31T23:59:59Z") {
              contributionCalendar {
                totalContributions
              }
            }
          }
        }
      `;

      try {
        const response = await axios.post<ContributionsData>(
          'https://api.github.com/graphql',
          { query },
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        setContributions(response.data.data.user.contributionsCollection.contributionCalendar.totalContributions);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      }
    };

    fetchContributions();
  }, [username]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (contributions === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>GitHub Contributions for {username} in 2024</h2>
      <p>Total contributions: {contributions}</p>
    </div>
  );
};

export default GitHubContributions;