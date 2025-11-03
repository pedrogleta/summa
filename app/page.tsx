import TaxonomySidebar from './components/TaxonomySidebar';

export default function Home() {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <TaxonomySidebar />
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        Content area
      </div>
    </div>
  );
}
