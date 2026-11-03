import { format, formatDistanceToNow, isToday } from 'date-fns';
import { id, enUS } from 'date-fns/locale';
import { useEffect, useState } from 'react';

const ChatTime = ({ locale, datetime }) => {
    const currentLocale = locale === 'id' ? id : enUS;
    const date = new Date(datetime);

    const [formattedTime, setFormattedTime] = useState(
        formatDistanceToNow(date, { addSuffix: true, locale: currentLocale })
    );

    useEffect(() => {
        // Langsung update saat locale atau datetime berubah
        setFormattedTime(
            formatDistanceToNow(date, { addSuffix: true, locale: currentLocale })
        );

        const interval = setInterval(() => {
            setFormattedTime(
                formatDistanceToNow(date, { addSuffix: true, locale: currentLocale })
            );
        }, 60000);

        return () => clearInterval(interval);
    }, [currentLocale, datetime]);

    return (
        <div className="text-xs text-neutral-500">
            {isToday(date)
                ? formattedTime
                : format(date, 'dd MMMM yyyy, HH:mm', { locale: currentLocale })}
        </div>
    );
};

export default ChatTime;
