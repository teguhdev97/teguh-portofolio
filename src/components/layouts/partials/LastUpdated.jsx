import { useState, useEffect } from 'react';

const LastUpdated = ({ lastUpdate, t }) => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    if (lastUpdate) {
      const date = new Date(lastUpdate);
      setFormattedDate(
        date.toLocaleDateString(undefined, {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })
      );
    }
  }, [lastUpdate]);

  return (
    <div className="text-sm text-gray-500 dark:text-gray-400">
      {t('lastupdate')}: <time>{formattedDate}</time>
    </div>
  );
};

export default LastUpdated;
