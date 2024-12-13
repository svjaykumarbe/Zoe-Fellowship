import React, { useState, useEffect, useCallback } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Memoized calculateTimeLeft function to avoid dependency issues
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }, [targetDate]);

  // Update timer every second
  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <div style={{ flex: 1 }}>
        <h3>Zoe International Ministries Online Service</h3>
        
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', backgroundColor: '#333', color: '#fff', padding: '10px 20px', borderRadius: '8px' }}>
        <div>
          <h4>{String(timeLeft.days).padStart(2, '0')}</h4>
          <span>Days</span>
        </div>
        <div>
          <h4>{String(timeLeft.hours).padStart(2, '0')}</h4>
          <span>Hours</span>
        </div>
        <div>
          <h4>{String(timeLeft.minutes).padStart(2, '0')}</h4>
          <span>Minutes</span>
        </div>
        <div>
          <h4>{String(timeLeft.seconds).padStart(2, '0')}</h4>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
