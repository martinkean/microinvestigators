---
layout: layouts/home.njk
title: Home
date: 2016-01-01T00:00:00.000Z
permalink: /
eleventyNavigation:
  key: Home
  order: 0
---

<style>
  .videoWrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
  }
  .videoWrapper video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  main {
    padding: 0;
  }
</style>

<div class="videoWrapper">
  <video width="560" height="349" autoplay loop controls>
    <source src="https://res.cloudinary.com/dnf1xnzg3/video/upload/v1622422786/grid_solo_REPEAT-2-TIMES_ybuvp3.mp4" type="video/mp4">
  Your browser does not support the video tag.
  </video>
</div>

# Welcome

A website and blog showcasing data from Enviroschool Southland survey of microplastics in streams and coastal waterways.

This template for building a simple blog website is developed using the [Eleventy static site generator](https://www.11ty.io), with deployment to [Netlify](https://www.netlify.com).

Includes [Netlify CMS](https://www.netlifycms.org) for WYSIWYG content editing, and [Netlify Forms](https://www.netlify.com/docs/form-handling) for processing your site's form data, and Mapbox for display data on maps.

And...
