import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Chart from 'chart.js/auto';

const GitHubActivityChart = () => {
  const [daysToFetch, setDaysToFetch] = useState(5);
  const chartRef = useRef(null); // Reference to the canvas
  const chartInstanceRef = useRef(null); // Reference to the chart instance
  const USERNAME = 'Sandeepkumar136'; // Replace with your GitHub username
  const BASE_URL = 'https://api.github.com';

  // Fetch events from GitHub API
  const getAllEvents = async (username, days) => {
    let allEvents = [];
    let page = 1;
    const sinceDate = new Date();
    sinceDate.setDate(sinceDate.getDate() - days);
    const since = sinceDate.toISOString();

    try {
      while (true) {
        const url = `${BASE_URL}/users/${username}/events?page=${page}&per_page=100`;
        const response = await axios.get(url);
        const events = response.data;

        if (events.length === 0) break;

        const filteredEvents = events.filter(event => new Date(event.created_at) >= sinceDate);
        allEvents = [...allEvents, ...filteredEvents];
        page++;
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    }
    return allEvents;
  };

  // Process events to extract data for chart
  const processEvents = (events) => {
    const data = {};
    events.forEach(event => {
      const eventDate = new Date(event.created_at);
      const dateKey = eventDate.toISOString().split('T')[0];

      if (!data[dateKey]) {
        data[dateKey] = { repoCreations: 0, commits: 0 };
      }

      if (event.type === 'CreateEvent' && event.payload.ref_type === 'repository') {
        data[dateKey].repoCreations++;
      }

      if (event.type === 'PushEvent') {
        data[dateKey].commits += event.payload.commits.length;
      }
    });
    return data;
  };

  // Render the chart
  const renderChart = async () => {
    const allEvents = await getAllEvents(USERNAME, daysToFetch);
    const data = processEvents(allEvents);

    const today = new Date();
    const dates = Array.from({ length: daysToFetch }, (_, i) => {
      const date = new Date();
      date.setDate(today.getDate() - i);
      return date.toISOString().split('T')[0];
    }).reverse();

    const repoCreations = dates.map(date => data[date]?.repoCreations || 0);
    const commitCounts = dates.map(date => data[date]?.commits || 0);

    // Destroy previous chart instance before rendering a new one
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            label: 'Repositories Created',
            data: repoCreations,
            fill: false,
            borderColor: 'rgba(255, 99, 132, 1)',
            tension: 0.1,
          },
          {
            label: 'Commits',
            data: commitCounts,
            fill: false,
            borderColor: 'rgba(54, 162, 235, 1)',
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Important for full-screen responsiveness
        scales: {
          y: { beginAtZero: true },
        },
      },
    });
  };

  // Handle form submit to set days and rerender the chart
  const handleSubmit = (e) => {
    e.preventDefault();
    if (daysToFetch < 5 || daysToFetch > 90) {
      alert('Please enter a number between 5 and 90.');
    } else {
      renderChart();
    }
  };

  useEffect(() => {
    renderChart(); // Initial render when the component mounts
    return () => {
      // Clean up the chart instance on component unmount
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="chart-container"
    >
      <form className='git-form' onSubmit={handleSubmit}>
        <label className='git-label' htmlFor="git_days">Days to fetch (5-90):</label>
        <input
          type="number"
          id="git_days"
          value={daysToFetch}
          onChange={(e) => setDaysToFetch(e.target.value)}
        />
        <button className='git-btn' type="submit">Fetch Data</button>
      </form>
      <div className="chart-wrapper">
        <canvas ref={chartRef} id="activityChart"></canvas>
      </div>
    </motion.div>
  );
};

export default GitHubActivityChart;
