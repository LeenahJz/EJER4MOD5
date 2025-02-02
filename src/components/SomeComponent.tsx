import React from 'react';
import DOMPurify from 'dompurify';

interface SomeComponentProps {
    userInput: string;
  }
  
  const SomeComponent: React.FC<SomeComponentProps> = ({ userInput }) => {
    const sanitizedInput = DOMPurify.sanitize(userInput);
    return <div dangerouslySetInnerHTML={{ __html: sanitizedInput }} />;
  };
  
  export default SomeComponent;
  