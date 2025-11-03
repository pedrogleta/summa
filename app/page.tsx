import TaxonomySidebar from './components/TaxonomySidebar';

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <TaxonomySidebar />
      <div className="flex-1 flex items-center justify-center text-white">
        Content area
      </div>
    </div>
  );
}
