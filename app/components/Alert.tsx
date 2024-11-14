import React from 'react';
import { X, AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react';

type AlertProps = {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  message: string;
  onClose?: () => void;
  showIcon?: boolean;
  className?: string;
};

const Alert: React.FC<AlertProps> = ({ 
  variant = 'info',
  title,
  message,
  onClose,
  showIcon = true,
  className = ''
}) => {
  const variants = {
    info: {
      baseClass: 'bg-blue-500/20 border-blue-500/50 text-blue-500',
      icon: Info,
    },
    success: {
      baseClass: 'bg-emerald-500/20 border-emerald-500/50 text-emerald-500',
      icon: CheckCircle,
    },
    warning: {
      baseClass: 'bg-yellow-500/20 border-yellow-500/50 text-yellow-500',
      icon: AlertTriangle,
    },
    error: {
      baseClass: 'bg-red-500/20 border-red-500/50 text-red-500',
      icon: AlertCircle,
    },
  };

  const { baseClass, icon: Icon } = variants[variant];

  return (
    <div className={`relative flex items-start gap-3 p-4 rounded-lg border ${baseClass} ${className}`}>
      {showIcon && <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />}
      <div className="flex-1">
        {title && <h5 className="font-medium mb-1">{title}</h5>}
        <p className="text-sm opacity-90">{message}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="p-1 hover:bg-slate-700/50 rounded-full transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

// Optional: Separate component for AlertDescription
type AlertDescriptionProps = {
  children: React.ReactNode;
  className?: string;
};

const AlertDescription: React.FC<AlertDescriptionProps> = ({ children, className = '' }) => (
  <p className={`text-sm opacity-90 ${className}`}>{children}</p>
);

export { Alert, AlertDescription };
