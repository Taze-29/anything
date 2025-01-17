import "./seo.css";

export default function SEO () {
  return (
    <div className="flex justify-center items-center bg-blue-200 rounded-lg rounded-tr-[200px] h-[100%]">
      <div class="seo">
        <div class="seo-header">
          <span class="g"></span>
          <span class="o"></span>
          <span class="o"></span>
          <span class="g"></span>
          <span class="l"></span>
          <span class="e"></span>
          <div class="seo-search"></div>
        </div>
        <div class="seo-results">
          <ul>
            <li id="result-1"><span class="generic-result"></span></li>
            <li id="result-2"><span class="generic-result"></span></li>
            <li id="result-3"><span class="generic-result"></span></li>
            <li id="result-4"><span class="generic-result"></span></li>
            <li id="result-5"><span class="improved-result"></span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}