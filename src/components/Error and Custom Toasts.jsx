import toast, { Toaster } from 'react-hot-toast';

const ErrorToast = () => {
  const showError = () => toast.error('Something went wrong!');
  const showCustom = () =>
    toast('Custom Message', {
      icon: '🚀',
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
    });

  return (
    <div>
      <button onClick={showError}>Show Error Toast</button>
      <button onClick={showCustom}>Show Custom Toast</button>
      <Toaster />
    </div>
  );
};

export default ErrorToast;
