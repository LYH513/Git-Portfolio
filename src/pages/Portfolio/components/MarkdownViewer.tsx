import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownViewerProps {
  content: string;
}

export default function MarkdownViewer({ content }: MarkdownViewerProps) {
  // \n을 실제 줄바꿈으로 변환
  const processedContent = content.replace(/\\n/g, '\n');

  return (
    <Container>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{processedContent}</ReactMarkdown>
    </Container>
  );
}

const Container = styled.div`
  max-width: 100%;
  word-wrap: break-word;

  /* 마크다운 스타일링 */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
    line-height: 1.25;
  }

  h1 {
    font-size: 2rem;
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.5rem;
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.75;
  }

  ul,
  ol {
    margin-bottom: 1rem;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  code {
    background-color: #f3f4f6;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-size: 0.875em;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  }

  pre {
    background-color: #1f2937;
    color: #f9fafb;
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin-bottom: 1rem;

    code {
      background-color: transparent;
      color: inherit;
      padding: 0;
    }
  }

  blockquote {
    border-left: 4px solid #2563eb;
    padding-left: 1rem;
    margin-left: 0;
    margin-bottom: 1rem;
    color: #6b7280;
    font-style: italic;
  }

  a {
    color: #2563eb;
    text-decoration: underline;

    &:hover {
      color: #1d4ed8;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    background-color: white;
  }

  th,
  td {
    border: 1px solid #e5e7eb;
    padding: 0.75rem 1rem;
    text-align: left;
    vertical-align: top;
  }

  th {
    background-color: #f9fafb;
    font-weight: 600;
    color: #111827;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  td {
    color: #374151;
    font-size: 0.875rem;
    line-height: 1.5;
  }

  tr:nth-of-type(even) {
    background-color: #f9fafb;
  }

  tr:hover {
    background-color: #f3f4f6;
  }

  /* 반응형 테이블 */
  @media (max-width: 768px) {
    table {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
    }

    th,
    td {
      padding: 0.5rem;
      font-size: 0.8125rem;
    }
  }

  hr {
    border: none;
    border-top: 1px solid #e5e7eb;
    margin: 2rem 0;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin: 1rem 0;
  }
`;

