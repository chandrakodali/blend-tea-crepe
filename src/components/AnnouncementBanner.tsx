import { useState } from 'react';
import { X } from 'lucide-react';
import './AnnouncementBanner.css';

interface AnnouncementBannerProps {
    message: string;
    emoji?: string;
}

const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({
    message,
    emoji = '📢',
}) => {
    const [dismissed, setDismissed] = useState(false);

    if (dismissed) return null;

    return (
        <div className="announcement-banner">
            <div className="container announcement-container">
                <span className="announcement-emoji">{emoji}</span>
                <p className="announcement-message">{message}</p>
                <span className="announcement-sign">— Ming</span>
                <button
                    className="announcement-dismiss"
                    onClick={() => setDismissed(true)}
                    aria-label="Dismiss announcement"
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    );
};

export default AnnouncementBanner;
