---
pagination:
  data: posts
  size: 1
  alias: posts
layout: layouts/base.njk
title: Gallery
date: 2016-01-01T00:00:00.000Z
permalink: /gallery/index.html
eleventyNavigation:
  key: Gallery
  order: 1
---

<h3>{{ posts.title.rendered }}</h3>
<div class="gallery-grid">
      {{ posts.content.rendered | safe }}
</div>
