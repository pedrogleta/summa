import TaxonomySidebar from './components/TaxonomySidebar';
import DependenciesSidebar from './components/DependenciesSidebar';

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <TaxonomySidebar />
      <DependenciesSidebar />
      <div className="flex-1 flex items-center justify-center text-white">
        Content area
      </div>
    </div>
  );
}
