import toast, { Toaster } from 'react-hot-toast';

const PromiseToast = () => {
  const handlePromise = () => {
    toast.promise(
      // eslint-disable-next-line no-unused-vars
      new Promise((resolve, reject) => {
        setTimeout(() => resolve('Success!'), 2000);
      }),
      {
        loading: 'Processing...',
        success: 'Task completed!',
        error: 'Task failed!',
      }
    );
  };

  return (
    <div>
      <button onClick={handlePromise}>Show Promise Toast</button>
      <Toaster />
    </div>
  );
};

export default PromiseToast;
