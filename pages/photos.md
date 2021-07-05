---
pagination:
  data: posts
  size: 1
  alias: posts
layout: layouts/base.njk
title: Photos
eleventyNavigation:
  key: Photos
  order: 1
---

<!--
<h3>{{ posts.title.rendered }}</h3> -->
<div class="gallery-grid">
      {{ posts.content.rendered | safe }}
</div>
