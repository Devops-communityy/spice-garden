import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { Footer } from './components/Footer';
import { menuData } from './data/menuData';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <main>
        {menuData.map((category, index) => (
          <MenuSection key={category.id} category={category} index={index} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
