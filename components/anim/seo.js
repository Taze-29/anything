import "./seo.css";

export default function SEO () {
  return (
    <div className="flex justify-center items-center h-[100%] scale-[0.4] lg:scale-[0.5] xl:scale-[1]">
      <div className="seo">
        <div className="seo-header">
          <span className="g"></span>
          <span className="o"></span>
          <span className="o"></span>
          <span className="g"></span>
          <span className="l"></span>
          <span className="e"></span>
          <div className="seo-search"></div>
        </div>
        <div className="seo-results">
          <ul>
            <li id="result-1"><span className="generic-result"></span></li>
            <li id="result-2"><span className="generic-result"></span></li>
            <li id="result-3"><span className="generic-result"></span></li>
            <li id="result-4"><span className="generic-result"></span></li>
            <li id="result-5"><span className="improved-result"></span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}