import { FaExclamationTriangle } from 'react-icons/fa'
interface ErrorProps {
    message?: string;
}

const ErrorPage = ({ message }: ErrorProps): JSX.Element => {

  return (
    <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md mb-4">
      <FaExclamationTriangle className="inline text-red-500 text-5xl" />
      <p className="font-medium">{message}</p>
    </div>
  );
};

export default ErrorPage;
