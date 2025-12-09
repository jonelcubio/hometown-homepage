export function Landing() {
  console.log('landing loaded!');
  return(
    <>
      <div className="image">
        <img src="https://images.pexels.com/photos/2848492/pexels-photo-2848492.jpeg" className="img" alt="Seoul, Seoul, South Korea" title="Seoul, Seoul, South Korea" />
      </div>

      <a href="https://github.com/jonelcubio/hometown-homepage" target="_blank" rel="noreferrer"><div className="heading">Seoul,South Korea</div></a>

      <div className="subtitle">Enjoy culture and sports in this vibrant city close to the center of Seoul.</div>
    </>
  );
}