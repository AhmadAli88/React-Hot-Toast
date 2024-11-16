import toast, { Toaster } from 'react-hot-toast';

const PersistentToast = () => {
  const showToast = () => {
    const id = toast('Starting...', {
      duration: Infinity,
    });

    setTimeout(() => {
      toast.update(id, {
        render: 'Almost done...',
        type: 'loading',
      });
    }, 2000);

    setTimeout(() => {
      toast.update(id, {
        render: 'Completed!',
        type: 'success',
        duration: 3000,
      });
    }, 4000);
  };

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>
      <Toaster />
    </div>
  );
};

export default PersistentToast;
