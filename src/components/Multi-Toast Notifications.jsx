import toast, { Toaster } from 'react-hot-toast';

const MultiToast = () => {
  const notifyAll = () => {
    toast.success('First toast!');
    toast.error('Second toast!');
    toast('Third toast!');
  };

  return (
    <div>
      <button onClick={notifyAll}>Show Multiple Toasts</button>
      <Toaster />
    </div>
  );
};

export default MultiToast;
