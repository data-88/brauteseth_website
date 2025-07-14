---
title: Building Software and Systems
description: More commits than anything
publishDate: 'Jun 10 2024'
seo:
  image:
    src: 'project-7.jpg'
---

Difference systems and IT that I have developed.

<div style="width:100%;height:200px;">
  <iframe 
    id="github-contrib-chart"
    src="https://ghchart.rshah.org/green/data-88" 
    title="GitHub Contributions Chart" 
    frameborder="0" 
    scrolling="no" 
    width="100%" 
    height="200"
    style="background:transparent;">
  </iframe>
</div>
<script>
  function setChartTheme() {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const chart = document.getElementById('github-contrib-chart');
    if (chart) {
      chart.src = isDark 
        ? 'https://ghchart.rshah.org/green/data-88' 
        : 'https://ghchart.rshah.org/green/data-88';
    }
  }
  setChartTheme();
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setChartTheme);
</script>

[View my Data-88 GitHub repository](https://github.com/data-88/)