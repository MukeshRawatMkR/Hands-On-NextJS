export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
        🚀 Next.js App Router: Learning Chapters
      </h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><a href="/learning/chapter-01" style={linkStyle}>Chapter 01</a></li>
        {/* <li><a href="/learning/chapter-02" style={linkStyle}>Chapter 02</a></li>
        <li><a href="/learning/chapter-03" style={linkStyle}>Chapter 03</a></li>
        <li><a href="/learning/chapter-04" style={linkStyle}>Chapter 04</a></li>
        <li><a href="/learning/chapter-05" style={linkStyle}>Chapter 05</a></li>
        <li><a href="/learning/chapter-06" style={linkStyle}>Chapter 06</a></li>
        <li><a href="/learning/chapter-07" style={linkStyle}>Chapter 07</a></li>
        <li><a href="/learning/chapter-08" style={linkStyle}>Chapter 08</a></li>
        <li><a href="/learning/chapter-09" style={linkStyle}>Chapter 09</a></li>
        <li><a href="/learning/chapter-10" style={linkStyle}>Chapter 10</a></li>
        <li><a href="/learning/chapter-11" style={linkStyle}>Chapter 11</a></li>
        <li><a href="/learning/chapter-12" style={linkStyle}>Chapter 12</a></li>
        <li><a href="/learning/chapter-13" style={linkStyle}>Chapter 13</a></li>
        <li><a href="/learning/chapter-14" style={linkStyle}>Chapter 14</a></li>
        <li><a href="/learning/chapter-15" style={linkStyle}>Chapter 15</a></li>
        <li><a href="/learning/chapter-16" style={linkStyle}>Chapter 16</a></li> */}
      </ul>
    </main>
  );
}

const linkStyle = {
  textDecoration: 'none',
  color: '#0070f3',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
  display: 'inline-block'
};
