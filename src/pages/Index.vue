<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" style="background-image: url('img/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>Clean Blog</h1>
              <span class="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div
            class="post-preview"
            v-for="edge in $page.posts.edges"
            :key="edge.node.id"
          >
            <g-link :to="'/post/' + edge.node.id">
              <h2 class="post-title">{{ edge.node.title }}</h2>
              <!-- <h3 class="post-subtitle">
                Problems look mighty small from 150 miles up
              </h3> -->
            </g-link>
            <p class="post-meta">
              Posted by
              <a href="#">{{
                edge.node.createdby.firstname + edge.node.createdby.lastname
              }}</a>
              on {{ edge.node.created_at }}
            </p>
            <p>
              <a
                class="tag"
                href=""
                v-for="tag in edge.node.tags"
                :key="tag.id"
                >{{ tag.title }}</a
              >
            </p>
            <hr />
          </div>

          <!-- <div class="post-preview">
            <a href="post.html">
              <h2 class="post-title">
                I believe every human has a finite number of heartbeats. I don't
                intend to waste any of mine.
              </h2>
            </a>
            <p class="post-meta">
              Posted by
              <a href="#">Start Bootstrap</a>
              on September 18, 2017
            </p>
          </div>
          <hr />
          <div class="post-preview">
            <a href="post.html">
              <h2 class="post-title">Science has not yet mastered prophecy</h2>
              <h3 class="post-subtitle">
                We predict too much for the next year and yet far too little for
                the next ten.
              </h3>
            </a>
            <p class="post-meta">
              Posted by
              <a href="#">Start Bootstrap</a>
              on August 24, 2017
            </p>
          </div>
          <hr />
          <div class="post-preview">
            <a href="post.html">
              <h2 class="post-title">Failure is not an option</h2>
              <h3 class="post-subtitle">
                Many say exploration is part of our destiny, but it’s actually
                our duty to future generations.
              </h3>
            </a>
            <p class="post-meta">
              Posted by
              <a href="#">Start Bootstrap</a>
              on July 8, 2017
            </p>
          </div>
          <hr /> -->
          <!-- Pager -->
          <!-- <div class="clearfix">
            <a class="btn btn-primary float-right" href="#"
              >Older Posts &rarr;</a
            >
          </div> -->
          <!-- 分页组件 -->
          <pager :info="$page.posts.pageInfo" />
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query($page: Int) {
posts: allStrapiPost(perPage: 2, page: $page) @paginate{
  pageInfo {
    totalPages
    currentPage
  }
   edges {
    node {
      id
      title
      created_at
     	createdby {
        id
        firstname
        lastname
      }
      tags {
        id
        title
      }
    }
  }
}
}
</page-query>
<script>
import { Pager } from "gridsome";
export default {
  name: "HomePage",
  components: {
    Pager,
  },
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
.tag {
  margin-right: 5px;
}
</style>
