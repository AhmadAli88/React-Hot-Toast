import toast, { Toaster } from 'react-hot-toast';

const LoadingToast = () => {
  const handleApiCall = async () => {
    toast.loading('Loading...');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast.dismiss();
    toast.success('Data loaded successfully!');
  };

  return (
    <div>
      <button onClick={handleApiCall}>Load Data</button>
      <Toaster />
    </div>
  );
};

export default LoadingToast;
