import toast, { Toaster } from 'react-hot-toast';

const CustomContentToast = () => {
  const notify = () =>
    toast(
      <div>
        <strong>Important!</strong>
        <p>This is a custom toast message.</p>
      </div>
    );

  return (
    <div>
      <button onClick={notify}>Show Custom Toast</button>
      <Toaster />
    </div>
  );
};

export default CustomContentToast;
