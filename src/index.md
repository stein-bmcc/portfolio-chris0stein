---
title: Home Page
layout: base
pageClass: home
tags:
  - home
  - welcome
  - info
---
<h2 class="mainHeading">Main Content</h2>
<section class="content">
  <p>Add your own content. You can delete all of the content on this page after the front-matter.</p>
</section>

text by itself is a paragraph

# one hashtag is h1
## two are h2
### and so on

1. numbers with dot form numbered lists
1. sdflds
1. skldfjsdklf
3. llskjfsdkl

- this is a bullet list
- another item

[This is th elink text](http://google.com)

<div class="intro">
    <h2>heading</h2>
</div>

## Other instructions

You can write in either markdown OR HTML and can even mix them both together on the same page

Later you will also see that you can put nunjucks code in these files too.

You will create a .md file here for each .html file you would have made in a normal siet.

Don't forget the front matter!

<h1>Chris Stein's Portfolio</h1>
  <div class="intro">
    <p>Welcome! I am a professor, front end developer and amateur photographer.</p>
  </div>

  <div class="img"><img src="/images/npm.png" alt=""></div>

  <section class="projects card-container">
  <h2 class="project-title">My Work</h2>
    <div class="project card">
      <div class="project-image"><img src="https://unsplash.it/250/250" alt="Placeholder Image" />
  </div>
      <h3 class="project-title">Poster Project</h3>
      <p class="project-description">This is a description for the project. It offers more insight and detail.</p>
      <p class="project-link">
        <a href="/poster.html">View Project</a>
      </p>
    </div>
    <div class="project card">
      <div class="project-image"><img src="https://unsplash.it/250/250" alt="Placeholder Image" /></div>
      <h3 class="project-title">Web Site</h3>
      <p class="project-description">This is a description for the project. It offers more insight and detail.</p>
      <p class="project-link">
        <a href="/web.html">View Project</a>
      </p>
    </div>
    <div class="project card ">
      <div class="project-image"><img src="https://unsplash.it/250/250" alt="Placeholder Image" /></div>
      <h3 class="project-title">Creative Coding</h3>
      <p class="project-description">This is a description for the project. It offers more insight and detail.</p>
      <p class="project-link">
        <a href="/creative-coding.html">View Project</a>
      </p>
    </div>
    <div class="project card">
      <div class="project-image"><img src="https://unsplash.it/250/250" alt="Placeholder Image" /></div>
      <h3 class="project-title">Photo Editing</h3>
      <p class="project-description">This is a description for the project. It offers more insight and detail.</p>
      <p class="project-link">
        <a href="/photo-edit.html">View Project</a>
      </p>
    </div>
  </section>
