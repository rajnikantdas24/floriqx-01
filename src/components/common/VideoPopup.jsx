import { VIDEO_URL } from '../../context/VideoPopupContext';

export default function VideoPopup({ isOpen, onClose }) {
  return (
    <div
      className={`video-popup${isOpen ? ' active' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="video-popup-inner">
        <span className="video-close" onClick={onClose}>
          &times;
        </span>
        {/* new key on close = iframe is recreated, which stops the video (original set src="") */}
        <iframe key={isOpen ? 'playing' : 'idle'} allow="autoplay; fullscreen" src={isOpen ? VIDEO_URL : undefined} />
      </div>
    </div>
  );
}
