import ImageCarousel from './components/ImageCarousel';

export default function Dashboard() {
  return (
    <div className="mt-32">
      <section id="home" className="h-full">
        <ImageCarousel />
      </section>
      <section id="about" style={{ height: '100vh' }}>
        About
      </section>
      <section id="menu" style={{ height: '100vh' }}>
        Menu
      </section>
      <section id="contact-us" style={{ height: '100vh' }}>
        Contact us
      </section>
    </div>
  );
}
