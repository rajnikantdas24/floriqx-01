export default function SearchPopup({ open, onClose }) {
  return (
    <>
      <div className={`search-popup${open ? ' active' : ''}`}>
        <form className="search-form">
          <input type="text" placeholder="Enter Keywords..." required />{' '}
          <button type="submit" className="submit-btn">
            <img src="/assets/images/icon/search.svg" alt="Search Icon" />
          </button>
        </form>
      </div>
      <div className={`search-overlay${open ? ' active' : ''}`} onClick={onClose} />
    </>
  );
}
