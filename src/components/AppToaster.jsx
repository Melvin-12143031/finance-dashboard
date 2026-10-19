
import { Toaster } from 'react-hot-toast'

const AppToaster = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          borderRadius: '12px',
          background: '#1f2937',
          color: '#fff',
          fontSize: '14px',
          padding: '12px 16px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
        },
        success: {
          iconTheme: {
            primary: '#22c55e',
            secondary: '#fff',
          },
        },
        error: {
          iconTheme: {
            primary: '#ef4444',
            secondary: '#fff',
          },
        },
      }}
    />
  )
}

export default AppToaster
