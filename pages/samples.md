---
pagination:
  data: samples
  size: 1
  alias: samples
layout: layouts/base.njk
title: Samples
date: 2016-01-01T00:00:00.000Z
permalink: /samples/index.html
eleventyNavigation:
  key: Samples
  order: 0
---

<h1>{{ samples.title.rendered }}</h1>
<div class="mainContent">
    {{ samples.content.rendered | safe }}
</div>
