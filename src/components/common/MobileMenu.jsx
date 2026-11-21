import NavMenu from './NavMenu';

export default function MobileMenu({ open, onClose, onePage }) {
  return (
    <>
      <div className={`mobile-menu${open ? ' active' : ''}`}>
        {/* Close Button */}
        <div className="close-btn" onClick={onClose}>
          <img src="/assets/images/icon/xmark2.svg" alt="Close Menu" />
        </div>
        <NavMenu variant="mobile" onePage={onePage} />
      </div>
      <div className={`menu-overlay${open ? ' active' : ''}`} onClick={onClose} />
    </>
  );
}
