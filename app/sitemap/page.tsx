export const metadata = {
  title: 'Sitemap',
};

export default function Sitemap() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Sitemap</h1>
      <ul className="space-y-2">
        <li><a href="/" className="text-purple1 hover:underline">Home</a></li>
        <li><a href="/about" className="text-purple1 hover:underline">About</a></li>
        <li><a href="/codex" className="text-purple1 hover:underline">Codex</a></li>
        <li><a href="/structure" className="text-purple1 hover:underline">Structure</a></li>
        <li><a href="/participate" className="text-purple1 hover:underline">Participate</a></li>
        <li><a href="/privacy" className="text-purple1 hover:underline">Privacy</a></li>
        <li><a href="/bylaws" className="text-purple1 hover:underline">Bylaws</a></li>
        <li><a href="/disclaimers" className="text-purple1 hover:underline">Disclaimers</a></li>
        <li><a href="/ai-ethics" className="text-purple1 hover:underline">AI Ethics</a></li>
        <li><a href="/style-guide" className="text-purple1 hover:underline">Style Guide</a></li>
      </ul>
    </div>
  );
}
