import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnimatedCounter from '../motion-components/AnimatedCounter';

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

}

const GitHubContributions: React.FC<Props> = ({ }) => {
  const [contributions, setContributions] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true)
  const apiKey = import.meta.env.VITE_GITHUB_API_KEY;

  useEffect(() => {
    const fetchContributions = async () => {
      const query = `
        query {
          user(login: "colemmorgan") {
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
              'Authorization': `Bearer ${apiKey}`,
              'Content-Type': 'application/json',
            },
          }
        );

        setContributions(response.data.data.user.contributionsCollection.contributionCalendar.totalContributions);
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      }
    };

    fetchContributions();
  }, []);

  if (error) {
    return ("Error");
  }

  if(loading) {
    return "0"
  }

  if (contributions === null) {
    return "0";
  }

  return (
  
      <AnimatedCounter from={contributions - 100} to={contributions} />

  );
};

export default GitHubContributions;