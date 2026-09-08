import { articles } from "../data/articles.js";
import { personal } from "../data/meta.js";

export default function Writing() {
  return (
    <div className="site-container writing-layout">
      <div className="section-label"><span>05</span><p>Blog</p></div>

      <div>
        <div className="writing-heading">
          <h2 className="section-heading">Writing about systems that have to work.</h2>
          <div>
            <p>
              Field notes on reliability, infrastructure, system design, and applied AI—written
              for engineers building beyond the demo.
            </p>
            <a href={personal.socials.medium} target="_blank" rel="noopener noreferrer">
              View every article on Medium <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="blog-archive">
          <div className="blog-archive-label">
            <p>All articles</p>
            <span>{articles.length} essays · newest first</span>
          </div>
          {articles.map((article, index) => (
            <a
              className="blog-row"
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              key={article.href}
            >
              <span className="blog-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p>{article.topic}</p>
                <h3>{article.title}</h3>
              </div>
              <span className="blog-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
