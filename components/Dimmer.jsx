const Dimmer = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          {children}
        </div>
      )}
    </>
  );
};

export default Dimmer;
