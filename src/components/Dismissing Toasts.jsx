import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const DismissToast = () => {
  const toastId = React.useRef(null);

  const showToast = () => {
    toastId.current = toast('This is a persistent toast', {
      duration: Infinity,
    });
  };

  const dismissToast = () => toast.dismiss(toastId.current);
  const clearAllToasts = () => toast.dismiss();

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>
      <button onClick={dismissToast}>Dismiss Toast</button>
      <button onClick={clearAllToasts}>Clear All Toasts</button>
      <Toaster />
    </div>
  );
};

export default DismissToast;
