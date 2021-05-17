---
pagination:
  data: posts
  size: 1
  alias: posts
layout: layouts/base.njk
title: Posts
date: 2016-01-01T00:00:00.000Z
permalink: /posts/index.html
eleventyNavigation:
  key: Posts
  order: 0
---

<h1>{{ posts.title.rendered }}</h1>
<div class="mainContent">
    {{posts.content.rendered | safe}}
</div>
