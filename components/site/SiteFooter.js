export default function SiteFooter({ dictionary }) {
  return (
    <footer className="site-footer" data-reveal>
      <div>
        <p>{dictionary.brand}</p>
        <p>{dictionary.footer.tagline}</p>
      </div>
      <p>{dictionary.footer.legal}</p>
    </footer>
  );
}
