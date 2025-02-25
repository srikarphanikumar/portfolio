'use client';
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const EmailContent = ({ content }) => {
  const { currentTheme } = useTheme();

  return (
    <div className="flex-1 overflow-auto">
      <div
        className={`
                    prose prose-sm md:prose-base lg:prose-lg max-w-none
                    ${currentTheme.text}
                    prose-headings:${currentTheme.text}
                    prose-p:${currentTheme.text}
                    prose-strong:${currentTheme.text}
                    prose-ul:${currentTheme.text}
                    prose-li:${currentTheme.text}
                    [&>ul]:list-disc [&>ul]:ml-6 
                    [&>p]:mb-4 [&>p]:leading-relaxed
                    [&>ul>li]:mb-2 [&>ul>li>ul]:mt-2 [&>ul>li>ul]:ml-4
                    [&_img]:rounded-lg [&_img]:max-w-full [&_img]:h-auto
                    overflow-auto
                `}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default EmailContent;