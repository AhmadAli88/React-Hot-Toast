import toast, { Toaster } from 'react-hot-toast';

const ToastPosition = () => {
  const notify = () => toast('This toast is at the bottom-left!', { position: 'bottom-left' });

  return (
    <div>
      <button onClick={notify}>Show Toast</button>
      <Toaster />
    </div>
  );
};

export default ToastPosition;
