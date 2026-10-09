import React from 'react';

// High-fidelity SVG Logos for Technology Stacks
export const PythonLogo = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M11.91 2C6.91 2 7.23 4.17 7.23 4.17L7.24 6.42H12.02V7.17H5.25C5.25 7.17 2 6.8 2 11.83C2 16.86 4.84 16.63 4.84 16.63H6.51V14.28C6.51 14.28 6.42 11.45 9.29 11.45H14.07C14.07 11.45 16.8 11.54 16.8 8.84V4.28C16.8 4.28 17.18 2 11.91 2ZM9.68 3.51C10.23 3.51 10.68 3.96 10.68 4.51C10.68 5.06 10.23 5.51 9.68 5.51C9.13 5.51 8.68 5.06 8.68 4.51C8.68 3.96 9.13 3.51 9.68 3.51Z" fill="#3776AB"/>
    <path d="M12.09 22C17.09 22 16.77 19.83 16.77 19.83L16.76 17.58H11.98V16.83H18.75C18.75 16.83 22 17.2 22 12.17C22 7.14 19.16 7.37 19.16 7.37H17.49V9.72C17.49 9.72 17.58 12.55 14.71 12.55H9.93C9.93 12.55 7.2 12.46 7.2 15.16V19.72C7.2 19.72 6.82 22 12.09 22ZM14.32 20.49C13.77 20.49 13.32 20.04 13.32 19.49C13.32 18.94 13.77 18.49 14.32 18.49C14.87 18.49 15.32 18.94 15.32 19.49C15.32 20.04 14.87 20.49 14.32 20.49Z" fill="#FFD43B"/>
  </svg>
);

export const PyTorchLogo = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M13.5 2.5L12 4L13.5 5.5C16.81 5.5 19.5 8.19 19.5 11.5C19.5 14.81 16.81 17.5 13.5 17.5H10.5V19.5H13.5C17.92 19.5 21.5 15.92 21.5 11.5C21.5 7.08 17.92 2.5 13.5 2.5Z" fill="#EE4C2C"/>
    <circle cx="16.5" cy="5.5" r="1.5" fill="#EE4C2C"/>
    <path d="M10.5 7.5H7.5C5.29 7.5 3.5 9.29 3.5 11.5C3.5 13.71 5.29 15.5 7.5 15.5H10.5V13.5H7.5C6.4 13.5 5.5 12.6 5.5 11.5C5.5 10.4 6.4 9.5 7.5 9.5H10.5V7.5Z" fill="#EE4C2C"/>
  </svg>
);

export const TensorFlowLogo = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L3 7V17L7.5 19.5V11L12 8.5V2Z" fill="#FF6F00"/>
    <path d="M12 2L21 7V17L16.5 19.5V11L12 8.5V2Z" fill="#FFA800"/>
    <path d="M7.5 14.5L12 12V22L7.5 19.5V14.5Z" fill="#FF6F00"/>
    <path d="M16.5 14.5L12 12V22L16.5 19.5V14.5Z" fill="#FFA800"/>
  </svg>
);

export const PowerBILogo = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="12" width="4.5" height="9" rx="1.5" fill="#F2C811"/>
    <rect x="9.5" y="7" width="4.5" height="14" rx="1.5" fill="#F2C811"/>
    <rect x="16" y="3" width="4.5" height="18" rx="1.5" fill="#F2C811"/>
  </svg>
);

export const OpenCVLogo = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="7" r="4" stroke="#EA212D" strokeWidth="2.5"/>
    <circle cx="7" cy="16" r="4" stroke="#5C8DBC" strokeWidth="2.5"/>
    <circle cx="17" cy="16" r="4" stroke="#68A51D" strokeWidth="2.5"/>
  </svg>
);

export const LaravelLogo = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M4 8L12 3L20 8V16L12 21L4 16V8Z" fill="#FF2D20" opacity="0.15"/>
    <path d="M12 3L20 8L12 13L4 8L12 3Z" stroke="#FF2D20" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M4 8V16L12 21V13L4 8Z" stroke="#FF2D20" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M20 8V16L12 21V13L20 8Z" stroke="#FF2D20" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

export const LeafletLogo = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 12 22 12 22C12 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#74AC00" opacity="0.2"/>
    <path d="M6 13C6 13 8 7 14 6C14 6 15 11 11 15C8 18 6 13 6 13Z" fill="#74AC00"/>
    <path d="M11 15L15 20" stroke="#74AC00" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const PostgreSQLLogo = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" fill="#336791" opacity="0.15"/>
    <path d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM14.5 15C13.5 16 11.5 16 10.5 15C10 14.5 9.8 13.8 10 13L11 8H13L14 13C14.2 13.8 14 14.5 14.5 15Z" fill="#336791"/>
  </svg>
);

export const DockerLogo = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="7" y="10" width="2" height="2" fill="#2496ED"/>
    <rect x="10" y="10" width="2" height="2" fill="#2496ED"/>
    <rect x="13" y="10" width="2" height="2" fill="#2496ED"/>
    <rect x="10" y="7" width="2" height="2" fill="#2496ED"/>
    <rect x="13" y="7" width="2" height="2" fill="#2496ED"/>
    <rect x="16" y="10" width="2" height="2" fill="#2496ED"/>
    <path d="M22 13C21.5 12.5 20.2 12.3 19.5 12.8C19.2 12.2 18.5 11.8 17.5 12C17.5 11 16.5 10.5 15.5 10.5H5C3.5 10.5 2 12 2 13.5C2 17 5 19 12 19C18.5 19 21.5 16 22 13Z" fill="#2496ED" opacity="0.3"/>
    <path d="M22 13C21.5 12.5 20.2 12.3 19.5 12.8C18.5 12.2 17.5 12 17.5 12C17.5 11 16.5 10.5 15.5 10.5H5C3.5 10.5 2 12 2 13.5C2 17 5 19 12 19C18.5 19 21.5 16 22 13Z" stroke="#2496ED" strokeWidth="1.5"/>
  </svg>
);

