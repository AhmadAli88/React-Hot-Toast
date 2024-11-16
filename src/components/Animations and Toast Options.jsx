import toast, { Toaster } from 'react-hot-toast';

const AnimatedToast = () => {
  const notify = () =>
    toast('Animated Toast!', {
      style: {
        animation: 'slideIn 0.5s ease',
      },
    });

  return (
    <div>
      <button onClick={notify}>Show Toast</button>
      <Toaster />
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedToast;
