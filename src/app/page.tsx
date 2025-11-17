'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [widgetKey, setWidgetKey] = useState('');

  useEffect(() => {
    const keyFromUrl = searchParams.get('widgetKey');
    if (keyFromUrl) {
      setWidgetKey(keyFromUrl);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (widgetKey.trim()) {
      router.push(`?widgetKey=${encodeURIComponent(widgetKey)}`);
    }
  };

  const currentWidgetKey = searchParams.get('widgetKey');

  return (
    <main style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '500px',
        width: '100%'
      }}>
        <h1 style={{
          fontSize: '2rem',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          Gleap Demo
        </h1>

        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <input
            type="text"
            value={widgetKey}
            onChange={(e) => setWidgetKey(e.target.value)}
            placeholder="Enter Gleap Widget Key"
            style={{
              width: '100%',
              padding: '1rem',
              fontSize: '1rem',
              border: '1px solid black',
              outline: 'none',
              borderRadius: '0.5rem'
            }}
          />

          <button
            type="submit"
            style={{
              padding: '1rem',
              fontSize: '1rem',
              background: 'white',
              color: 'black',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '0.5rem'
            }}
          >
            Set Widget Key
          </button>
        </form>

        {currentWidgetKey && (
          <div style={{
            marginTop: '2rem',
            padding: '1rem',
            border: '1px solid black'
          }}>
            <p style={{ marginBottom: '0.5rem' }}>Current Widget key:</p>
            <code style={{ wordBreak: 'break-all' }}>{currentWidgetKey}</code>
          </div>
        )}
      </div>
    </main>
  );
}
