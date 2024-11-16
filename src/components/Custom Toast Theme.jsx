import toast, { Toaster } from 'react-hot-toast';

const CustomThemeToast = () => {
  const notify = () => toast.success('Custom Themed Toast!');

  return (
    <div>
      <button onClick={notify}>Show Toast</button>
      <Toaster
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
    </div>
  );
};

export default CustomThemeToast;
