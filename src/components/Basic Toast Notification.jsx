import toast, { Toaster } from 'react-hot-toast';

const BasicToast = () => {
  const notify = () => toast.success('Operation Successful!');

  return (
    <div>
      <button onClick={notify}>Show Toast</button>
      <Toaster />
    </div>
  );
};

export default BasicToast;