export const YOLOLogo = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#00D2FF" strokeWidth="2"/>
    <circle cx="12" cy="12" r="5" stroke="#00D2FF" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="2" fill="#00D2FF"/>
    <line x1="12" y1="2" x2="12" y2="5" stroke="#00D2FF" strokeWidth="2"/>
    <line x1="12" y1="19" x2="12" y2="22" stroke="#00D2FF" strokeWidth="2"/>
    <line x1="2" y1="12" x2="5" y2="12" stroke="#00D2FF" strokeWidth="2"/>
    <line x1="19" y1="12" x2="22" y2="12" stroke="#00D2FF" strokeWidth="2"/>
  </svg>
);

export const ScikitLearnLogo = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="8" cy="9" r="5" fill="#F89939" opacity="0.8"/>
    <circle cx="16" cy="14" r="5" fill="#3499CD" opacity="0.8"/>
    <path d="M12 7L13 16" stroke="#fff" strokeWidth="1.5"/>
  </svg>
);

export const FlaskLogo = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M9 3H15M10 3V8L5 18C4.5 19 5.2 20 6.3 20H17.7C18.8 20 19.5 19 19 18L14 8V3" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dark:stroke-white"/>
  </svg>
);

export const GitLogo = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M21.6 10.9L13.1 2.4C12.6 1.9 11.7 1.9 11.2 2.4L9.3 4.3L11.7 6.7C12.3 6.5 13 6.6 13.5 7.1C14 7.6 14.1 8.4 13.8 9L16.2 11.4C16.8 11.1 17.6 11.2 18.1 11.7C18.8 12.4 18.8 13.5 18.1 14.2C17.4 14.9 16.3 14.9 15.6 14.2C15.1 13.7 15 12.9 15.3 12.3L13.1 10.1V14.8C13.3 15 13.4 15.3 13.4 15.6C13.4 16.7 12.5 17.6 11.4 17.6C10.3 17.6 9.4 16.7 9.4 15.6C9.4 14.8 9.9 14.1 10.6 13.8V8.9C9.9 8.6 9.4 7.9 9.4 7.1C9.4 6.7 9.5 6.4 9.7 6.1L7.4 3.8L2.4 8.8C1.9 9.3 1.9 10.2 2.4 10.7L10.9 19.2C11.4 19.7 12.3 19.7 12.8 19.2L21.6 10.4C22.1 10.6 22.1 11.4 21.6 10.9Z" fill="#F05032"/>
  </svg>
);

export const RAGLogo = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="16" rx="3" stroke="#8B5CF6" strokeWidth="2"/>
    <path d="M7 8H17M7 12H13M7 16H11" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="14" r="2.5" fill="#8B5CF6"/>
  </svg>
);

export const SCMEnterpriseLogo = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="7" width="20" height="13" rx="2" stroke="#E4002B" strokeWidth="1.8"/>
    <path d="M6 7V5C6 3.9 6.9 3 8 3H16C17.1 3 18 3.9 18 5V7" stroke="#E4002B" strokeWidth="1.8"/>
    <path d="M12 11V15M10 13H14" stroke="#E4002B" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

// Helper function to match tech string to SVG logo
export function getTechLogo(techName, className = "w-3.5 h-3.5") {
  if (!techName) return null;
  const name = techName.toLowerCase();

  if (name.includes('python')) return <PythonLogo className={className} />;
  if (name.includes('pytorch')) return <PyTorchLogo className={className} />;
  if (name.includes('tensorflow') || name.includes('keras')) return <TensorFlowLogo className={className} />;
  if (name.includes('power bi') || name.includes('power query')) return <PowerBILogo className={className} />;
  if (name.includes('opencv') || name.includes('roboflow') || name.includes('computer vision')) return <OpenCVLogo className={className} />;
  if (name.includes('laravel') || name.includes('php')) return <LaravelLogo className={className} />;
  if (name.includes('leaflet') || name.includes('gis') || name.includes('geojson')) return <LeafletLogo className={className} />;
  if (name.includes('postgres') || name.includes('mysql') || name.includes('sql')) return <PostgreSQLLogo className={className} />;
  if (name.includes('docker')) return <DockerLogo className={className} />;
  if (name.includes('yolo') || name.includes('gelan')) return <YOLOLogo className={className} />;
  if (name.includes('scikit') || name.includes('catboost') || name.includes('lightgbm') || name.includes('boosting')) return <ScikitLearnLogo className={className} />;
  if (name.includes('flask')) return <FlaskLogo className={className} />;
  if (name.includes('git') || name.includes('github')) return <GitLogo className={className} />;
  if (name.includes('rag') || name.includes('llama') || name.includes('llm') || name.includes('prompt')) return <RAGLogo className={className} />;
  if (name.includes('isdp') || name.includes('supply chain') || name.includes('scm') || name.includes('erp') || name.includes('sla')) return <SCMEnterpriseLogo className={className} />;

  return null;
}
